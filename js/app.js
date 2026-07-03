/* ==========================================================================
   DaBomb Breaks — shared app JS
   Card art generator, charts, nav, formatters. No dependencies, works on file://
   ========================================================================== */

/* ---------- Formatters ---------- */
function fmtMoney(n) {
  return "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtMoneyShort(n) {
  return n >= 1000 ? "$" + (n / 1000).toFixed(1).replace(/\.0$/, "") + "K" : "$" + Math.round(n);
}
function fmtTrend(pct) {
  var cls = pct >= 0 ? "up" : "down";
  var arrow = pct >= 0 ? "▲" : "▼";
  return '<span class="tile-trend ' + cls + '">' + arrow + " " + Math.abs(pct).toFixed(1) + "% <span class=\"muted\" style=\"font-weight:400\">30d</span></span>";
}
function initialsOf(name) {
  return name.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
}
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/* Last 12 month labels ending at current month */
function monthLabels() {
  var names = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var out = [], d = new Date();
  for (var i = 11; i >= 0; i--) {
    var m = new Date(d.getFullYear(), d.getMonth() - i, 1);
    out.push(names[m.getMonth()] + (m.getMonth() === 0 ? " '" + String(m.getFullYear()).slice(2) : ""));
  }
  return out;
}

/* ---------- Card art (generated SVG, deterministic per card) ---------- */
function cardArtSVG(card) {
  var c1 = (card.colors && card.colors[0]) || "#ff5a1f";
  var c2 = (card.colors && card.colors[1]) || "#7a1fff";
  var ini = card.initials || initialsOf(card.name);
  var uid = card.id.replace(/[^a-z0-9]/gi, "");
  var sportIcons = {
    "Basketball": "M25 5a20 20 0 100 40 20 20 0 000-40zM25 5v40M5 25h40M11 11c8 8 20 8 28 0M11 39c8-8 20-8 28 0",
    "Football": "M10 25c0-8 7-15 15-15s15 7 15 15-7 15-15 15-15-7-15-15zM18 25h14M21 21v8M25 21v8M29 21v8",
    "Baseball": "M25 5a20 20 0 100 40 20 20 0 000-40zM12 8c4 10 4 24 0 34M38 8c-4 10-4 24 0 34",
    "Soccer": "M25 5a20 20 0 100 40 20 20 0 000-40zM25 13l8 6-3 10H20l-3-10z",
    "Hockey": "M8 32h24a6 6 0 006-6V12M14 38a3 3 0 100-6 3 3 0 000 6z",
    "Pokémon": "M5 25a20 20 0 0140 0zM5 25a20 20 0 0040 0zM25 19a6 6 0 100 12 6 6 0 000-12z"
  };
  var icon = sportIcons[card.sport] || sportIcons["Basketball"];
  var setLine = (card.year ? card.year + " " : "") + (card.set || "");
  var svg = ""
    + '<svg viewBox="0 0 250 350" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + escHTML(card.name + " " + setLine) + '">'
    + '<defs>'
    + '<linearGradient id="bg' + uid + '" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/>'
    + '</linearGradient>'
    + '<linearGradient id="sh' + uid + '" x1="0" y1="0" x2="1" y2="1">'
    + '<stop offset="0" stop-color="#ffffff" stop-opacity=".28"/><stop offset=".5" stop-color="#ffffff" stop-opacity="0"/>'
    + '</linearGradient>'
    + '</defs>'
    + '<rect width="250" height="350" rx="14" fill="#0d1020"/>'
    + '<rect x="8" y="8" width="234" height="334" rx="10" fill="url(#bg' + uid + ')"/>'
    + '<polygon points="8,8 140,8 60,342 8,342" fill="url(#sh' + uid + ')"/>'
    + '<g transform="translate(100,52) scale(1.0)" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="2.2">'
    + '<path d="' + icon + '"/>'
    + '</g>'
    + '<text x="125" y="185" text-anchor="middle" font-family="Barlow Condensed, Arial Narrow, sans-serif" font-size="86" font-weight="700" fill="rgba(255,255,255,.92)">' + escHTML(ini) + '</text>'
    + '<rect x="8" y="252" width="234" height="90" rx="0" fill="rgba(6,8,16,.78)"/>'
    + '<rect x="8" y="250" width="234" height="3" fill="rgba(255,255,255,.35)"/>'
    + '<text x="22" y="284" font-family="Barlow Condensed, Arial Narrow, sans-serif" font-size="21" font-weight="700" fill="#ffffff" letter-spacing=".5">' + escHTML(truncate(card.name, 20)) + '</text>'
    + '<text x="22" y="306" font-family="Inter, sans-serif" font-size="12" fill="rgba(255,255,255,.72)">' + escHTML(truncate(setLine, 32)) + '</text>'
    + (card.parallel ? '<text x="22" y="326" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="' + c1 + '" stroke="none">' + escHTML(truncate(card.parallel + (card.cardNumber ? " · " + card.cardNumber : ""), 34)) + '</text>' : "")
    + '</svg>';
  return svg;
}

function truncate(s, n) { s = String(s || ""); return s.length > n ? s.slice(0, n - 1) + "…" : s; }
function escHTML(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/* ---------- Card tile (used on home, shop, related) ---------- */
function cardTileHTML(card) {
  var gradeBadge = card.grade && card.grade !== "Raw"
    ? '<span class="badge badge-grade">' + escHTML(card.grade) + "</span>"
    : '<span class="badge badge-raw">Raw</span>';
  var statusBadge = card.status === "consigned"
    ? '<span class="badge badge-consigned">Consigned</span>'
    : '<span class="badge badge-owned">In-House</span>';
  if (card.whatnot) statusBadge = '<span class="badge badge-live">On Whatnot</span>';
  var art = card.image
    ? '<img class="card-photo" src="' + escHTML(card.image) + '" alt="' + escHTML(card.name) + '" loading="lazy" onerror="this.classList.add(\'hidden\');this.nextElementSibling.classList.remove(\'hidden\')"><div class="hidden">' + cardArtSVG(card) + '</div>'
    : cardArtSVG(card);
  return ''
    + '<article class="tile">'
    + '<a class="tile-link" href="card.html?id=' + encodeURIComponent(card.id) + '" aria-label="' + escHTML(card.name) + '">'
    + '<div class="tile-art">' + art
    + '<div class="tile-flags">' + gradeBadge + statusBadge + "</div>"
    + "</div>"
    + '<div class="tile-body">'
    + '<div class="tile-name">' + escHTML(card.name) + "</div>"
    + '<div class="tile-set">' + escHTML((card.year || "") + " " + (card.set || "") + (card.parallel ? " · " + card.parallel : "")) + "</div>"
    + '<div class="tile-row"><span class="tile-price">' + fmtMoney(card.price) + "</span>" + fmtTrend(card.trend || 0) + "</div>"
    + "</div></a></article>";
}

/* ---------- Charts (pure SVG, no libs) ---------- */
function sparklineSVG(values, w, h, color) {
  w = w || 120; h = h || 34; color = color || "#2fd47a";
  var min = Math.min.apply(null, values), max = Math.max.apply(null, values);
  var span = (max - min) || 1;
  var pts = values.map(function (v, i) {
    var x = (i / (values.length - 1)) * (w - 4) + 2;
    var y = h - 3 - ((v - min) / span) * (h - 6);
    return x.toFixed(1) + "," + y.toFixed(1);
  }).join(" ");
  return '<svg viewBox="0 0 ' + w + " " + h + '" width="' + w + '" height="' + h + '" aria-hidden="true">'
    + '<polyline points="' + pts + '" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function priceChartSVG(values, labels) {
  var w = 720, h = 260, padL = 56, padR = 16, padT = 18, padB = 34;
  var iw = w - padL - padR, ih = h - padT - padB;
  var min = Math.min.apply(null, values), max = Math.max.apply(null, values);
  var pad = (max - min) * 0.12 || max * 0.1 || 10;
  min = Math.max(0, min - pad); max = max + pad;
  var span = max - min || 1;
  function X(i) { return padL + (i / (values.length - 1)) * iw; }
  function Y(v) { return padT + ih - ((v - min) / span) * ih; }
  var line = values.map(function (v, i) { return (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(v).toFixed(1); }).join(" ");
  var area = line + " L" + (padL + iw).toFixed(1) + " " + (padT + ih) + " L" + padL + " " + (padT + ih) + " Z";
  var gridLines = "", yLabels = "";
  for (var g = 0; g <= 4; g++) {
    var gv = min + (span * g) / 4;
    var gy = Y(gv);
    gridLines += '<line x1="' + padL + '" y1="' + gy.toFixed(1) + '" x2="' + (padL + iw) + '" y2="' + gy.toFixed(1) + '" stroke="#232a44" stroke-width="1"/>';
    yLabels += '<text x="' + (padL - 8) + '" y="' + (gy + 4).toFixed(1) + '" text-anchor="end" font-size="11" fill="#9aa3c0" font-family="Inter, sans-serif">' + fmtMoneyShort(gv) + "</text>";
  }
  var xLabels = "";
  (labels || monthLabels()).forEach(function (lb, i) {
    if (i % 2 === 0 || i === values.length - 1) {
      xLabels += '<text x="' + X(i).toFixed(1) + '" y="' + (h - 10) + '" text-anchor="middle" font-size="10.5" fill="#9aa3c0" font-family="Inter, sans-serif">' + lb + "</text>";
    }
  });
  var dots = "";
  var lastX = X(values.length - 1), lastY = Y(values[values.length - 1]);
  dots += '<circle cx="' + lastX.toFixed(1) + '" cy="' + lastY.toFixed(1) + '" r="4.5" fill="#ff5a1f" stroke="#0b0e17" stroke-width="2"/>';
  return '<svg viewBox="0 0 ' + w + " " + h + '" style="width:100%;height:auto" role="img" aria-label="12 month price history">'
    + '<defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">'
    + '<stop offset="0" stop-color="#ff5a1f" stop-opacity=".32"/><stop offset="1" stop-color="#ff5a1f" stop-opacity="0"/>'
    + "</linearGradient></defs>"
    + gridLines + yLabels + xLabels
    + '<path d="' + area + '" fill="url(#chartFill)"/>'
    + '<path d="' + line + '" fill="none" stroke="#ff5a1f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'
    + dots + "</svg>";
}

/* ---------- Inventory helpers ---------- */
function getInventory() {
  return (typeof INVENTORY !== "undefined" && Array.isArray(INVENTORY)) ? INVENTORY : [];
}
function findCard(id) {
  return getInventory().find(function (c) { return c.id === id; }) || null;
}
function featuredCards(n) {
  var inv = getInventory().filter(function (c) { return c.featured; });
  if (!inv.length) inv = getInventory().slice();
  return inv.slice(0, n || 8);
}

/* ---------- Nav ---------- */
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
  }
  /* Active link highlighting */
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === page || (page === "" && href === "index.html") || (page === "card.html" && href === "shop.html")) {
      a.classList.add("active");
    }
  });
  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
});
