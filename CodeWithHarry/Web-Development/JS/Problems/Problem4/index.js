// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let pass = "rax@rameshoh123";
function ascii(a) {
  return a.charCodeAt();
}
function Validator(pass) {
  console.log(pass.length);
  let hasupper = false;
  let haslower = false;
  let hasdigit = false;

  if (pass.length <= 8) {
    return false;
  }

  for (const char of pass) {
    if (ascii(char) > 64 && ascii(char) < 91) {
      hasupper = true;
    } else if (ascii(char) > 96 && ascii(char) < 123) {
      haslower = true;
    } else if (ascii(char) > 47 && ascii(char) < 58) {
      hasdigit = true;
    }
    if (hasdigit && haslower && hasupper) {
      return true;
    }
  }

  return hasdigit && haslower && hasupper;
}

console.log(Validator("Strongpassword123"));

//
//
// OR
function passvaildate(pass) {
  const isLongEnough = password.length >= 8;
  // Check if the password contains at least one uppercase letter
  const hasUppercase = /[A-Z]/.test(password);
  // Check if the password contains at least one lowercase letter
  const hasLowercase = /[a-z]/.test(password);
  // Check if the password contains at least one digit
  const hasDigit = /\d/.test(password);

  return isLongEnough && hasUppercase && hasLowercase && hasDigit;
}
