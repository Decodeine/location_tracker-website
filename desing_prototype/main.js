const confirmPassword = document.getElementById("passwordConfirm");
const password = document.getElementById("password");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
  if (password.value === confirmPassword.value) {
    confirmPassword.setCustomValidity("");
  } else {
    confirmPassword.setCustomValidity("Passwords don't match");
  }
});
