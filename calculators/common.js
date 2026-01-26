function calculateSIP() {
  const P = +document.getElementById("sipAmount").value;
  const rate = +document.getElementById("sipRate").value;
  const years = +document.getElementById("sipYears").value;

  if (!P || !rate || !years) return;

  const r = rate / 12 / 100;
  const n = years * 12;

  const fv = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = P * n;

  document.getElementById("sipResult").innerHTML = `
    <strong>Total Invested:</strong> ₹${invested.toLocaleString()}<br>
    <strong>Estimated Value:</strong> ₹${Math.round(fv).toLocaleString()}<br>
    <small>Market returns are not guaranteed</small>
  `;
  document.getElementById("sipResult").classList.remove("hidden");
}
function compareFDvsSIP() {
  const P = +document.getElementById("invAmount").value;
  const years = +document.getElementById("invYears").value;
  const fdRate = +document.getElementById("fdRate").value / 100;
  const sipRate = +document.getElementById("sipReturn").value / 100;

  if (!P || !years) return;

  const fdValue = P * Math.pow(1 + fdRate, years);
  const sipValue = P * Math.pow(1 + sipRate, years);

  document.getElementById("compareResult").innerHTML = `
    <strong>FD Value:</strong> ₹${Math.round(fdValue).toLocaleString()}<br>
    <strong>SIP Value:</strong> ₹${Math.round(sipValue).toLocaleString()}<br><br>
    <strong>Insight:</strong>
    SIP may outperform FD over long term but carries market risk.
  `;
  document.getElementById("compareResult").classList.remove("hidden");
}
function calculateGoalSIP() {
  const FV = +document.getElementById("goalAmount").value;
  const years = +document.getElementById("goalYears").value;
  const rate = +document.getElementById("goalRate").value;

  if (!FV || !years || !rate) return;

  const r = rate / 12 / 100;
  const n = years * 12;

  const sip = FV / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

  document.getElementById("goalResult").innerHTML = `
    <strong>Required Monthly SIP:</strong> ₹${Math.round(sip).toLocaleString()}<br>
    <small>Assumes consistent returns & discipline</small>
  `;
  document.getElementById("goalResult").classList.remove("hidden");
}
