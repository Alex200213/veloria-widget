(function () {
  const style = document.createElement('style');
  style.innerHTML = `
    #veloria-chat-btn {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background-color: #7e5bef;
      color: white;
      border: none;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      font-size: 28px;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 4px 10px rgba(126, 91, 239, 0.4);
    }
    #veloria-chat-box {
      position: fixed;
      bottom: 100px;
      right: 24px;
      width: 360px;
      height: 480px;
      background: #fff;
      border: 2px solid #7e5bef;
      border-radius: 12px;
      display: none;
      flex-direction: column;
      z-index: 9998;
      box-shadow: 0 4px 20px rgba(126, 91, 239, 0.2);
      font-family: 'Arial', sans-serif;
      overflow: hidden;
    }
    #veloria-header {
      background-color: #7e5bef;
      color: white;
      padding: 12px;
      text-align: center;
      font-weight: bold;
      font-size: 16px;
    }
    #veloria-messages {
      flex: 1;
      padding: 12px;
      overflow-y: auto;
      font-size: 14px;
    }
    #veloria-input {
      display: flex;
      border-top: 1px solid #ccc;
    }
    #veloria-input textarea {
      flex: 1;
      padding: 10px;
      border: none;
      resize: none;
      font-size: 14px;
    }
    #veloria-input button {
      background-color: #7e5bef;
      color: white;
      border: none;
      padding: 0 16px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement('button');
  btn.id = 'veloria-chat-btn';
  btn.innerHTML = '💬';
  document.body.appendChild(btn);

  const box = document.createElement('div');
  box.id = 'veloria-chat-box';
  box.innerHTML = `
    <div id="veloria-header">🤖 Veloria AI Assistant</div>
    <div id="veloria-messages"></div>
    <div id="veloria-input">
      <textarea placeholder="Írj valamit..."></textarea>
      <button>Küldés</button>
    </div>
  `;
  document.body.appendChild(box);

  const messages = box.querySelector('#veloria-messages');
  const textarea = box.querySelector('textarea');
  const sendBtn = box.querySelector('button');

  btn.addEventListener('click', () => {
    box.style.display = box.style.display === 'flex' ? 'none' : 'flex';
  });

  sendBtn.addEventListener('click', async () => {
    const msg = textarea.value.trim();
    if (!msg) return;
    messages.innerHTML += `<div><b>🧑‍💻:</b> ${msg}</div>`;
    messages.scrollTop = messages.scrollHeight;
    textarea.value = '';

    messages.innerHTML += `<div><i>⏳ Válaszolok...</i></div>`;
    messages.scrollTop = messages.scrollHeight;

    try {
  const res = await fetch('https://veloriaai.onrender.com/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: msg }),
  });

  const data = await res.json();
  console.log('🔍 AI válasz:', data);

  if (!data || !data.reply) {
    messages.innerHTML += `<div><b>🤖:</b> ❌ Nincs válasz (AI error)</div>`;
  } else {
    messages.innerHTML += `<div><b>🤖:</b> ${data.reply}</div>`;
  }

} catch (e) {
  console.error('❌ Hiba történt:', e);
  messages.innerHTML += `<div><b>⚠️</b> Hiba történt. 😢</div>`;
}
