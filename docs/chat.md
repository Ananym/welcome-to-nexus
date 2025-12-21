# Ask a Robot

I gave all the text on this site to Gemini Flash so you can ask it questions.
If it's struggling with your question, send an nmail to **Astrael** in-game.

<div id="chat-container">
  <textarea id="chat-question" maxlength="500" placeholder="Ask a question about Nexus..."></textarea>
  <button id="chat-submit">Ask</button>
  <div id="chat-response"></div>
</div>

<style>
  #chat-container textarea {
    width: 100%;
    height: 80px;
    font-size: 16px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: inherit;
    resize: vertical;
  }
  #chat-container button {
    margin-top: 0.5rem;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    background-color: #cd853f;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  }
  #chat-container button:hover {
    background-color: #b8860b;
  }
  #chat-container button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  #chat-response {
    white-space: pre-wrap;
    background: #f5f5f5;
    padding: 1rem;
    margin-top: 1rem;
    min-height: 100px;
    border-radius: 4px;
    line-height: 1.5;
  }
  #chat-response:empty {
    display: none;
  }
  #chat-response.error {
    color: #c00;
    background: #fff0f0;
  }
  #chat-response.loading {
    color: #888;
  }
</style>
