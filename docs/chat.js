(function() {
  'use strict';

  const WORKER_URL = CHAT_CONFIG.workerUrl;

  // Conversation history for this session
  let conversation = [];

  function initChat() {
    const container = document.getElementById('chat-container');
    if (!container) return; // Not on chat page

    const messagesEl = document.getElementById('chat-messages');
    const inputEl = document.getElementById('chat-input');
    const sendBtn = document.getElementById('chat-send');

    // Avoid double-binding
    if (sendBtn.dataset.bound) return;
    sendBtn.dataset.bound = 'true';

    // Reset conversation when page loads
    conversation = [];

    // Auto-resize textarea
    inputEl.addEventListener('input', () => {
      inputEl.style.height = 'auto';
      inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + 'px';
    });

    // Send on click
    sendBtn.addEventListener('click', sendMessage);

    // Send on Enter (Shift+Enter for newline)
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    function addMessage(role, content, className = '') {
      const msg = document.createElement('div');
      msg.className = `chat-message ${role} ${className}`.trim();

      // For assistant messages, convert file references to links
      if (role === 'assistant' && !className.includes('loading')) {
        msg.innerHTML = convertFileRefsToLinks(content);
      } else {
        msg.textContent = content;
      }

      messagesEl.appendChild(msg);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return msg;
    }

    // Convert (path/to/file.md) references to clickable docsify links
    function convertFileRefsToLinks(text) {
      // Escape HTML first to prevent XSS
      const escaped = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

      // Convert (folder/file.md) patterns to links
      // Matches: (word/word.md) or (word/word-word.md) etc.
      return escaped.replace(/\(([a-z0-9-]+\/[a-z0-9-]+\.md)\)/gi, (match, path) => {
        const href = '#/' + path.replace(/\.md$/, '');
        return `(<a href="${href}">${path}</a>)`;
      });
    }

    function setInputEnabled(enabled) {
      inputEl.disabled = !enabled;
      sendBtn.disabled = !enabled;
      if (enabled) {
        inputEl.focus();
      }
    }

    async function sendMessage() {
      const text = inputEl.value.trim();
      if (!text) return;

      // Add user message to UI and conversation
      addMessage('user', text);
      conversation.push({ role: 'user', content: text });

      // Clear input and disable
      inputEl.value = '';
      inputEl.style.height = 'auto';
      setInputEnabled(false);

      // Add loading message
      const loadingMsg = addMessage('assistant', 'Thinking...', 'loading');

      try {
        const res = await fetch(WORKER_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ conversation })
        });

        if (!res.ok) {
          let errorText = 'An error occurred';
          try {
            const err = await res.json();
            errorText = err.error || errorText;
          } catch {
            // Response wasn't JSON
          }
          loadingMsg.textContent = errorText;
          loadingMsg.className = 'chat-message assistant error';
          // Remove failed exchange from conversation
          conversation.pop();
          return;
        }

        // Get the response
        const responseText = await res.text();

        // Update loading message with response (with links)
        loadingMsg.innerHTML = convertFileRefsToLinks(responseText);
        loadingMsg.className = 'chat-message assistant';

        // Add to conversation history
        conversation.push({ role: 'assistant', content: responseText });

      } catch (e) {
        console.error('Chat error:', e);
        loadingMsg.textContent = 'Network error. Please check your connection and try again.';
        loadingMsg.className = 'chat-message assistant error';
        // Remove failed exchange from conversation
        conversation.pop();
      } finally {
        setInputEnabled(true);
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
