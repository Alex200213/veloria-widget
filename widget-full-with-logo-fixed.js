(() => {
  const widget = document.createElement("div");
  widget.style.position = "fixed";
  widget.style.bottom = "20px";
  widget.style.right = "20px";
  widget.style.width = "360px";
  widget.style.height = "420px";
  widget.style.background = "#1d0e2e";
  widget.style.borderRadius = "20px";
  widget.style.boxShadow = "0 0 20px rgba(0,0,0,0.4)";
  widget.style.zIndex = "99999";
  widget.style.display = "flex";
  widget.style.flexDirection = "column";
  widget.style.overflow = "hidden";
  widget.innerHTML = `
    <div style='padding: 16px; background: #1b1130; color: white; font-weight: bold; text-align: center; display: flex; align-items: center; gap: 10px;'>
      <img src="https://alex200213.github.io/veloria-widget/veloria-logo.svg" style="height: 24px;" />
      <span style="font-size: 16px;">VeloriaAI</span>
    </div>
    <div style='flex: 1; background: white; padding: 10px; overflow-y: auto; font-family: sans-serif;'>
      <p><strong>VeloriaAI:</strong> Üdvözöllek! Miben segíthetek?</p>
    </div>
    <div style='padding: 10px; background: #eee; display: flex;'>
      <input type="text" placeholder="Írj ide..." style="flex: 1; padding: 8px; border-radius: 4px; border: none;" />
      <button style="margin-left: 8px; padding: 8px 16px; background: #7a4fd2; color: white; border: none; border-radius: 4px;'>Küldés</button>
    </div>
  `;
  document.body.appendChild(widget);
})();