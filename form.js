function validate() {
  // to get form Data

  // first way

  // var usreName = document.querySelector('#user').value
  // var pwd = document.querySelector('#pwd').value

  //second way

  // var x = document.forms["first"]
  // var userName = x["user"].value
  // var pwd = x["pwd"].value

  //third way

  var userName = document.first.user.value;
  var pwd = document.first.pwd.value;

  //validate user name

  var validName = validateName(userName);
  console.log("Name is" + validName);

  // validate for password

  var isValidPwd = validatePwd(pwd);
  console.log("Password is" + isValidPwd);

  if (validName && isValidPwd) {
    return true;
  }
  return false;
}

// function for validate name

function validateName(userName) {
  var namePattern = new RegExp("[a-zA-Z]");
  var validName = namePattern.test(userName);

  var nameErr = document.getElementById("nameErr");

  if (validName == false) {
    nameErr.innerHTML = "Invalid Name";
    nameErr.style.color = "red";
    nameErr.style.display = "block";
  } else {
    nameErr.style.display = "none";
  }
  return validName;
}

// function for validate password

function validatePwd(pwd) {
  var pwdPattern = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );
  var isValidPwd = pwdPattern.test(pwd);
  var pwdErr = document.getElementById("pwdErr");

  if (isValidPwd == false) {
    pwdErr.innerHTML = "Invalid Password";
    pwdErr.style.color = "red";
    pwdErr.style.display = "block";
  } else {
    pwdErr.style.display = "none";
  }
  return isValidPwd;
}
