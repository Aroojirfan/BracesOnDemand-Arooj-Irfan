/* eslint-disable */ 
// function to clear all the errors
function clearFormErros() {
  const errors = document.getElementsByClassName('error');
  for (const item of errors) {
    item.innerHTML = '';
  }
}
// Function to throw an error when Validation fails
function getError(id, error) {
  const element = document.getElementById(id);
  element.getElementsByClassName('error')[0].innerHTML = error;
}

// Function to check all the Validations in the form.
function validateForm() {
  let returnVal = true;
  clearFormErros();
  const name = document.forms.myForm.fname.value;
  if (name.length < 10) {
    getError('name', '*Length of name is too short!!');
    returnVal = false;
  }
  if (name.length === 0) {
    getError('name', '*Name cannot be blank!!');
    returnVal = false;
  }
  const email = document.forms.myForm.femail.value;
  if (email.length > 15) {
    getError('email', '*Email length is too long');
    returnVal = false;
  }
  const phone1 = document.forms.myForm.fphone.value;
  if (phone1.length !== 11) {
    getError('phone', '*Phone number should be 11 digits long');
    returnVal = false;
  }
  const password = document.forms.myForm.mypass.value;
  if (password.length === '') {
    getError('pass', '*Password cannot be blank');
    returnVal = false;
  }
  if (password.length < 6) {
    getError('pass', '*Password must be at least 6 characters long');
    returnVal = false;
  }
  if (password.length > 15) {
    getError('pass', '*Password must not exceed 15 characters!!');
    returnVal = false;
  }
  if (
    password.search(/[0-9]/) === -1
    || password.search(/[a-z]/) === -1
    || password.search(/[A-Z]/) === -1
    || password.search(/[!\@\#\$\%\& \&\*\+\-\?\=\,\.\_\<\>]/) === -1
  ) {
    getError(
      'pass',
      '*Password must contain atleast one upper case one lower case, one digit and one special character!!',
    );
    returnVal = false;
  }
  const confirmpass = document.forms.myForm.cypass.value;
  if (confirmpass !== password) {
    getError('cpass', '*password and confirm password should match!!');
    returnVal = false;
  }
  if (returnVal === true) {
    alert('your validations are correct');
  }

  return returnVal;
}
