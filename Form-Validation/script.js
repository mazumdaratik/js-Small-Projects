let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let buttonError = document.getElementById('button-error');

function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = 'Phone number must be 11 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Only digits are allowed';
        return false;
    }
    phoneError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Invalid email address';
        return false;
    }
    emailError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validateMsg() {
    let message = document.getElementById('contact-message').value;
    let required = 30;
    let left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required.';
        return false;
    }
    messageError.innerHTML = '<i class="ri-checkbox-circle-fill"></i>';
    return true;
}

function validateForm(){
    if(!validateName()|| !validatePhone || !validateEmail || !validateMsg){
        buttonError.innerHTML = 'Please, fix error to submit';
        return false;
    }
}