document.addEventListener("DOMContentLoaded", function () {

  var el = document.getElementById("redirect");
  if (!el) return;

  var targetUrl = el.dataset.redirectUrl;
  if (!targetUrl) return;

  setTimeout(function () {
    window.location.href = targetUrl;
  }, 7000);

});