function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var gender = document.getElementsByName("gender");
  var usernameError = document.getElementById("usernameError");
  var passwordError = document.getElementById("passwordError");
  var genderError = document.getElementById("genderError");

  usernameError.textContent = "";
  passwordError.textContent = "";
  // genderError.textContent = "";

  if (username === "") {
    usernameError.textContent = "UserName is required";
    return false;
  }
  if (password === "") {
    passwordError.textContent = "Passwor is required";
    return false;
  }

  return true;
}
