const detail = JSON.parse(localStorage.getItem("detail"));

if (!product) {
  // safety fallback
  window.location.href = "index.html";
}
