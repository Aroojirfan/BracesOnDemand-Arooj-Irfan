function clearformerros() {
    errors = document.getElementsByClassName("error");
    for (let item of errors) {
      item.innerHTML = "";
    }
  }
  function geterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName("error")[0].innerHTML = error;
  }
  function validateform() {
    var returnval = true;
    clearformerros();
    var name = document.forms["myForm"]["fname"].value;
    if (name.length < 10) {
      geterror("name", "*Length of name is too short!!");
      var returnval = false;
    }
    if (name.length == 0) {
      geterror("name", "*Name cannot be blank!!");
      var returnval = false;
    }
    var email = document.forms["myForm"]["femail"].value;
    if (email.length > 15) {
      geterror("email", "*Email length is too long");
      var returnval = false;
    }
    var phone1 = document.forms["myForm"]["fphone"].value;
    if (phone1.length != 11) {
      geterror("phone", "*Phone number should be 11 digits long");
      var returnval = false;
    }
    var password = document.forms["myForm"]["mypass"].value;
    if (password.length == "") {
      geterror("pass", "*Password cannot be blank");
      var returnval = false;
    }
    if (password.length < 6) {
      geterror("pass", "*Password must be at least 6 characters long");
      var returnval = false;
    }
    if (password.length > 15) {
      geterror("pass", "*Password must not exceed 15 characters!!");
      var returnval = false;
    }
    if (
      password.search(/[0-9]/) == -1 ||
      password.search(/[a-z]/) == -1 ||
      password.search(/[A-Z]/) == -1 ||
      password.search(/[!\@\#\$\%\& \&\*\+\-\?\=\,\.\_\<\>]/) == -1
    ) {
      geterror(
        "pass",
        "*Password must contain atleast one upper case one lower case, one digit and one special character!!"
      );
      var returnval = false;
    }
    var confirmpass = document.forms["myForm"]["cypass"].value;
    if (confirmpass != password) {
      geterror("cpass", "*password and confirm password should match!!");
      var returnval = false;
    }
  
    return returnval;
  }
  