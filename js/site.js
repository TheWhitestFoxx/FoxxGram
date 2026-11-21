(function () {
  document.documentElement.setAttribute("data-theme", "dark");
  try { localStorage.removeItem("foxxgram-theme"); } catch (e) {}

  var lang = document.querySelector(".lang-select");
  if (lang) {
    var btn = lang.querySelector(".lang-toggle");
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      lang.classList.toggle("open");
    });
    document.addEventListener("click", function () {
      lang.classList.remove("open");
    });
  }
})();
