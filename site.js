(function () {
  var menus = Array.prototype.slice.call(document.querySelectorAll("details.menu"));
  document.addEventListener("click", function (e) {
    menus.forEach(function (m) { if (m.open && !m.contains(e.target)) m.open = false; });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    menus.forEach(function (m) { if (m.open) { m.open = false; m.querySelector("summary").focus(); } });
  });
  menus.forEach(function (m) {
    m.addEventListener("toggle", function () {
      if (m.open) menus.forEach(function (o) { if (o !== m) o.open = false; });
    });
    m.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { m.open = false; }); });
  });

  var btn = document.getElementById("copy-email");
  var status = document.getElementById("copy-status");
  if (btn && status) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () { status.textContent = "Copied: " + text; };
      var fail = function () {
        var r = document.createRange(); r.selectNodeContents(document.querySelector(".mail"));
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
        status.textContent = "Selected. Press Ctrl+C to copy.";
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fail); else fail();
    });
  }
})();
