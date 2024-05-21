const newsletterModal = document.getElementById('modalNewsletter');
const newsletter = localStorage.getItem('newsletter');
const userName = document.querySelector('input[name="email"]');
const passwordField = document.querySelector('input[name="password"]');
const userNameSign = document.querySelector('input[name="email-signup"]');
const passwordFieldSign = document.querySelector('input[name="password-signup"]');
const firstName = document.getElementById('input-name');
const lastNameInput = document.getElementById('input-last-name');

onload = function () {
  this.setTimeout(() => {
    if (newsletter !== 'false') {
      newsletterModal.style.display = 'flex';
    }
  }, 3000);
};
function validateName() {
  let name = firstName.value;
  let p = firstName.nextElementSibling;
  if (name.length <= 0) {
    firstName.classList.add('input-red');
    p.textContent = 'Name is empty!';
  }
}
function validateLastName() {
  let lastName = lastNameInput.value;
  let p = lastNameInput.nextElementSibling;
  if (lastName.length <= 0) {
    lastNameInput.classList.add('input-red');
    p.textContent = 'Last name is empty!';
  }
}
function validatePassword() {
  let pass = passwordField.value;
  let p = passwordField.nextElementSibling;
  if (typeof pass !== 'string' || pass.length < 8) {
    passwordField.classList.add('input-red');
    p.textContent = 'Password should have at least 8 characters!';
  }
  let hasNumber = false;
  let hasLetter = false;
  for (let i = 0; i < pass.length; i++) {
    let result = pass.charCodeAt(i);
    if (!((result >= 48 && result <= 57) || (result >= 65 && result <= 90) || (result >= 97 && result <= 122))) {
      p.textContent = 'The password must contain only letters and numbers.';
    }
    if (result >= 48 && result <= 57) {
      hasNumber = true;
    }
    if ((result >= 65 && result <= 90) || (result >= 97 && result <= 122)) {
      hasLetter = true;
    }
  }
  if (!hasNumber) {
    p.textContent = 'The password must contain at least one number!';
  }
  if (!hasLetter) {
    p.textContent = 'The password must contain at least one letter!';
  } else {
    passwordField.classList.remove('input-red');
  }
}

function validatePasswordSign() {
  let pass = passwordFieldSign.value;
  let p = passwordFieldSign.nextElementSibling;
  if (typeof pass !== 'string' || pass.length < 8) {
    passwordFieldSign.classList.add('input-red');
    p.textContent = 'Password should have at least 8 characters!';
  }
  let hasNumber = false;
  let hasLetter = false;
  for (let i = 0; i < pass.length; i++) {
    let result = pass.charCodeAt(i);
    if (!((result >= 48 && result <= 57) || (result >= 65 && result <= 90) || (result >= 97 && result <= 122))) {
      p.textContent = 'The password must contain only letters and numbers.';
    }
    if (result >= 48 && result <= 57) {
      hasNumber = true;
    }
    if ((result >= 65 && result <= 90) || (result >= 97 && result <= 122)) {
      hasLetter = true;
    }
  }
  if (!hasNumber) {
    p.textContent = 'The password must contain at least one number!';
  }
  if (!hasLetter) {
    p.textContent = 'The password must contain at least one letter!';
  } else {
    passwordFieldSign.classList.remove('input-red');
  }
}

function validateEmail() {
  let emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  let p = userName.nextElementSibling;
  if (userName.value === '') {
    userName.classList.add('input-red');
    p.textContent = 'The email address is empty.';
  } else if (!userName.value.match(emailExpression)) {
    p.textContent = 'The email address is not valid.';
    userName.classList.add('input-red');
    /* userName.classList.remove('green-border'); */
    return false;
  } else {
    p.textContent = '';
    /* userName.classList.add('green-border'); */
    userName.classList.remove('input-red');
    return true;
  }
}

function validateEmailSign() {
  let emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  let p = userNameSign.nextElementSibling;
  if (userNameSign.value === '') {
    userNameSign.classList.add('input-red');
    p.textContent = 'The email address is empty.';
  } else if (!userNameSign.value.match(emailExpression)) {
    p.textContent = 'The email address is not valid.';
    userNameSign.classList.add('input-red');
    /* userName.classList.remove('green-border'); */
    return false;
  } else {
    p.textContent = '';
    /* userName.classList.add('green-border'); */
    userNameSign.classList.remove('input-red');
    return true;
  }
}
firstName.addEventListener('blur', validateName);
firstName.addEventListener('focus', function () {
  this.classList.remove('red-border');
  let p = this.nextElementSibling;
  if (p && p.classList.contains('input-p')) {
    p.textContent = '';
  }
});

lastNameInput.addEventListener('blur', validateLastName);
lastNameInput.addEventListener('focus', function () {
  this.classList.remove('red-border');
  let p = this.nextElementSibling;
  if (p && p.classList.contains('input-p')) {
    p.textContent = '';
  }
});

userName.addEventListener('blur', validateEmail);
userName.addEventListener('focus', function () {
  this.classList.remove('red-border');
  let p = this.nextElementSibling;
  if (p && p.classList.contains('input-p')) {
    p.textContent = '';
  }
});
passwordField.addEventListener('blur', validatePassword);
passwordField.addEventListener('focus', function () {
  this.classList.remove('red-border');
  let p = this.nextElementSibling;
  if (p && p.classList.contains('input-p')) {
    p.textContent = '';
  }
});

userNameSign.addEventListener('blur', validateEmailSign);
userNameSign.addEventListener('focus', function () {
  this.classList.remove('red-border');
  let p = this.nextElementSibling;
  if (p && p.classList.contains('input-p')) {
    p.textContent = '';
  }
});
passwordFieldSign.addEventListener('blur', validatePasswordSign);
passwordFieldSign.addEventListener('focus', function () {
  this.classList.remove('red-border');
  let p = this.nextElementSibling;
  if (p && p.classList.contains('input-p')) {
    p.textContent = '';
  }
});

const modal = document.getElementById('modal');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const titleLogin = document.querySelector('.title-login');
const titleSignUp = document.querySelector('.title-signup');
const formLogin = document.querySelector('.form-login');
const formSignUp = document.querySelector('.form-signup');
const newsLetterbtn = document.getElementById('newsLetterOk');
const newsLetterBtnCancel = document.getElementById('newsLetterCancel');

newsLetterBtnCancel.addEventListener('click', (e) => {
  e.preventDefault;
  newsletterModal.style.display = 'none';
});

newsLetterbtn.addEventListener('click', (e) => {
  e.preventDefault;
  localStorage.setItem('newsletter', 'false');
});

loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'flex';
  titleLogin.style.display = 'block';
  titleSignUp.style.display = 'none';
  formSignUp.style.display = 'none';
  formLogin.style.display = 'block';
});

signupBtn.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'flex';
  titleSignUp.style.display = 'block';
  titleLogin.style.display = 'none';
  formSignUp.style.display = 'block';
  formLogin.style.display = 'none';
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
