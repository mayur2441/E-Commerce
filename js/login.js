function loginUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email }));
  window.location.href = "index.html";
}
