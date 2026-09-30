(function () {
  var btn = document.getElementById('menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var calc = document.getElementById('spread-calc');
  if (!calc) return;

  function val(id) {
    var v = parseFloat(document.getElementById(id).value);
    return isFinite(v) && v >= 0 ? v : 0;
  }
  function money(n) {
    var s = Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return (n < 0 ? '-$' : '$') + s;
  }

  function update() {
    var buy = val('c-buy'), sell = val('c-sell'), size = val('c-size');
    var feeBuy = val('c-fee-buy') / 100, feeSell = val('c-fee-sell') / 100, transfer = val('c-transfer');
    var out = document.getElementById('c-net');
    var verdict = document.getElementById('c-verdict');
    if (!buy || !sell || !size) {
      out.textContent = '$0.00';
      verdict.textContent = 'Enter a buy price, sell price and trade size.';
      return;
    }
    var qty = size / buy;
    var gross = qty * (sell - buy);
    var fees = size * feeBuy + qty * sell * feeSell;
    var net = gross - fees - transfer;
    var pct = (net / size) * 100;

    document.getElementById('c-gross').textContent = money(gross);
    document.getElementById('c-fees').textContent = money(-fees);
    document.getElementById('c-move').textContent = money(-transfer);
    out.textContent = money(net);
    out.className = 'num ' + (net >= 0 ? 'pos' : 'neg');
    document.getElementById('c-pct').textContent = (pct >= 0 ? '+' : '') + pct.toFixed(3) + '%';
    document.getElementById('c-pct').className = 'num ' + (net >= 0 ? 'pos' : 'neg');
    verdict.textContent = net >= 0
      ? 'The spread covers your costs in this example.'
      : 'Costs are larger than the spread in this example. This is why a scanner has to work with net numbers.';
  }

  calc.addEventListener('input', update);
  update();
})();
