// VeloriaAI lebegő chat widget
const style = document.createElement('style');
style.innerHTML = `
#veloria-chat-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background-color: #111;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  font-size: 28px;
  cursor: pointer;
  z-index: 9999;
}
#veloria-chat-box {
  position: fixed;
  bottom: 100px;
  right: 24px;
  width: 320px;
  height: 400px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 12px;
  display: none;
  flex-direction: column;
  z-index: 9998;
}
#veloria-chat-box textarea {
  width: 100%;
  height: 60px;
  border: none;
  border-top: 1px solid #ccc;
  padding: 8px;
  resize: none;
}
#veloria-chat-box .messages {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  font-family: sans-serif;
  font-size: 14px;
}
`;
document.head.appendChild(style);

const button = document.createElement('button');
button.id = 'veloria-chat-btn';
button.innerHTML = '💬';
document.body.appendChild(button);

const chatBox = document.createElement('div');
chatBox.id = 'veloria-chat-box';
chatBox.innerHTML = `
  <div class="messages" id="veloria-msgs"></div>
  <textarea id="veloria-input" placeholder="Írj valamit..."></textarea>
`;
document.body.appendChild(chatBox);

const toggle = () => {
  chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
};
button.addEventListener('click', toggle);

const input = chatBox.querySelector('textarea');
const messages = chatBox.querySelector('.messages');
input.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    const msg = input.value.trim();
    if (!msg) return;
    messages.innerHTML += `<div><b>🧑‍💻</b> ${msg}</div>`;
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    try {
      const res = await fetch('https://veloriaai.onrender.com/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg }),
      });
      const data = await res.json();
      messages.innerHTML += `<div><b>🤖</b> ${data.reply}</div>`;
      messages.scrollTop = messages.scrollHeight;
    } catch (err) {
      messages.innerHTML += `<div><b>❌</b> Hiba történt: ${err.message}</div>`;
    }
  }
});
