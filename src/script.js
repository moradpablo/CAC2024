const provinciasArgentinas = ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Rios',
                              'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 
                              'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'];

const newsletterModal = document.querySelector('.modalNewsletter');
const bodyWeb = document.querySelector('body');

const newsletter = localStorage.getItem('newsletter');

onload = function () {
  this.setTimeout(() => {
    if (newsletter !== 'false') {
      bodyWeb.style.overflow = "hidden";
      newsletterModal.classList.add('modalNewsletterFadeIn');
    }
  }, 2000);
};

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const titleLogin = document.querySelector('.title-login');
  const titleSignUp = document.querySelector('.title-signup');
  const formLogin = document.querySelector('.form-login');
  const formSignUp = document.querySelector('.form-signup');
  const newsLetterbtn = document.getElementById('newsLetterOk');
  const newsLetterBtnCancel = document.getElementById('newsLetterCancel');
  const dropDownProvincias = document.getElementById('dropDownProvincias');

  cargaProvinciasDropDown(dropDownProvincias);

  newsLetterBtnCancel.addEventListener('click', (e) => {
    e.preventDefault;
    newsletterModal.style.display = 'none';
    bodyWeb.style.overflowY = "scroll";
  });

  newsLetterbtn.addEventListener('click', (e) => {
    e.preventDefault;
    localStorage.setItem('newsletter', 'false');
    bodyWeb.style.overflowY = "scroll";
    /* newsletterModal.style.display = 'none'; */
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
});


function cargaProvinciasDropDown(dropDown){
  for(indice in provinciasArgentinas){

    let option = document.createElement('OPTION');

    option.setAttribute('value',indice);

    const nombreProvincia = document.createTextNode(provinciasArgentinas[indice]);
    option.appendChild(nombreProvincia);

    dropDown.appendChild(option);
    console.log(option);
  }
}