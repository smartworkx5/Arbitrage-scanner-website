(function () {
  'use strict';
  var doc = document;
  doc.documentElement.classList.add('js');
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- helpers ---------- */
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function fp(v) {
    if (v >= 1000) return v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (v >= 10) return v.toFixed(2);
    return v.toFixed(4);
  }
  function exName(i) { return 'EX' + pad(i); }
  function flash(el, up) {
    if (!el) return;
    var c = up ? 'fl-up' : 'fl-dn';
    el.classList.remove('fl-up', 'fl-dn');
    void el.offsetWidth;
    el.classList.add(c);
  }
  function clock() {
    var d = new Date();
    return pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }
  function usd(n, sign) {
    var s = Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return (n < 0 ? '-$' : (sign ? '+$' : '$')) + s;
  }

  var PAIRS = [
    ['BTC/USDT', 97250], ['ETH/USDT', 3420], ['SOL/USDT', 182.4], ['BNB/USDT', 612.3],
    ['XRP/USDT', 2.31], ['DOGE/USDT', 0.176], ['ADA/USDT', 0.68], ['AVAX/USDT', 38.4],
    ['LINK/USDT', 17.9], ['DOT/USDT', 6.85], ['LTC/USDT', 92.1]
  ];

  /* ---------- theme colour for mobile browser bar ---------- */
  var tc = doc.querySelector('meta[name="theme-color"]');
  if (tc) tc.setAttribute('content', '#04070b');

  /* ---------- mobile menu ---------- */
  var btn = doc.getElementById('menu-btn');
  var nav = doc.getElementById('site-nav');
  if (btn && nav) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    btn.setAttribute('aria-label', 'Open menu');
    btn.addEventListener('click', function () { setOpen(!nav.classList.contains('open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    doc.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 1000) setOpen(false); });

    // mark current page in nav when the markup didn't
    if (!nav.querySelector('[aria-current]')) {
      var file = (location.pathname.split('/').pop() || 'index.html');
      var links = nav.querySelectorAll('a:not(.btn)');
      for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('href') === file) links[i].setAttribute('aria-current', 'page');
      }
    }
  }

  /* ---------- table -> stacked cards on phones (labels from headers) ---------- */
  var tables = doc.querySelectorAll('table');
  for (var t = 0; t < tables.length; t++) {
    var heads = [].map.call(tables[t].querySelectorAll('thead th'), function (h) { return h.textContent.trim(); });
    [].forEach.call(tables[t].querySelectorAll('tbody tr'), function (tr) {
      [].forEach.call(tr.children, function (td, idx) { if (heads[idx]) td.setAttribute('data-label', heads[idx]); });
    });
  }

  /* ---------- live price ticker tape (all pages) ---------- */
  (function ticker() {
    var head = doc.querySelector('.site-head');
    if (!head) return;
    var state = PAIRS.map(function (p) {
      var chg = rnd(-2.6, 2.9);
      return { s: p[0], p: p[1], o: p[1] / (1 + chg / 100), els: [] };
    });
    function group() {
      return state.map(function (x, i) {
        return '<span class="t-item" data-i="' + i + '"><b>' + x.s + '</b><span class="tp">' + fp(x.p) + '</span><span class="tc"></span></span>';
      }).join('');
    }
    var bar = doc.createElement('div');
    bar.className = 'ticker';
    bar.setAttribute('aria-hidden', 'true');
    bar.innerHTML = '<div class="ticker-tag"><i></i><span>DEMO FEED</span></div><div class="ticker-view"><div class="ticker-track">' + group() + group() + '</div></div>';
    head.parentNode.insertBefore(bar, head);

    var items = bar.querySelectorAll('.t-item');
    [].forEach.call(items, function (el) {
      state[+el.getAttribute('data-i')].els.push({ p: el.querySelector('.tp'), c: el.querySelector('.tc') });
    });
    function paint(x, flashIt, up) {
      var chg = (x.p / x.o - 1) * 100;
      x.els.forEach(function (e) {
        e.p.textContent = fp(x.p);
        e.c.textContent = Math.abs(chg).toFixed(2) + '%';
        e.c.className = 'tc ' + (chg >= 0 ? 'up' : 'dn');
        if (flashIt) flash(e.p, up);
      });
    }
    state.forEach(function (x) { paint(x, false); });
    if (reduced) return;
    setInterval(function () {
      for (var k = 0; k < 4; k++) {
        var x = pick(state), d = rnd(-0.0007, 0.0007);
        x.p *= 1 + d;
        paint(x, true, d >= 0);
      }
    }, 1100);
  })();

  /* ---------- matrix rain background ---------- */
  (function rain() {
    if (reduced) return;
    var c = doc.createElement('canvas');
    c.id = 'matrix-bg';
    c.setAttribute('aria-hidden', 'true');
    doc.body.insertBefore(c, doc.body.firstChild);
    var ctx = c.getContext('2d');
    if (!ctx) return;
    var chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>/\\{}$%';
    var fs, cols, drops, w, h, last = 0;
    function size() {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      fs = w < 700 ? 15 : 17;
      cols = Math.ceil(w / fs);
      drops = [];
      for (var i = 0; i < cols; i++) drops.push(Math.random() * -60);
      ctx.font = fs + 'px "JetBrains Mono",monospace';
    }
    size();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(size, 200); });
    function frame(ts) {
      requestAnimationFrame(frame);
      if (ts - last < 55) return;
      last = ts;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,.14)';
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
      for (var i = 0; i < cols; i++) {
        var y = drops[i] * fs;
        if (y > 0) {
          ctx.fillStyle = 'rgba(180,255,220,.95)';
          ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * fs, y);
          ctx.fillStyle = 'rgba(0,255,157,.75)';
          ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * fs, y - fs);
        }
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.6 + (i % 5) * 0.12;
      }
    }
    requestAnimationFrame(frame);
  })();

  /* ---------- scroll reveal ---------- */
  (function reveal() {
    var sel = '.sec-head,.card,.row,.steps li,details,.post-list a,.table-wrap,.callout,.stat,.panel,.calc,.split>*,.calc-split>*,.cta-in,.foot-grid>div,.prose>*,.hero-copy>*';
    var els = doc.querySelectorAll(sel);
    if (!('IntersectionObserver' in window) || reduced) { return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    [].forEach.call(els, function (el, i) {
      // children of the same parent get a small stagger
      var idx = [].indexOf.call(el.parentNode.children, el);
      el.style.setProperty('--d', Math.min(idx, 6) * 0.07 + 's');
      el.classList.add('rv');
      io.observe(el);
    });
  })();

  /* ---------- cursor-follow glow on panels ---------- */
  (function glow() {
    var sel = '.card,.row,.stat,.calc,.callout,details,.post-list a';
    var raf = 0, ev;
    doc.addEventListener('pointermove', function (e) {
      ev = e;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        var el = ev.target.closest && ev.target.closest(sel);
        if (!el) return;
        var r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
        el.style.setProperty('--my', (ev.clientY - r.top) + 'px');
      });
    }, { passive: true });
  })();

  /* ---------- count-up numbers ---------- */
  (function counters() {
    var els = doc.querySelectorAll('[data-count]');
    if (!els.length) return;
    function run(el) {
      var to = parseFloat(el.getAttribute('data-count')) || 0;
      if (reduced || to === 0) { el.textContent = to; return; }
      var t0 = null;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min((ts - t0) / 1100, 1);
        el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!('IntersectionObserver' in window)) { [].forEach.call(els, run); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { run(x.target); io.unobserve(x.target); } });
    }, { threshold: 0.4 });
    [].forEach.call(els, function (el) { io.observe(el); });
  })();

  /* ---------- hero terminal (simulated data) ---------- */
  (function terminal() {
    var rowsEl = doc.getElementById('t-rows');
    if (!rowsEl) return;
    var N = 6, opps = [], scanned = 1204000 + Math.floor(rnd(0, 9000));
    var rowEls = [];
    var best = doc.getElementById('k-best'), open = doc.getElementById('k-open'), scan = doc.getElementById('k-scan');
    var clk = doc.getElementById('t-clock');
    var sp = doc.getElementById('spark-line'), spArea = doc.getElementById('spark-area'), spNow = doc.getElementById('spark-now');
    var series = [];

    function mk(i) {
      var g = rnd(0.14, 0.82), costs = rnd(0.2, 0.34);
      var b = Math.floor(rnd(1, 17)), s = Math.floor(rnd(1, 17));
      if (s === b) s = (s % 16) + 1;
      return { pair: PAIRS[i % PAIRS.length][0], b: b, s: s, g: g, n: g - costs };
    }
    function paintRow(i, fl) {
      var o = opps[i], el = rowEls[i];
      el.pair.textContent = o.pair;
      el.route.innerHTML = exName(o.b) + '<i>→</i>' + exName(o.s);
      el.gross.textContent = o.g.toFixed(2) + '%';
      var nn = Math.abs(o.n) < 0.005 ? 0 : o.n;
      el.net.textContent = (nn >= 0 ? '+' : '') + nn.toFixed(2) + '%';
      el.net.className = 't-net num ' + (o.n >= 0 ? 'pos' : 'neg');
      var hot = o.n > 0.25;
      var tag = el.pair.querySelector('.t-hot');
      if (hot && !tag) el.pair.insertAdjacentHTML('beforeend', '<span class="t-hot">HOT</span>');
      if (!hot && tag) tag.remove();
      if (fl) flash(el.row, o.n >= 0);
    }
    for (var i = 0; i < N; i++) {
      opps.push(mk(i));
      var r = doc.createElement('div');
      r.className = 't-row';
      r.innerHTML = '<span class="t-pair"></span><span class="t-route"></span><span class="t-gross num"></span><span class="t-net num"></span>';
      rowsEl.appendChild(r);
      rowEls.push({ row: r, pair: r.children[0], route: r.children[1], gross: r.children[2], net: r.children[3] });
      paintRow(i, false);
    }
    for (var k = 0; k < 48; k++) series.push(rnd(0.05, 0.3));

    function drawSpark() {
      var min = Math.min.apply(null, series), max = Math.max.apply(null, series);
      var span = (max - min) || 1, W = 300, H = 80;
      var pts = series.map(function (v, idx) {
        return (idx / (series.length - 1) * W).toFixed(1) + ',' + (H - 6 - ((v - min) / span) * (H - 14)).toFixed(1);
      });
      sp.setAttribute('points', pts.join(' '));
      spArea.setAttribute('points', '0,' + H + ' ' + pts.join(' ') + ' ' + W + ',' + H);
    }
    function summary() {
      var b = -99, pos = 0;
      opps.forEach(function (o) { if (o.n > b) b = o.n; if (o.n > 0) pos++; });
      if (Math.abs(b) < 0.005) b = 0;
      best.textContent = (b >= 0 ? '+' : '') + b.toFixed(2) + '%';
      best.className = b >= 0 ? 'pos' : 'neg';
      open.textContent = pos + '/' + N;
      scan.textContent = scanned.toLocaleString('en-US');
      series.push(b); series.shift();
      spNow.textContent = (b >= 0 ? '+' : '') + b.toFixed(2) + '%';
      drawSpark();
    }
    summary();
    if (clk) clk.textContent = clock();
    if (reduced) return;
    setInterval(function () {
      scanned += 128;
      var i = Math.floor(rnd(0, N));
      opps[i] = mk(Math.floor(rnd(0, PAIRS.length)));
      paintRow(i, true);
      var j = Math.floor(rnd(0, N));
      opps[j].g = Math.max(0.05, opps[j].g + rnd(-0.04, 0.04));
      opps[j].n += rnd(-0.04, 0.04);
      paintRow(j, true);
      summary();
    }, 1300);
    setInterval(function () { if (clk) clk.textContent = clock(); }, 1000);
  })();

  /* ---------- spread matrix heat map (simulated data) ---------- */
  (function heatmap() {
    var host = doc.getElementById('hm-grid');
    if (!host) return;
    var R = 8, C = 16, dev = [], cells = [], spreads = [], mins = [], maxs = [];
    var read = doc.getElementById('hm-read');
    var html = '<div class="hm-h"></div>';
    for (var c = 0; c < C; c++) html += '<div class="hm-h">' + exName(c + 1).replace('EX', 'E') + '</div>';
    html += '<div class="hm-h">SPRD</div>';
    for (var r = 0; r < R; r++) {
      dev.push([]);
      html += '<div class="hm-l">' + PAIRS[r][0] + '</div>';
      for (c = 0; c < C; c++) {
        dev[r].push(rnd(-0.26, 0.26));
        html += '<div class="cell num" data-r="' + r + '" data-c="' + c + '"></div>';
      }
      html += '<div class="hm-sp num" data-sp="' + r + '"></div>';
    }
    host.innerHTML = html;
    var all = host.querySelectorAll('.cell');
    for (r = 0; r < R; r++) cells.push([].slice.call(all, r * C, r * C + C));
    var spEls = host.querySelectorAll('[data-sp]');

    function paint(r, c, fl) {
      var d = dev[r][c], el = cells[r][c];
      var a = Math.min(Math.abs(d) / 0.3, 1) * 0.6 + 0.04;
      el.style.background = d < 0 ? 'rgba(0,255,157,' + a.toFixed(2) + ')' : 'rgba(255,69,102,' + a.toFixed(2) + ')';
      el.style.color = Math.abs(d) > 0.14 ? '#fff' : 'var(--muted)';
      el.textContent = (d >= 0 ? '+' : '') + d.toFixed(2);
      if (fl && !reduced) { el.classList.remove('fl'); void el.offsetWidth; el.classList.add('fl'); }
    }
    function marks(r) {
      var lo = 0, hi = 0;
      for (var c = 1; c < C; c++) { if (dev[r][c] < dev[r][lo]) lo = c; if (dev[r][c] > dev[r][hi]) hi = c; }
      cells[r].forEach(function (el) { el.classList.remove('min', 'max'); });
      cells[r][lo].classList.add('min');
      cells[r][hi].classList.add('max');
      mins[r] = lo; maxs[r] = hi;
      spEls[r].textContent = (dev[r][hi] - dev[r][lo]).toFixed(2) + '%';
    }
    for (r = 0; r < R; r++) { for (c = 0; c < C; c++) paint(r, c, false); marks(r); }

    setInterval(function () {
      if (reduced) return;
      for (var r = 0; r < R; r++) {
        for (var k = 0; k < 3; k++) {
          var c = Math.floor(rnd(0, C));
          dev[r][c] = Math.max(-0.4, Math.min(0.4, dev[r][c] + rnd(-0.07, 0.07)));
          paint(r, c, true);
        }
        marks(r);
      }
    }, 1200);

    // crosshair + readout
    var prev = null;
    function clearHl() {
      host.querySelectorAll('.hl,.tg').forEach(function (e) { e.classList.remove('hl', 'tg'); });
    }
    function inspect(el) {
      clearHl();
      if (!el) return;
      var r = +el.getAttribute('data-r'), c = +el.getAttribute('data-c');
      for (var i = 0; i < C; i++) cells[r][i].classList.add('hl');
      for (var j = 0; j < R; j++) cells[j][c].classList.add('hl');
      el.classList.add('tg');
      var price = PAIRS[r][1] * (1 + dev[r][c] / 100);
      var role = c === mins[r] ? 'lowest price on this row: BUY side' : c === maxs[r] ? 'highest price on this row: SELL side' : 'mid-market';
      if (read) read.innerHTML = '<b>' + PAIRS[r][0] + '</b> @ ' + exName(c + 1) + ' · $' + fp(price) + ' · ' + (dev[r][c] >= 0 ? '+' : '') + dev[r][c].toFixed(2) + '% vs avg · ' + role;
    }
    host.addEventListener('pointerover', function (e) {
      var el = e.target.closest('.cell');
      if (el && el !== prev) { prev = el; inspect(el); }
    });
    host.addEventListener('pointerleave', function () {
      prev = null; clearHl();
      if (read) read.textContent = 'Hover or tap a cell to inspect it. Green = cheapest (buy), red = richest (sell).';
    });
  })();

  /* ---------- paper trade blotter (simulated data) ---------- */
  (function blotter() {
    var body = doc.getElementById('blot-body');
    if (!body) return;
    var pnlEl = doc.getElementById('blot-pnl'), total = 0;
    var SIZES = [500, 1000, 2500, 5000, 10000];
    function make(ts) {
      var pair = pick(PAIRS)[0], b = Math.floor(rnd(1, 17)), s = Math.floor(rnd(1, 17));
      if (s === b) s = (s % 16) + 1;
      var size = pick(SIZES);
      var pct = Math.random() < 0.3 ? rnd(-0.16, -0.01) : rnd(0.01, 0.34);
      return { t: ts, pair: pair, b: b, s: s, size: size, pl: size * pct / 100 };
    }
    function el(o) {
      var d = doc.createElement('div');
      d.className = 'b-row';
      d.innerHTML = '<span>' + o.t + '</span><span>' + o.pair + '</span><span class="rt">' + exName(o.b) + ' → ' + exName(o.s) + '</span><span class="r">' + usd(o.size) + '</span><span class="r ' + (o.pl >= 0 ? 'pos' : 'neg') + '">' + usd(o.pl, true) + '</span>';
      return d;
    }
    function setTotal() {
      pnlEl.textContent = usd(total, true);
      pnlEl.className = 'num ' + (total >= 0 ? 'pos' : 'neg');
    }
    body.innerHTML = '<div class="b-row b-head"><span>Time</span><span>Pair</span><span class="rt">Route</span><span class="r">Size</span><span class="r">Net P&amp;L</span></div>';
    var now = Date.now();
    for (var i = 6; i >= 1; i--) {
      var d = new Date(now - i * 7000);
      var o = make(pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()));
      total += o.pl;
      var row = el(o);
      var head = body.querySelector('.b-head');
      head.insertAdjacentElement('afterend', row);
    }
    setTotal();
    if (reduced) return;
    (function next() {
      setTimeout(function () {
        var o = make(clock());
        total += o.pl;
        var row = el(o);
        row.classList.add('new');
        body.querySelector('.b-head').insertAdjacentElement('afterend', row);
        var rows = body.querySelectorAll('.b-row:not(.b-head)');
        if (rows.length > 7) rows[rows.length - 1].remove();
        setTotal();
        flash(pnlEl, o.pl >= 0);
        next();
      }, rnd(1500, 2800));
    })();
  })();

  /* ---------- spread calculator ---------- */
  var calc = doc.getElementById('spread-calc');
  if (!calc) return;

  function val(id) {
    var v = parseFloat(doc.getElementById(id).value);
    return isFinite(v) && v >= 0 ? v : 0;
  }
  function money(n) {
    var s = Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return (n < 0 ? '-$' : '$') + s;
  }

  function update() {
    var buy = val('c-buy'), sell = val('c-sell'), size = val('c-size');
    var feeBuy = val('c-fee-buy') / 100, feeSell = val('c-fee-sell') / 100, transfer = val('c-transfer');
    var out = doc.getElementById('c-net');
    var verdict = doc.getElementById('c-verdict');
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

    doc.getElementById('c-gross').textContent = money(gross);
    doc.getElementById('c-fees').textContent = money(-fees);
    doc.getElementById('c-move').textContent = money(-transfer);
    out.textContent = money(net);
    out.className = 'num ' + (net >= 0 ? 'pos' : 'neg');
    if (!reduced) { out.classList.remove('tick'); void out.offsetWidth; out.classList.add('tick'); }
    doc.getElementById('c-pct').textContent = (pct >= 0 ? '+' : '') + pct.toFixed(3) + '%';
    doc.getElementById('c-pct').className = 'num ' + (net >= 0 ? 'pos' : 'neg');
    verdict.textContent = net >= 0
      ? 'The spread covers your costs in this example.'
      : 'Costs are larger than the spread in this example. This is why a scanner has to work with net numbers.';
  }

  calc.addEventListener('input', update);
  update();
})();
