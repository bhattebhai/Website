// form validation for sign up
function signupValidation() {
  var username = document.getElementById("user-name");
  var email = document.getElementById("e-mail");
  var password = document.getElementById("pass-word");
  var finalPassword = document.getElementById("final-password");

  //if username is empty it highlight input box and print error "invalid"
  if (username.value.trim() == "") {
    username.style.border = "2px solid red";
    document.getElementById("uname").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("uname").style.visibility = "invisible";
    true;
  }

  //if email is empty it highlight input box and print error "invalid"
  if (email.value.trim() == "") {
    email.style.border = "2px solid red";
    document.getElementById("mail").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("mail").style.visibility = "invisible";
    true;
  }

  //if password is empty it highlight input box and print error "invalid"
  if (password.value.trim() == "") {
    password.style.border = "2px solid red";
    document.getElementById("pword").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("pword").style.visibility = "invisible";
    true;
  }

  //if password is less than 8 words it highlight input box and print error "invalid"
  if (password.value.length < 8) {
    alert("Password too short");
    password.style.border = "2px solid red";
    document.getElementById("pword").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("pword").style.visibility = "invisible";
    true;
  }

  //if confirm password is empty it highlight input box and print error "invalid"
  if (finalPassword.value.trim() == "") {
    finalpassword.style.border = "2px solid red";
    document.getElementById("surepassword").style.visibility = "visible";
    return false;
  } else {
    document.getElementById("surepassword").style.visibility = "invisible";
    true;
  }
  alert("You have successfully signed up"); // pop up message on successful singup
}
