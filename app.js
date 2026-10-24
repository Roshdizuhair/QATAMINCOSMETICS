/* QATAMIN — site interactions */
(function () {
  "use strict";

  const STORE = "https://qatamincosmetics.com";
  const IMG = "images/";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  /* ---------------------------------------------------------
     Products (from qatamincosmetics.com)
     --------------------------------------------------------- */
  const PRODUCTS = [
    {
      handle: "collagen-serum", vid: 68272972726493,
      name: "Collagen Serum", type: "Serum", cat: "serum", price: 12, size: "30 ml",
      imgs: ["collagen-1", "collagen-2", "collagen-3", "collagen-4"],
      tagline: "Care, one drop at a time.",
      desc: [
        "Bring a little luxury to your skincare routine with Qatamin Collagen Serum. Featuring Collagen, Acetyl Hexapeptide-8, Provitamin B5, Aloe Vera and Vitamin E, this facial serum brings five featured ingredients together in one 30 ml dropper bottle.",
        "The frosted glass bottle and polished gold collar reflect Qatamin’s signature style, while the dropper applicator lets you dispense a small amount at a time."
      ],
      high: ["Features Collagen and the peptide Acetyl Hexapeptide-8", "Includes Provitamin B5, Aloe Vera and Vitamin E", "For all skin types, as stated on the label", "Dropper applicator for controlled dispensing", "Size: 30 ml"],
      ings: ["Collagen", "Acetyl Hexapeptide-8", "Panthenol (B5)", "Aloe Vera", "Vitamin E"],
      how: "Follow the directions provided on the product packaging."
    },
    {
      handle: "hyaluronic-moisturizing-care-serum-30-ml", vid: 68273800642781,
      name: "Hyaluronic Moisturizing Care Serum", type: "Serum", cat: "serum", price: 12, size: "30 ml",
      imgs: ["hyaluronic-1", "hyaluronic-2", "hyaluronic-3", "hyaluronic-4"],
      tagline: "Hydration, at the heart of your ritual.",
      desc: [
        "Bring a dedicated moisturising step to your skincare collection with Qatamin Hyaluronic Moisturizing Care Serum. Featuring Hyaluronic Acid, Panthenol, Chamomilla, Aloe Vera and Ahnfeltia, this facial serum comes in a compact 30 ml dropper bottle.",
        "Presented in frosted glass with a white label and polished gold collar, the bottle reflects the same ivory-and-gold style as your Qatamin favourites."
      ],
      high: ["Facial serum focused on moisturising care", "Features Hyaluronic Acid and Panthenol", "Includes Chamomilla, Aloe Vera and Ahnfeltia", "Dropper applicator for controlled dispensing", "Size: 30 ml"],
      ings: ["Hyaluronic Acid", "Panthenol (B5)", "Chamomile", "Aloe Vera", "Ahnfeltia"],
      how: "Follow the directions printed on the product packaging."
    },
    {
      handle: "qatamin-moisturizing-effect-tonic", vid: 68185081184477,
      name: "Moisturizing Effect Tonic", type: "Toner", cat: "cleanse", price: 22, size: "200 ml",
      imgs: ["tonic-1", "tonic-3", "tonic-2", "tonic-4"],
      tagline: "Refresh. Hydrate. Brighten.",
      desc: [
        "Refresh, hydrate, and brighten your skin with Qatamin Moisturizing Effect Tonic. Formulated with a blend of hydrating and skin-conditioning ingredients, this facial toner helps leave the skin feeling fresh, smooth and balanced while helping improve the appearance of pores.",
        "Suitable for all skin types, its lightweight formula is ideal for everyday use as part of your skincare routine."
      ],
      high: ["Helps hydrate and refresh the skin", "Helps brighten the appearance of the complexion", "Helps improve the appearance of pores", "Leaves skin feeling smooth and balanced", "Suitable for all skin types"],
      ings: ["Hyaluronic Acid", "Ahnfeltia", "Niacin", "Allantoin", "Olive Leaf"],
      how: "After cleansing, apply to the face with a cotton pad or your hands. Follow the directions on the packaging."
    },
    {
      handle: "moisturizing-face-cleanser-gel", vid: 68272716153053,
      name: "Moisturizing Face Cleanser Gel", type: "Cleanser", cat: "cleanse", price: 22, size: "200 ml",
      imgs: ["cleanser-1", "cleanser-3", "cleanser-2", "cleanser-4"],
      tagline: "Cleansing and moisture, in one step.",
      desc: [
        "Start your skincare ritual with Qatamin Moisturizing Face Cleanser Gel. This facial cleansing gel brings cleansing and a moisturizing effect together in one step.",
        "Featuring Centella Asiatica, Hyaluronic Acid, Sodium PCA, Arginine and Chamomilla, the formula comes in a convenient 200 ml pump bottle."
      ],
      high: ["Facial cleansing gel with a moisturizing effect", "With Hyaluronic Acid and Sodium PCA", "Featuring Centella Asiatica, Arginine and Chamomilla", "200 ml pump bottle"],
      ings: ["Centella Asiatica", "Hyaluronic Acid", "Sodium PCA", "Arginine", "Chamomile"],
      how: "Massage onto damp skin, then rinse thoroughly. Follow the directions on the packaging."
    },
    {
      handle: "night-care-cream-50-ml", vid: 68273573036253,
      name: "Night Care Cream", type: "Night Cream", cat: "cream", price: 12, size: "50 ml",
      imgs: ["night-1", "night-2", "night-3", "night-4"],
      tagline: "Let the day end with care.",
      desc: [
        "Make your evening skincare ritual a moment to slow down with Qatamin Night Care Cream. Featuring Vitamin A, Hyaluronic Acid, Acetyl Hexapeptide-8, Allantoin and Vitamin E, this facial cream brings five featured ingredients together in a 50 ml jar.",
        "The clear outer jar, pearl-white inner body and polished gold detailing reflect Qatamin’s signature style — with the “dare to be different” slogan on every jar."
      ],
      high: ["Night-time facial cream in a 50 ml jar", "Features Vitamin A and Hyaluronic Acid", "Includes the peptide Acetyl Hexapeptide-8", "Also features Allantoin and Vitamin E", "Labelled for all skin types"],
      ings: ["Vitamin A", "Hyaluronic Acid", "Acetyl Hexapeptide-8", "Allantoin", "Vitamin E"],
      how: "Follow the directions printed on the product packaging."
    },
    {
      handle: "qatamin-eye-repair-serum", vid: 68273909924061,
      name: "Eye Repair Serum", type: "Eye Serum", cat: "serum", price: 21, size: "30 ml",
      imgs: ["eye-1", "eye-2", "eye-3", "eye-4"],
      tagline: "A little attention to your eye-care ritual.",
      desc: [
        "Give the skin around your eyes a dedicated place in your skincare routine with Qatamin Eye Repair Serum. Featuring Caffeine, Hyaluronic Acid, Rosa Damascena, Vitamin C, Centella Asiatica and Acetyl Hexapeptide-8, this eye-contour serum comes in a 30 ml dropper bottle.",
        "The frosted glass bottle, ivory label and polished gold collar reflect Qatamin’s signature style."
      ],
      high: ["Dedicated serum for eye-contour care", "Features Caffeine and Hyaluronic Acid", "Includes Rosa Damascena, Vitamin C and Centella Asiatica", "Also features the peptide Acetyl Hexapeptide-8", "30 ml dropper bottle"],
      ings: ["Caffeine", "Hyaluronic Acid", "Rosa Damascena", "Vitamin C", "Centella Asiatica", "Acetyl Hexapeptide-8"],
      how: "Follow the directions printed on the product packaging."
    },
    {
      handle: "qatamin-revitalizing-brightening-vitamin-c-serum-30ml", vid: 68189517873373,
      name: "Revitalizing & Brightening Vitamin C Serum", short: "Vitamin C Serum", type: "Serum", cat: "serum", price: 12, size: "30 ml",
      imgs: ["vitc-1", "vitc-2", "vitc-3"],
      tagline: "Bring radiance back to your routine.",
      desc: [
        "A lightweight facial serum that combines Vitamin C, Niacinamide, Licorice Root and Chamomella to help improve the appearance of dullness and uneven-looking skin while supporting a smoother, fresher and more radiant complexion.",
        "Designed for all skin types, the serum can be easily added to your daily skincare routine before moisturizer."
      ],
      high: ["Helps brighten the appearance of dull skin", "Supports a more even-looking complexion", "Helps improve skin radiance", "Supports smoother-looking skin", "Lightweight serum texture", "Suitable for all skin types"],
      ings: ["Vitamin C", "Niacinamide", "Licorice Root", "Chamomile"],
      how: "Apply a few drops to clean, dry skin and gently massage over the face and neck until absorbed. Follow with moisturizer. For daytime use, finish with sunscreen."
    },
    {
      handle: "qatamin-shea-butter-day-cream-spf-15", vid: 68188915269853,
      name: "Shea Butter Day Cream SPF 15", type: "Day Cream", cat: "cream", price: 15, size: "SPF 15",
      imgs: ["shea-1", "shea-2", "shea-4", "shea-9", "shea-3", "shea-5", "shea-6", "shea-7", "shea-8"],
      tagline: "Nourish and protect, all day long.",
      desc: [
        "Nourish and protect your skin throughout the day with Qatamin Shea Butter Day Cream SPF 15. Formulated with shea butter, this daily moisturizer helps provide deep hydration while leaving the skin feeling soft, smooth and nourished.",
        "With SPF 15, it provides added daily protection from sun exposure, making it an ideal addition to your morning skincare routine."
      ],
      high: ["Deeply moisturizes the skin", "Helps nourish and soften the skin", "Helps protect against dryness and irritation", "Helps protect skin from everyday environmental stress", "Provides SPF 15 sun protection", "Suitable for daily use"],
      ings: ["Shea Butter"],
      how: "Apply a suitable amount to clean, dry skin in the morning. Gently massage over the face and neck until fully absorbed. For prolonged or intense sun exposure, use a dedicated broad-spectrum sunscreen with a higher SPF."
    }
  ];
  const byHandle = Object.fromEntries(PRODUCTS.map(p => [p.handle, p]));
  const src = (n) => IMG + n + ".webp";
  const money = (n) => n.toFixed(3) + " JOD";
  const short = (p) => p.short || p.name;

  /* ---------------------------------------------------------
     Loader → intro
     --------------------------------------------------------- */
  const body = document.body;
  let introDone = false;
  function finishIntro() {
    if (introDone) return;
    introDone = true;
    body.classList.add("is-loaded");
    setTimeout(() => { body.classList.add("is-ready"); body.classList.remove("is-loading"); }, reduceMotion ? 0 : 350);
    setTimeout(() => body.classList.add("is-done"), reduceMotion ? 0 : 1400);
  }
  const minWait = reduceMotion ? 0 : 1500;
  const t0 = performance.now();
  const heroImg = $("#heroSlides img");
  const onReady = () => setTimeout(finishIntro, Math.max(0, minWait - (performance.now() - t0)));
  if (heroImg && !heroImg.complete) {
    heroImg.addEventListener("load", onReady, { once: true });
    heroImg.addEventListener("error", onReady, { once: true });
  } else onReady();
  setTimeout(finishIntro, 3500); // hard cap

  /* ---------------------------------------------------------
     Product grid
     --------------------------------------------------------- */
  const grid = $("#productGrid");
  const plus = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12h14"/></svg>';
  const check = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';

  grid.innerHTML = PRODUCTS.map((p, i) => `
    <article class="card reveal" data-cat="${p.cat}" style="--rd:${(i % 4) * 0.08}s">
      <div class="card__media" data-tilt>
        <span class="card__tag">${p.type}</span>
        <img class="main" src="${src(p.imgs[0])}" alt="Qatamin ${p.name}" loading="lazy" width="1254" height="1254">
        <img class="alt" src="${src(p.imgs[1])}" alt="" loading="lazy" width="1254" height="1254">
        <span class="card__shine"></span>
        <button class="card__quick" data-open="${p.handle}">Quick view</button>
        <button class="card__hit" data-open="${p.handle}" aria-label="View ${p.name}" style="position:absolute;inset:0;z-index:1"></button>
      </div>
      <div class="card__body">
        <div>
          <h3 class="card__name"><button data-open="${p.handle}">${p.name}</button></h3>
          <div class="card__meta">${p.size} · ${p.ings.slice(0, 2).join(" · ")}</div>
        </div>
      </div>
      <div class="card__foot">
        <span class="card__price">${money(p.price)}</span>
        <button class="card__add" data-add="${p.handle}" aria-label="Add ${p.name} to bag">${plus}</button>
      </div>
    </article>`).join("");

  /* Filters with sliding pill */
  const filters = $("#filters");
  const pill = $(".filters__pill", filters);
  function movePill(btn) {
    if (!btn || !pill) return;
    pill.style.width = btn.offsetWidth + "px";
    pill.style.transform = `translateX(${btn.offsetLeft}px)`;
  }
  function applyFilter(f) {
    const btn = $(`[data-filter="${f}"]`, filters);
    $$("button", filters).forEach(b => b.classList.toggle("is-active", b === btn));
    movePill(btn);
    let n = 0;
    $$(".card", grid).forEach(c => {
      const show = f === "all" || c.dataset.cat === f;
      c.classList.toggle("is-hidden", !show);
      c.classList.remove("is-entering");
      if (show) {
        c.classList.add("is-in");
        void c.offsetWidth;
        c.style.setProperty("--rd", (n++ * 0.07) + "s");
        c.classList.add("is-entering");
      }
    });
  }
  filters.addEventListener("click", e => {
    const b = e.target.closest("[data-filter]");
    if (b) applyFilter(b.dataset.filter);
  });
  $$("[data-filter-link]").forEach(a => a.addEventListener("click", () => applyFilter(a.dataset.filterLink)));
  const initPill = () => movePill($(".is-active", filters));
  window.addEventListener("resize", initPill);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(initPill);
  initPill();

  /* ---------------------------------------------------------
     Cart
     --------------------------------------------------------- */
  const KEY = "qatamin-bag-v1";
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { cart = {}; }
  Object.keys(cart).forEach(h => { if (!byHandle[h] || !(cart[h] > 0)) delete cart[h]; });
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ } };
  const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const checkoutUrl = (items) => STORE + "/cart/" + items.map(([h, q]) => byHandle[h].vid + ":" + q).join(",");

  function addToCart(handle, qty = 1) {
    const p = byHandle[handle];
    if (!p) return;
    cart[handle] = Math.min(99, (cart[handle] || 0) + qty);
    save(); renderCart();
    const cc = $("#cartCount");
    cc.classList.remove("bump"); void cc.offsetWidth; cc.classList.add("bump");
    toast(`<img src="${src(p.imgs[0])}" alt=""><span><b>Added to bag</b> — ${short(p)}</span>`);
    $$(`[data-add="${handle}"]`).forEach(b => {
      b.classList.add("is-added"); b.innerHTML = check;
      setTimeout(() => { b.classList.remove("is-added"); b.innerHTML = plus; }, 1600);
    });
  }
  function setQty(handle, q) {
    if (q <= 0) delete cart[handle]; else cart[handle] = Math.min(99, q);
    save(); renderCart();
  }
  function renderCart() {
    const n = count();
    const cc = $("#cartCount");
    cc.textContent = n;
    cc.classList.toggle("has-items", n > 0);
    $("#drawerCount").textContent = n ? `(${n})` : "";
    const items = Object.entries(cart);
    const bodyEl = $("#drawerBody");
    const foot = $("#drawerFoot");
    if (!items.length) {
      bodyEl.innerHTML = `<div class="empty">
        <svg viewBox="0 0 24 24" width="46" height="46" fill="none" stroke="currentColor" stroke-width="1"><path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>
        <p>Your bag is empty</p><small>Discover serums, creams and more.</small>
        <a href="#collection" class="btn btn--dark" data-close-drawer><span>Shop the collection</span></a></div>`;
      foot.style.display = "none";
      return;
    }
    foot.style.display = "";
    let total = 0;
    bodyEl.innerHTML = items.map(([h, q]) => {
      const p = byHandle[h]; total += p.price * q;
      return `<div class="line">
        <img src="${src(p.imgs[0])}" alt="${p.name}">
        <div><h4>${short(p)}</h4><small>${p.type} · ${p.size}</small>
          <div class="qty"><button data-line="${h}" data-d="-1" aria-label="Decrease">−</button><span>${q}</span><button data-line="${h}" data-d="1" aria-label="Increase">+</button></div>
        </div>
        <div class="line__right"><span class="line__price">${money(p.price * q)}</span><button class="line__remove" data-remove="${h}">Remove</button></div>
      </div>`;
    }).join("");
    $("#subtotal").textContent = money(total);
    $("#checkoutBtn").href = checkoutUrl(items);
  }
  $("#drawerBody").addEventListener("click", e => {
    const l = e.target.closest("[data-line]");
    if (l) return setQty(l.dataset.line, (cart[l.dataset.line] || 0) + Number(l.dataset.d));
    const r = e.target.closest("[data-remove]");
    if (r) setQty(r.dataset.remove, 0);
  });
  renderCart();

  /* ---------------------------------------------------------
     Overlays: drawer, modal, search, menu
     --------------------------------------------------------- */
  const scrim = $("#scrim"), drawer = $("#drawer"), modal = $("#modal"), search = $("#search");
  let lastFocus = null;
  const lock = () => body.classList.add("is-locked");
  const unlockIfIdle = () => {
    if (!drawer.classList.contains("is-open") && !modal.classList.contains("is-open") &&
        !search.classList.contains("is-open") && !body.classList.contains("menu-open")) body.classList.remove("is-locked");
  };

  function openDrawer() {
    closeModal(true); closeSearch(); closeMenu();
    lastFocus = document.activeElement;
    $("#toast").classList.remove("is-on");
    drawer.classList.add("is-open"); drawer.setAttribute("aria-hidden", "false");
    scrim.classList.add("is-on"); lock();
    setTimeout(() => $(".icon-btn", drawer).focus({ preventScroll: true }), 50);
  }
  function closeDrawer() {
    if (!drawer.classList.contains("is-open")) return;
    drawer.classList.remove("is-open"); drawer.setAttribute("aria-hidden", "true");
    if (!modal.classList.contains("is-open")) scrim.classList.remove("is-on");
    unlockIfIdle();
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  $("#cartBtn").addEventListener("click", openDrawer);
  drawer.addEventListener("click", e => { if (e.target.closest("[data-close-drawer]")) closeDrawer(); });

  /* Product modal */
  let current = null, mQty = 1;
  function openModal(handle) {
    const p = byHandle[handle];
    if (!p) return;
    closeSearch(); closeMenu();
    if (drawer.classList.contains("is-open")) { drawer.classList.remove("is-open"); drawer.setAttribute("aria-hidden", "true"); }
    current = p; mQty = 1;
    if (!modal.classList.contains("is-open")) lastFocus = document.activeElement;
    $("#mType").textContent = p.type + " · " + p.size;
    $("#mTitle").textContent = p.name;
    $("#mTag").textContent = p.tagline;
    $("#mPrice").textContent = money(p.price);
    $("#mSize").textContent = "In stock";
    $("#mQty").textContent = "1";
    $("#mDesc").innerHTML = p.desc.map(d => `<p>${d}</p>`).join("");
    $("#mHigh").innerHTML = p.high.map(h => `<li>${h}</li>`).join("");
    $("#mIngs").innerHTML = p.ings.map(i => `<span>${i}</span>`).join("");
    $("#mHow").textContent = p.how;
    $("#mMain").innerHTML = p.imgs.map((n, i) => `<img src="${src(n)}" alt="${p.name} — image ${i + 1}" class="${i ? "" : "is-active"}">`).join("");
    $("#mThumbs").innerHTML = p.imgs.map((n, i) => `<button class="${i ? "" : "is-active"}" data-thumb="${i}" aria-label="Show image ${i + 1}"><img src="${src(n)}" alt="" loading="lazy"></button>`).join("");
    updateBuy();
    $(".modal__info", modal).scrollTop = 0;
    modal.querySelector(".modal__box").scrollTop = 0;
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
    scrim.classList.add("is-on"); lock();
    setTimeout(() => {
      $(".modal__close", modal).focus({ preventScroll: true });
      modal.querySelector(".modal__box").scrollTop = 0;
    }, 60);
  }
  function closeModal(silent) {
    if (!modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
    if (!drawer.classList.contains("is-open")) scrim.classList.remove("is-on");
    unlockIfIdle();
    if (!silent && lastFocus) lastFocus.focus({ preventScroll: true });
  }
  function updateBuy() {
    if (current) $("#mBuy").href = checkoutUrl([[current.handle, mQty]]);
  }
  function showImage(i) {
    $$("#mMain img").forEach((im, k) => im.classList.toggle("is-active", k === i));
    $$("#mThumbs button").forEach((b, k) => b.classList.toggle("is-active", k === i));
  }
  modal.addEventListener("click", e => {
    if (e.target === modal || e.target.closest("[data-close-modal]")) return closeModal();
    const t = e.target.closest("[data-thumb]");
    if (t) return showImage(Number(t.dataset.thumb));
    const q = e.target.closest("[data-qty]");
    if (q) { mQty = Math.max(1, Math.min(99, mQty + Number(q.dataset.qty))); $("#mQty").textContent = mQty; updateBuy(); }
  });
  $("#mAdd").addEventListener("click", () => { if (current) { addToCart(current.handle, mQty); closeModal(); } });

  /* swipe gallery on touch */
  let sx = null;
  $("#mMain").addEventListener("touchstart", e => { sx = e.touches[0].clientX; }, { passive: true });
  $("#mMain").addEventListener("touchend", e => {
    if (sx === null || !current) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) < 40) return;
    const imgs = $$("#mMain img"), cur = imgs.findIndex(i => i.classList.contains("is-active"));
    showImage((cur + (dx < 0 ? 1 : -1) + imgs.length) % imgs.length);
  });

  scrim.addEventListener("click", () => { closeModal(); closeDrawer(); });

  /* Search */
  const sInput = $("#searchInput"), sResults = $("#searchResults");
  function renderSearch(q) {
    q = q.trim().toLowerCase();
    const list = PRODUCTS.filter(p => !q || [p.name, p.type, p.tagline, ...p.ings].join(" ").toLowerCase().includes(q));
    sResults.innerHTML = list.length ? list.map((p, i) => miniCard(p, i)).join("") :
      `<p class="search__empty">No products match “${q.replace(/[<>&"]/g, "")}”. Try “serum”, “cream” or “vitamin C”.</p>`;
  }
  function openSearch() {
    closeMenu();
    lastFocus = document.activeElement;
    search.classList.add("is-open"); search.setAttribute("aria-hidden", "false"); lock();
    renderSearch(sInput.value);
    setTimeout(() => sInput.focus(), 80);
  }
  function closeSearch() {
    if (!search.classList.contains("is-open")) return;
    search.classList.remove("is-open"); search.setAttribute("aria-hidden", "true"); unlockIfIdle();
  }
  $("#searchBtn").addEventListener("click", openSearch);
  sInput.addEventListener("input", () => renderSearch(sInput.value));
  search.addEventListener("click", e => { if (e.target === search || e.target.closest("[data-close-search]")) closeSearch(); });

  function miniCard(p, i) {
    return `<button class="ing__card" data-open="${p.handle}" style="--rd:${i * 0.05}s">
      <img src="${src(p.imgs[0])}" alt="" loading="lazy">
      <div><strong>${short(p)}</strong><span>${p.type} · ${money(p.price)}</span></div></button>`;
  }

  /* Mobile menu */
  const menuBtn = $("#menuBtn"), mmenu = $("#mmenu");
  function openMenu() { body.classList.add("menu-open"); menuBtn.setAttribute("aria-expanded", "true"); mmenu.setAttribute("aria-hidden", "false"); lock(); }
  function closeMenu() {
    if (!body.classList.contains("menu-open")) return;
    body.classList.remove("menu-open"); menuBtn.setAttribute("aria-expanded", "false"); mmenu.setAttribute("aria-hidden", "true"); unlockIfIdle();
  }
  menuBtn.addEventListener("click", () => body.classList.contains("menu-open") ? closeMenu() : openMenu());
  mmenu.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeMenu(); });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeSearch(); closeModal(); closeDrawer(); closeMenu(); }
  });

  /* Global delegation: open product / add to cart */
  document.addEventListener("click", e => {
    const add = e.target.closest("[data-add]");
    if (add) { e.preventDefault(); addToCart(add.dataset.add); return; }
    const open = e.target.closest("[data-open]");
    if (open && !(moments.dragged && open.closest("#moments"))) { e.preventDefault(); openModal(open.dataset.open); return; }
    const closeD = e.target.closest("[data-close-drawer]");
    if (closeD && closeD.tagName === "A") closeDrawer();
  });

  /* Toast */
  let toastTimer;
  function toast(html) {
    const t = $("#toast");
    t.innerHTML = html; t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 2600);
  }

  /* ---------------------------------------------------------
     Hero slideshow
     --------------------------------------------------------- */
  const slides = $$("#heroSlides img"), dots = $$("#heroDots button");
  const SLIDE_MS = 6000;
  document.documentElement.style.setProperty("--slide-ms", SLIDE_MS + "ms");
  let slide = 0, slideTimer;
  function goSlide(i) {
    slide = (i + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle("is-active", k === slide));
    dots.forEach((d, k) => { d.classList.remove("is-active"); if (k === slide) { void d.offsetWidth; d.classList.add("is-active"); } });
    clearTimeout(slideTimer);
    slideTimer = setTimeout(() => goSlide(slide + 1), SLIDE_MS);
  }
  dots.forEach((d, k) => d.addEventListener("click", () => goSlide(k)));
  goSlide(0);

  /* ---------------------------------------------------------
     Gold dust canvas
     --------------------------------------------------------- */
  (function dust() {
    const c = $("#dust");
    if (!c || reduceMotion) return;
    const ctx = c.getContext("2d");
    let w, h, dpr, parts = [], visible = true, raf;
    function size() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = c.offsetWidth; h = c.offsetHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(90, (w * h) / 16000));
      parts = Array.from({ length: n }, () => spawn(true));
    }
    function spawn(any) {
      return {
        x: Math.random() * w, y: any ? Math.random() * h : h + 10,
        r: Math.random() * 1.8 + 0.4, vy: -(Math.random() * 0.35 + 0.08),
        vx: (Math.random() - 0.5) * 0.15, a: Math.random() * Math.PI * 2, s: Math.random() * 0.02 + 0.006
      };
    }
    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx + Math.sin(p.a) * 0.15; p.y += p.vy; p.a += p.s;
        if (p.y < -10) Object.assign(p, spawn(false));
        const tw = 0.35 + Math.abs(Math.sin(p.a)) * 0.65;
        ctx.beginPath();
        ctx.fillStyle = `rgba(234, 211, 154, ${tw * 0.75})`;
        ctx.shadowColor = "rgba(234, 211, 154, .9)"; ctx.shadowBlur = p.r * 4;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      if (visible) raf = requestAnimationFrame(tick);
    }
    new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(tick);
    }).observe(c);
    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(size, 200); });
    size();
  })();

  /* ---------------------------------------------------------
     Scroll: header, progress, parallax, statement, ritual
     --------------------------------------------------------- */
  const header = $("#header"), progress = $("#progress");
  const parallaxEls = reduceMotion ? [] : $$("[data-parallax]");
  const stmt = $("#statementText");
  // split statement into words
  if (stmt) {
    const goldWords = new Set(["skin.", "moment."]);
    stmt.innerHTML = stmt.textContent.trim().split(/\s+/).map(w => `<span class="w${goldWords.has(w) ? " gold" : ""}">${w}</span>`).join(" ");
  }
  const words = stmt ? $$(".w", stmt) : [];
  let lastY = window.scrollY, ticking = false;

  function onScroll() {
    const y = window.scrollY, vh = window.innerHeight;
    header.classList.toggle("is-scrolled", y > 40);
    const goingDown = y > lastY && y > vh * 0.9;
    if (!body.classList.contains("menu-open")) header.classList.toggle("is-hidden", goingDown);
    lastY = y;
    const max = document.documentElement.scrollHeight - vh;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

    for (const el of parallaxEls) {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -100 || r.top > vh + 100) continue;
      const mid = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-mid * Number(el.dataset.parallax)).toFixed(1)}px, 0)`;
    }

    if (words.length) {
      const r = stmt.getBoundingClientRect();
      const p = reduceMotion ? 1 : Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
      const lit = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle("on", i < lit));
    }
    ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* Reveal on scroll */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal").forEach(el => io.observe(el));

  /* Ritual steps */
  const steps = $$("#ritualSteps .step"), ritualImgs = $$(".ritual__arch img"), ritualNum = $("#ritualNum");
  let activeStep = 0;
  function updateRitual() {
    const mid = window.innerHeight / 2;
    let best = activeStep, bestD = Infinity;
    steps.forEach((s, k) => {
      const r = s.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < bestD) { bestD = d; best = k; }
    });
    if (best === activeStep && steps[best].classList.contains("is-active")) return;
    activeStep = best;
    steps.forEach((s, k) => s.classList.toggle("is-active", k === best));
    ritualImgs.forEach((im, k) => im.classList.toggle("is-active", k === best));
    if (ritualNum) ritualNum.textContent = String(best + 1).padStart(2, "0");
  }
  window.addEventListener("scroll", () => requestAnimationFrame(updateRitual), { passive: true });
  updateRitual();

  /* ---------------------------------------------------------
     Ingredients explorer
     --------------------------------------------------------- */
  const ING = ["Hyaluronic Acid", "Vitamin C", "Collagen", "Niacinamide", "Shea Butter", "Centella Asiatica", "Caffeine", "Acetyl Hexapeptide-8", "Aloe Vera", "Vitamin E", "Vitamin A", "Panthenol (B5)", "Chamomile", "Allantoin", "Ahnfeltia", "Rosa Damascena", "Licorice Root"];
  const ingChips = $("#ingChips"), ingResults = $("#ingResults");
  ingChips.innerHTML = ING.map((n, i) => `<button data-ing="${n}" class="${i ? "" : "is-active"}">${n}</button>`).join("");
  function showIng(name) {
    $$("button", ingChips).forEach(b => b.classList.toggle("is-active", b.dataset.ing === name));
    ingResults.innerHTML = PRODUCTS.filter(p => p.ings.includes(name)).map(miniCard).join("");
  }
  ingChips.addEventListener("click", e => { const b = e.target.closest("[data-ing]"); if (b) showIng(b.dataset.ing); });
  showIng(ING[0]);

  /* ---------------------------------------------------------
     Moments: drag to scroll
     --------------------------------------------------------- */
  const moments = $("#moments");
  moments.dragged = false;
  (function drag() {
    let down = false, startX = 0, startScroll = 0;
    moments.addEventListener("pointerdown", e => {
      if (e.pointerType !== "mouse") return;
      down = true; moments.dragged = false; startX = e.clientX; startScroll = moments.scrollLeft;
    });
    window.addEventListener("pointermove", e => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 5) { moments.dragged = true; moments.classList.add("is-drag"); }
      moments.scrollLeft = startScroll - dx;
    });
    window.addEventListener("pointerup", () => {
      if (!down) return;
      down = false; moments.classList.remove("is-drag");
      setTimeout(() => { moments.dragged = false; }, 0);
    });
  })();

  /* ---------------------------------------------------------
     Desktop flourishes: cursor, magnetic buttons, card tilt
     --------------------------------------------------------- */
  if (finePointer && !reduceMotion) {
    const cursor = $("#cursor");
    let cx = -100, cy = -100, tx = -100, ty = -100;
    window.addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function loop() {
      cx += (tx - cx) * 0.2; cy += (ty - cy) * 0.2;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener("pointerover", e => {
      cursor.classList.toggle("is-hover", !!e.target.closest("a, button, summary, [data-open]"));
    });

    $$(".magnetic").forEach(el => {
      el.addEventListener("pointermove", e => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });

    grid.addEventListener("pointermove", e => {
      const m = e.target.closest("[data-tilt]");
      if (!m) return;
      const r = m.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      m.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 7}deg) rotateY(${(px - 0.5) * 7}deg)`;
      m.style.setProperty("--mx", px * 100 + "%"); m.style.setProperty("--my", py * 100 + "%");
    });
    grid.addEventListener("pointerout", e => {
      const m = e.target.closest("[data-tilt]");
      if (m && !m.contains(e.relatedTarget)) m.style.transform = "";
    });
  }

  const yr = $("#year"); if (yr) yr.textContent = new Date().getFullYear();
})();
