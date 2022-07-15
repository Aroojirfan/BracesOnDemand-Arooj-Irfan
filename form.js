/* eslint-disable */ 
// function to clear all the errors
function ClearFormErros() {
  const errors = document.getElementsByClassName('error');
  for (const item of errors) {
    item.innerHTML = '';
  }
}
// Function to throw an error when Validation fails
function GetError(id, error) {
  const element = document.getElementById(id);
  element.getElementsByClassName('error')[0].innerHTML = error;
}

// Function to check all the Validations in the form.
function ValidateForm() {
  let returnval = true;
  ClearFormErros();
  const name = document.forms.myForm.fname.value;
  if (name.length < 10) {
    GetError('name', '*Length of name is too short!!');
    returnval = false;
  }
  if (name.length === 0) {
    GetError('name', '*Name cannot be blank!!');
    returnval = false;
  }
  const email = document.forms.myForm.femail.value;
  if (email.length > 15) {
    GetError('email', '*Email length is too long');
    returnval = false;
  }
  const phone1 = document.forms.myForm.fphone.value;
  if (phone1.length !== 11) {
    GetError('phone', '*Phone number should be 11 digits long');
    returnval = false;
  }
  const password = document.forms.myForm.mypass.value;
  if (password.length === '') {
    GetError('pass', '*Password cannot be blank');
    returnval = false;
  }
  if (password.length < 6) {
    GetError('pass', '*Password must be at least 6 characters long');
    returnval = false;
  }
  if (password.length > 15) {
    GetError('pass', '*Password must not exceed 15 characters!!');
    returnval = false;
  }
  if (
    password.search(/[0-9]/) === -1
    || password.search(/[a-z]/) === -1
    || password.search(/[A-Z]/) === -1
    || password.search(/[!\@\#\$\%\& \&\*\+\-\?\=\,\.\_\<\>]/) === -1
  ) {
    GetError(
      'pass',
      '*Password must contain atleast one upper case one lower case, one digit and one special character!!',
    );
    returnval = false;
  }
  const confirmpass = document.forms.myForm.cypass.value;
  if (confirmpass !== password) {
    GetError('cpass', '*password and confirm password should match!!');
    returnval = false;
  }
  if (returnval === true) {
    alert('your validations are correct');
  }

  return returnval;
}
