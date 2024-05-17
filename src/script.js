const newsletterModal = document.getElementById('modalNewsletter');

const newsletter = localStorage.getItem("newsletter");

onload = function () {
    


    this.setTimeout(()=>{
        if( newsletter !== "false"){
            this.localStorage.setItem("newsletter","false");
            newsletterModal.style.display = 'flex';
        }
    },3000);

};

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const titleLogin = document.querySelector('.title-login');
  const titleSignUp = document.querySelector('.title-signup');
  const formLogin = document.querySelector('.form-login');
  const formSignUp = document.querySelector('.form-signup');

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
});
