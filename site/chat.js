(function() {
  'use strict';

  const WORKER_URL = CHAT_CONFIG.workerUrl;

  function initChat() {
    const container = document.getElementById('chat-container');
    if (!container) return; // Not on chat page

    const questionEl = document.getElementById('chat-question');
    const submitBtn = document.getElementById('chat-submit');
    const responseEl = document.getElementById('chat-response');

    // Avoid double-binding
    if (submitBtn.dataset.bound) return;
    submitBtn.dataset.bound = 'true';

    submitBtn.addEventListener('click', askQuestion);
    questionEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        askQuestion();
      }
    });

    async function askQuestion() {
      const question = questionEl.value.trim();
      if (!question) return;

      responseEl.textContent = 'Thinking...';
      responseEl.className = 'loading';
      submitBtn.disabled = true;

      try {
        const res = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question })
        });

        if (!res.ok) {
          let errorMsg = 'An error occurred';
          try {
            const err = await res.json();
            errorMsg = err.error || errorMsg;
          } catch {
            // Response wasn't JSON
          }
          responseEl.textContent = errorMsg;
          responseEl.className = 'error';
          return;
        }

        // Stream the response
        responseEl.textContent = '';
        responseEl.className = '';

        const reader = res.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          responseEl.textContent += chunk;
        }

      } catch (e) {
        console.error('Chat error:', e);
        responseEl.textContent = 'Network error. Please check your connection and try again.';
        responseEl.className = 'error';
      } finally {
        submitBtn.disabled = false;
      }
    }
  }

  // Initialize when docsify finishes rendering a page
  if (window.$docsify) {
    window.$docsify.plugins = (window.$docsify.plugins || []).concat(function(hook) {
      hook.doneEach(initChat);
    });
  } else {
    // Fallback for non-docsify usage
    document.addEventListener('DOMContentLoaded', initChat);
  }
})();
