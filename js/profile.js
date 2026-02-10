const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "login.html";
}

document.getElementById("profileName").innerText = user.name;
document.getElementById("profileEmail").innerText = user.email;
