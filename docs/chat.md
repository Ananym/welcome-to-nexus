# Ask a Robot

I gave all the text on this site to Gemini Flash so you can ask it questions.
If it's struggling with your question, send an nmail to **Astrael** in-game.

<div id="chat-container">
  <div id="chat-messages"></div>
  <div id="chat-input-area">
    <textarea id="chat-input" maxlength="500" placeholder="Ask a question about Nexus..." rows="1"></textarea>
    <button id="chat-send" title="Send">Send</button>
  </div>
</div>

<style>
  #chat-container {
    display: flex;
    flex-direction: column;
    height: 60vh;
    min-height: 300px;
    max-height: 600px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background: #fff;
  }

  #chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  #chat-messages:empty::before {
    content: "Ask a question to get started...";
    color: #999;
    font-style: italic;
    align-self: center;
    margin-top: 2rem;
  }

  .chat-message {
    max-width: 85%;
    padding: 0.75rem 1rem;
    border-radius: 12px;
    line-height: 1.5;
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  .chat-message.user {
    align-self: flex-end;
    background: #cd853f;
    color: white;
    border-bottom-right-radius: 4px;
  }

  .chat-message.assistant {
    align-self: flex-start;
    background: #f0f0f0;
    color: #333;
    border-bottom-left-radius: 4px;
  }

  .chat-message.error {
    background: #fee;
    color: #c00;
  }

  .chat-message.loading {
    background: #f0f0f0;
    color: #888;
    font-style: italic;
  }

  #chat-input-area {
    display: flex;
    gap: 0.5rem;
    padding: 0.75rem;
    border-top: 1px solid #ddd;
    background: #fafafa;
  }

  #chat-input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    font-family: inherit;
    resize: none;
    min-height: 44px;
    max-height: 120px;
    line-height: 1.4;
  }

  #chat-input:focus {
    outline: none;
    border-color: #cd853f;
  }

  #chat-input:disabled {
    background: #eee;
  }

  #chat-send {
    padding: 0.75rem 1.25rem;
    background: #cd853f;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 44px;
  }

  #chat-send:hover:not(:disabled) {
    background: #b8860b;
  }

  #chat-send:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  /* Mobile adjustments */
  @media (max-width: 600px) {
    #chat-container {
      height: 70vh;
      border-radius: 0;
      border-left: none;
      border-right: none;
    }

    .chat-message {
      max-width: 90%;
      padding: 0.6rem 0.8rem;
      font-size: 15px;
    }

    #chat-input-area {
      padding: 0.5rem;
    }

    #chat-input {
      padding: 0.6rem;
    }

    #chat-send {
      padding: 0.6rem 1rem;
    }
  }
</style>
