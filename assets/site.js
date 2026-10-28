(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("tg-theme");
    if (saved) root.setAttribute("data-theme", saved);
  } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector("[data-theme-toggle]");
    if (toggle) {
      var isDark = function () {
        var t = root.getAttribute("data-theme");
        if (t) return t === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
      };
      var sync = function () {
        toggle.setAttribute("aria-pressed", String(isDark()));
        toggle.setAttribute("aria-label", isDark() ? "Usar tema claro" : "Usar tema escuro");
      };
      sync();
      toggle.addEventListener("click", function () {
        var next = isDark() ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("tg-theme", next); } catch (e) {}
        sync();
      });
    }

    var menuBtn = document.querySelector("[data-menu]");
    var nav = document.getElementById("nav");
    if (menuBtn && nav) {
      var setOpen = function (open) {
        nav.classList.toggle("is-open", open);
        menuBtn.setAttribute("aria-expanded", String(open));
        menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
        document.body.style.overflow = open ? "hidden" : "";
      };
      menuBtn.addEventListener("click", function () { setOpen(!nav.classList.contains("is-open")); });
      nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); menuBtn.focus(); }
      });
    }

    var y = document.querySelector("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
