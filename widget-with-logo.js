
(() => {
  const widget = document.createElement("div");
  widget.style.position = "fixed";
  widget.style.bottom = "20px";
  widget.style.right = "20px";
  widget.style.zIndex = "9999";
  widget.innerHTML = `
    <div style="background:#1d0e2e;border-radius:12px;padding:16px 20px;box-shadow:0 0 20px rgba(0,0,0,0.3);color:white;font-family:sans-serif;width:320px;">
      <div style="display:flex;align-items:center;margin-bottom:12px;">
        <img src="https://alex200213.github.io/veloria-widget/veloria-logo.svg" alt="VeloriaAI" style="height:24px;margin-right:10px;">
        <strong style="font-size:16px;">VeloriaAI</strong>
      </div>
      <div style="background:#2f1b4a;padding:10px;border-radius:8px;">
        <p style="margin:0;">Üdvözöllek! Miben segíthetek?</p>
      </div>
      <input type="text" placeholder="Írj ide..." style="margin-top:12px;width:100%;padding:8px;border:none;border-radius:6px;">
    </div>
  `;
  document.body.appendChild(widget);
})();
