
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const nameRegex = /^[A-Za-z ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  function showError(field, message) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    field.nextElementSibling.innerText = message;
    valid = false;
  }

  function showSuccess(field) {
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
  }

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // FIRST NAME
  if (!firstName.value.trim()) {
    showError(firstName, "First name should not be empty");
  } else if (firstName.value.trim().length < 3 || !nameRegex.test(firstName.value)) {
    showError(firstName, "First name must be at least 3 letters");
  } else {
    showSuccess(firstName);
  }

  // LAST NAME
  if (!lastName.value.trim()) {
    showError(lastName, "Last name should not be empty");
  } else if (lastName.value.trim().length < 3 || !nameRegex.test(lastName.value)) {
    showError(lastName, "Last name must be at least 3 letters");
  } else {
    showSuccess(lastName);
  }

  // EMAIL
  if (!email.value.trim()) {
    showError(email, "Email should not be empty");
  } else if (!emailRegex.test(email.value)) {
    showError(email, "Enter a valid email address");
  } else {
    showSuccess(email);
  }

  // PHONE
  if (!phone.value.trim()) {
    showError(phone, "Phone number should not be empty");
  } else if (!phoneRegex.test(phone.value)) {
    showError(phone, "Enter a valid Indian mobile number");
  } else {
    showSuccess(phone);
  }

  // SUBJECT
  if (!subject.value.trim()) {
    showError(subject, "Subject should not be empty");
  } else if (subject.value.trim().length < 5) {
    showError(subject, "Subject must be at least 5 characters");
  } else {
    showSuccess(subject);
  }

  // MESSAGE
  if (!message.value.trim()) {
    showError(message, "Message should not be empty");
  } else if (message.value.trim().length < 10) {
    showError(message, "Message must be at least 10 characters");
  } else {
    showSuccess(message);
  }

  if (valid) {
    alert("✅ Form submitted successfully!");
    this.reset();
    document.querySelectorAll(".is-valid").forEach(el =>
      el.classList.remove("is-valid")
    );
  }
});
