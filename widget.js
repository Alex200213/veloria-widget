
(function() {
  const bubble = document.createElement("div");
  bubble.style.position = "fixed";
  bubble.style.bottom = "20px";
  bubble.style.right = "20px";
  bubble.style.width = "300px";
  bubble.style.height = "400px";
  bubble.style.background = "#2d1e4a";
  bubble.style.borderRadius = "20px";
  bubble.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
  bubble.style.zIndex = "9999";
  bubble.style.display = "flex";
  bubble.style.flexDirection = "column";
  bubble.style.overflow = "hidden";
  bubble.innerHTML = `
    <div style='padding: 16px; background: #1b1130; color: white; font-weight: bold; text-align: center;'>
      🤖 VeloriaAI
    </div>
    <div style='flex: 1; background: white; padding: 10px; overflow-y: auto; font-family: sans-serif;'>
      <p><strong>VeloriaAI:</strong> Üdvözöllek! Miben segíthetek?</p>
    </div>
    <div style='padding: 10px; background: #eee; display: flex;'>
      <input type='text' placeholder='Írj ide...' style='flex: 1; padding: 8px; border: none; border-radius: 5px;' />
      <button style='margin-left: 8px; background: #6c4fc1; color: white; border: none; padding: 8px 12px; border-radius: 5px;'>Küldés</button>
    </div>
  `;
  document.body.appendChild(bubble);
})();
