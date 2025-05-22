
(function() {
  const bubble = document.createElement("div");
  bubble.style.position = "fixed";
  bubble.style.bottom = "20px";
  bubble.style.right = "20px";
  bubble.style.width = "360px";
  bubble.style.height = "480px";
  bubble.style.background = "#2d1e4a";
  bubble.style.borderRadius = "24px";
  bubble.style.boxShadow = "0 0 24px rgba(0,0,0,0.3)";
  bubble.style.zIndex = "99999";
  bubble.style.display = "flex";
  bubble.style.flexDirection = "column";
  bubble.style.overflow = "hidden";

  bubble.innerHTML = `
    <div style='padding: 20px; background: #1b1130; color: white; font-weight: bold; font-size: 16px; display: flex; align-items: center; gap: 10px;'>
      <img src="https://alex200213.github.io/veloria-widget/va-logo-purple.svg" alt="VeloriaAI" style="height: 28px;">
      VeloriaAI
    </div>
    <div style='flex: 1; background: white; padding: 16px; overflow-y: auto; font-family: sans-serif; font-size: 15px;'>
      <p><strong>VeloriaAI:</strong> Üdvözöllek! Miben segíthetek?</p>
    </div>
    <div style='padding: 10px; background: #eee; display: flex;'>
      <input type="text" placeholder="Írj ide..." style="flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
      <button style="margin-left: 8px; padding: 8px 16px; background: #6a0dad; color: white; border: none; border-radius: 4px;">Küldés</button>
    </div>
  `;

  document.body.appendChild(bubble);
})();
