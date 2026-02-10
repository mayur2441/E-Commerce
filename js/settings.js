const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

function goBack() {
  window.location.href = "profile.html";
}
