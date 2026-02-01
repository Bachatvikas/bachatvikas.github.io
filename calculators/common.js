/* =========================
   SIP CALCULATOR (with Inflation)
   ========================= */
function calculateSIP() {
  const P = +document.getElementById("sipAmount").value;
  const rate = +document.getElementById("sipRate").value;
  const years = +document.getElementById("sipYears").value;
  const inflation = +document.getElementById("sipInflation")?.value || 0;

  if (!P || !rate || !years) {
    alert("Please fill all required fields");
    return;
  }

  const r = rate / 12 / 100;
  const n = years * 12;

  // Nominal SIP future value
  const futureValue =
    P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

  // Inflation adjusted value
  let realValue = futureValue;
  if (inflation > 0) {
    realValue = futureValue / Math.pow(1 + inflation / 100, years);
  }

  const investedAmount = P * n;

  document.getElementById("sipResult").innerHTML = `
    <strong>Total Invested:</strong> ₹${investedAmount.toLocaleString()}<br>
    <strong>Estimated Value:</strong> ₹${Math.round(futureValue).toLocaleString()}<br>
    <strong>Value After Inflation:</strong> ₹${Math.round(realValue).toLocaleString()}<br>
    <small>Returns are indicative and market-linked</small>
  `;
}

/* =========================
   FD vs SIP COMPARISON
   ========================= */
function compareFDvsSIP() {
  const P = +document.getElementById("invAmount").value;
  const years = +document.getElementById("invYears").value;
  const fdRate = +document.getElementById("fdRate").value / 100;
  const sipRate = +document.getElementById("sipReturn").value / 100;

  if (!P || !years) {
    alert("Please fill all required fields");
    return;
  }

  const fdValue = P * Math.pow(1 + fdRate, years);
  const sipValue = P * Math.pow(1 + sipRate, years);

  document.getElementById("compareResult").innerHTML = `
    <strong>FD Value:</strong> ₹${Math.round(fdValue).toLocaleString()}<br>
    <strong>SIP Value:</strong> ₹${Math.round(sipValue).toLocaleString()}<br><br>
    <strong>Insight:</strong> SIP may outperform FD over long term but carries market risk.
  `;
}

/* =========================
   GOAL-BASED SIP CALCULATOR
   ========================= */
function calculateGoalSIP() {
  const targetAmount = +document.getElementById("goalAmount").value;
  const years = +document.getElementById("goalYears").value;
  const rate = +document.getElementById("goalRate").value;

  if (!targetAmount || !years || !rate) {
    alert("Please fill all required fields");
    return;
  }

  const r = rate / 12 / 100;
  const n = years * 12;

  const monthlySIP =
    targetAmount / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));

  document.getElementById("goalResult").innerHTML = `
    <strong>Required Monthly SIP:</strong> ₹${Math.round(monthlySIP).toLocaleString()}<br>
    <small>Assumes consistent returns and investment discipline</small>
  `;
}
