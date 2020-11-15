// Registration
let userNameInput = document.getElementById('user-name');
let userEmailInput = document.getElementById('user-email');
let userPhoneInput = document.getElementById('user-phone');
let userPasswordInput = document.getElementById('user-password');
let userConfirmPasswordInput = document.getElementById('user-confirm-password');
let userMessageInput = document.getElementById('user-message');
let count = document.getElementById('counter');

let alertName = document.getElementById('alert-name');
let alertEmail = document.getElementById('alert-email');
let alertPhone = document.getElementById('alert-phone');
let alertPassword = document.getElementById('alert-password');
let alertConfirmPassword = document.getElementById('alert-confirm-password');

let submit = document.getElementById('send-form');
let validationFormArray = [userNameInput, userEmailInput,  userPasswordInput, userConfirmPasswordInput];
let alertFormArray = [alertName, alertEmail,  alertPassword, alertConfirmPassword];

userNameInput.addEventListener('keyup', function () {
    let regex = /^[a-z]{4,10}$/;
    if (regex.test(this.value) == true) {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
        alertName.classList.replace('d-block', 'd-none');
    }
    else {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        alertName.classList.replace('d-none', 'd-block');
    }
});

userEmailInput.addEventListener('keyup', function () {
    let regex = /^[a-z]{3,10}@[a-z]{2,10}\.com$/;
    if (regex.test(this.value) == true) {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
        alertEmail.classList.replace('d-block', 'd-none');
    }
    else {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        alertEmail.classList.replace('d-none', 'd-block');
    }
});


userPasswordInput.addEventListener('keyup', function () {
    let regex = /^[a-z]{3,10}$/;
    if (regex.test(this.value) == true) {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
        alertPassword.classList.replace('d-block', 'd-none');
    }
    else {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        alertPassword.classList.replace('d-none', 'd-block');
    }
});

userConfirmPasswordInput.addEventListener('keyup', function () {
    let regex = /^[a-z]{3,10}$/;
    if (regex.test(this.value) == true) {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
        alertConfirmPassword.classList.replace('d-block', 'd-none');
    }
    else {
        this.classList.add('is-invalid');
        this.classList.remove('is-valid');
        alertConfirmPassword.classList.replace('d-none', 'd-block');
    }
});


submit.addEventListener('click', function (e) {
    for (let i = 0; i < validationFormArray.length; i++) {
        if (validationFormArray[i].classList.contains('is-invalid')
            || validationFormArray[i].value == ``) {
            alertFormArray[i].classList.replace('d-none', 'd-block')
            validationFormArray[i].focus();
            e.preventDefault();
            return;
        }
    }
});

///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
