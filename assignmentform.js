function validate() {
  var firstName = document.first.fname.value;
  var secondName = document.first.sname.value;
  var email = document.first.emails.value;
  var phoneNo = document.first.phoneNum.value;
  var dob = document.first.dob.value;
  var age = document.first.age.value;
  var address = document.first.address.value;
  var pwd = document.first.pwd.value;
  var cPwd = document.first.Cpwd.value;

  var ValidName = FirstName(firstName);
  console.log("firstName is" + ValidName);

  var secondValidName = SecondName(secondName);
  console.log("secondName is" + secondValidName);

  var emailValidName = Email(email);
  console.log("email Name is" + emailValidName);

  var phoneValidName = Phone(phoneNo);
  console.log("phone number is" + phoneValidName);

  var dobValidName = Dob(dob);
  console.log("date of birth is" + dobValidName);

  var ageValidName = Age(age);
  console.log("age is" + ageValidName);

  var addressValidName = Address(address);
  console.log("address is" + addressValidName);

  var isValidPwd = validatePwd(pwd);
  console.log("Password is" + isValidPwd);

  var isValidcPwd = validatecPwd(pwd, cPwd);
  console.log("ConfirmPassword is" + isValidcPwd);

  if (
    ValidName &&
    secondValidName &&
    emailValidName &&
    phoneValidName &&
    dobValidName &&
    ageValidName &&
    addressValidName &&
    isValidPwd &&
    isValidcPwd
  ) {
    return true;
  }

  return false;
}

// function for first name validation

function FirstName(firstName) {
  var fnamePattern = new RegExp("[a-zA-Z]");
  var ValidName = fnamePattern.test(firstName);

  var fnameErr = document.getElementById("fnameErr");

  if (ValidName == false) {
    fnameErr.innerHTML = "Invalid fName";
    fnameErr.style.color = "red";
    fnameErr.style.display = "block";
  } else {
    fnameErr.style.display = "none";
  }
  return ValidName;
}

// function for second name validation

function SecondName(secondName) {
  var snamePattern = new RegExp("[a-zA-Z]");
  var secondValidName = snamePattern.test(secondName);

  var snameErr = document.getElementById("snameErr");

  if (secondValidName == false) {
    snameErr.innerHTML = "Invalid sName";
    snameErr.style.color = "red";
    snameErr.style.display = "block";
  } else {
    snameErr.style.display = "none";
  }
  return secondValidName;
}

// function for email validation

function Email(email) {
  var enamePattern = new RegExp("^[a-z0-9](.?[a-z0-9]){5,}@g(oogle)?mail.com$");
  var emailValidName = enamePattern.test(email);

  var emailErr = document.getElementById("emailErr");

  if (emailValidName == false) {
    emailErr.innerHTML = "Invalid email";
    emailErr.style.color = "red";
    emailErr.style.display = "block";
  } else {
    emailErr.style.display = "none";
  }
  return emailValidName;
}

// function for phone number

function Phone(phoneNo) {
  var pnamePattern = new RegExp("^[6-9]{1}[0-9]{9}$");
  var phoneValidName = pnamePattern.test(phoneNo);

  var phoneErr = document.getElementById("phoneErr");

  if (phoneValidName == false) {
    phoneErr.innerHTML = "Invalid phone number";
    phoneErr.style.color = "red";
    phoneErr.style.display = "block";
  } else {
    phoneErr.style.display = "none";
  }
  return phoneValidName;
}

//function for date of birth validation

function Dob(dob) {
  var dnamePattern = new RegExp("^([0-9]{4})-([0-9]{2})-([0-9]{2})$");
  // console.log(dob);
  var dobValidName = dnamePattern.test(dob);

  var dateErr = document.getElementById("dateErr");

  if (dobValidName == false) {
    dateErr.innerHTML = "Invalid Date of birth";
    dateErr.style.color = "red";
    dateErr.style.display = "block";
  } else {
    dateErr.style.display = "none";
  }
  return dobValidName;
}

// function for Age validation

function Age(age) {
  var anamePattern = new RegExp("[0-1]{1}[0-9]{1}");
  var ageValidName = anamePattern.test(age);

  var ageErr = document.getElementById("ageErr");

  if (ageValidName == false) {
    ageErr.innerHTML = "Invalid phone number";
    ageErr.style.color = "red";
    ageErr.style.display = "block";
  } else {
    ageErr.style.display = "none";
  }
  return ageValidName;
}

// function ageCalculator() {
//   var userinput = document.getElementById("DOB").value;
//   var dob = new Date(userinput);
//   if(userinput==null || userinput=='') {
//     document.getElementById("message").innerHTML = "**Choose a date please!";
//     return false;
//   } else {

//   //calculate month difference from current date in time
//   var month_diff = Date.now() - dob.getTime();

//   //convert the calculated difference in date format
//   var age_dt = new Date(month_diff);

//   //extract year from date
//   var year = age_dt.getUTCFullYear();

//   //now calculate the age of the user
//   var age = Math.abs(year - 1970);

//   //display the calculated age
//   return document.getElementById("result").innerHTML =
//            "Age is: " + age + " years. ";
//   }
// }

// function for address validation

function Address(address) {
  var adnamePattern = new RegExp("(?:[A-Z][a-z.-]+[ ]?)+[0-9]{6}$");
  var addressValidName = adnamePattern.test(address);

  var addressErr = document.getElementById("addressErr");

  if (addressValidName == false) {
    addressErr.innerHTML = "Invalid Address";
    addressErr.style.color = "red";
    addressErr.style.display = "block";
  } else {
    addressErr.style.display = "none";
  }
  return addressValidName;
}

// function for password validation

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

// function for confirm password validation

function validatecPwd(pwd, cPwd) {
  var cpwdPattern = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );
  var isValidcPwd = cpwdPattern.test(cPwd);
  var cpwdErr = document.getElementById("cpwdErr");

  if (isValidcPwd == false) {
    cpwdErr.innerHTML = "Invalid Password";
    cpwdErr.style.color = "red";
    cpwdErr.style.display = "block";
  } else if (pwd !== cPwd) {
    cpwdErr.innerHTML = " Password and Confirm password not match";
    cpwdErr.style.color = "red";
    cpwdErr.style.display = "block";
  } else {
    cpwdErr.style.display = "none";
  }
  return isValidcPwd;
}
