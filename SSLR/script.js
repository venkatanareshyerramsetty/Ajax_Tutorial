var usernameElement = document.querySelector('#username');
var passwordElement = document.querySelector('#password');


// Get the Error Messages
var userErrorElement = document.querySelector('#name_error');
var passwordErrorElement = document.querySelector('#password_error');

// Blur event for username Field
username.addEventListener('blur',function() {
    clearErrorMessage(usernameElement,userErrorElement);
});



// Blur event for password Field
passwordElement.addEventListener('blur',function() {
    clearErrorMessage(passwordElement,passwordErrorElement);
    
});








// validate function logic
function validate() {
    var isValid = true;

  

    // Required Username validation
    if(usernameElement.value === ''){
      displayErrorMessage(usernameElement,userErrorElement,'Username is Required');
       //alert("Username is Required");
        isValid = false;
        return isValid;
    }

    // Username Length validation
    if(usernameElement.value.length < 5){
       displayErrorMessage(usernameElement,userErrorElement,'Enter at least 5 letters');
       //alert('Enter at least 5 letters')
        isValid = false;
        return isValid;
    }

   

    // Required Password Validation
    if(passwordElement.value === ''){
        displayErrorMessage(passwordElement,passwordErrorElement,'Password is Required');
        //alert(" Password is Required");
        isValid = false;
        return isValid;
    }

    if(passwordElement.value.trim().length <=5){
        displayErrorMessage(passwordElement,passwordErrorElement,'Enter at least 6 letters');
        //alert(" Password is Required");
        isValid = false;
        return isValid;
    }



    if(isValid === false){
        return isValid;
    }
    else{
        alert('Form Submitted Successfully');
        return true;
    }
}



// display Error message
function displayErrorMessage(inputElement,errorElement,message) {
    inputElement.style.borderColor = 'red';
    inputElement.style.backgroundColor = 'lightsalmon';
    inputElement.style.boxShadow = '0 0 30px darkred';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
}

// function clear Error Message
function clearErrorMessage(inputElement,errorElement) {
    inputElement.style.borderColor = 'teal';
    inputElement.style.backgroundColor = 'transparent';
    inputElement.style.boxShadow = '0 0 0 black';
    errorElement.textContent = '';
}
