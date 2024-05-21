const provinciasArgentinas = ['Buenos Aires', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba', 'Corrientes', 'Entre Rios',
                              'Formosa', 'Jujuy', 'La Pampa', 'La Rioja', 'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 
                              'Salta', 'San Juan', 'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero', 'Tierra del Fuego', 'Tucumán'];

const regExpEmail = new RegExp(/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/) ;
/* variables validación modal newsletter */
const newsletterForm = document.getElementById('newsletterForm');
const emailNewsletterInput = document.querySelector('[name=emailNewsletter]');
const chkboxContent = document.querySelector('.newsLetterSection');
const nameNewsletterInput = document.querySelector('[name=nameNewsletter]');
const dropDownProvincias = document.getElementById('dropDownProvincias');
/* ------------------------------------- */
cargaProvinciasDropDown(dropDownProvincias);

const newsletterModal = document.querySelector('.modalNewsletter');
const bodyWeb = document.querySelector('body');

const newsletter = localStorage.getItem('newsletter');

onload = function () {
  this.setTimeout(() => {
    if (newsletter !== 'false') {
      
      bodyWeb.style.overflow = "hidden";
      newsletterModal.classList.add('modalNewsletterFadeIn');
      newsletterModal.style.zIndex = 9999;
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


  newsLetterBtnCancel.addEventListener('click', (e) => {
    e.preventDefault;
    newsletterModal.style.display = 'none';
    bodyWeb.style.overflowY = "scroll";
    bodyWeb.style.zIndex = "-999";
  });

  newsLetterbtn.addEventListener('click', (e) => {
    e.preventDefault;

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

nameNewsletterInput.addEventListener('blur', (e) => {
  console.log("saliste del foco del name");
  validateFormEmptyField("Nombre",e.target);
});

emailNewsletterInput.addEventListener('blur', (e) =>{
  console.log("saliste del foco del email");
  validateEmailAddress(e);
});

dropDownProvincias.addEventListener('change',(e)=>{
  if(e.target.value !== ""){
    e.target.classList.remove("campoErrorValidacion");
    e.target.nextElementSibling.classList.remove("mensajeErrorValidacion");
    e.target.nextElementSibling.innerText = `\u00A0`;
  }
});

function validateEmailAddress(e){

  if(!regExpEmail.test(e.target.value)){
    e.target.classList.add("campoErrorValidacion");
    e.target.nextElementSibling.classList.add("mensajeErrorValidacion");
    e.target.nextElementSibling.innerText = `La dirección de email ingresada no es válida`;
  }
  else{
    e.target.value = e.target.value.trim();
    e.target.classList.remove("campoErrorValidacion");
    e.target.nextElementSibling.classList.remove("mensajeErrorValidacion");
    e.target.nextElementSibling.innerText = `\u00A0`;
  }

}

function validateFormEmptyField(message, e ){
  
  if(e.value.trim().length === 0){
    e.classList.add("campoErrorValidacion");
    e.nextElementSibling.classList.add("mensajeErrorValidacion");
    e.nextElementSibling.innerText = `Debe completar el campo ${message}`;
  }
  else{
    e.value = e.value.trim();
    e.classList.remove("campoErrorValidacion");
    e.nextElementSibling.classList.remove("mensajeErrorValidacion");
    e.nextElementSibling.innerText = `\u00A0`;
  }
}

/*  Función para completado de items en select id="dropDownProvincias" */
function cargaProvinciasDropDown(dropDownElement){
  for(indice in provinciasArgentinas){

    let option = document.createElement('OPTION');

    option.setAttribute('value',indice);

    const nombreProvincia = document.createTextNode(provinciasArgentinas[indice]);
    option.appendChild(nombreProvincia);

    dropDownElement.appendChild(option);
    console.log(option);
  }
}

function checkSectionsLength(){
  const chkboxList = document.querySelectorAll('.newsLetterSection input:checked');
  if(chkboxList.length > 0){
    return true;
  }
  return false;
}


// Newsletter Form Validation ----------------------------------------------------------------------

newsletterForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log(e);
  checkSectionsLength();
  let submitFlag = true;

  if(nameNewsletterInput.value.trim().length === 0){
    submitFlag = false;
    nameNewsletterInput.classList.add("campoErrorValidacion");
    nameNewsletterInput.nextElementSibling.classList.add("mensajeErrorValidacion");
    nameNewsletterInput.nextElementSibling.innerText = `Debe completar el campo`;
  }

  if(!regExpEmail.test( emailNewsletterInput.value)){
    submitFlag = false;
    emailNewsletterInput.classList.add("campoErrorValidacion");
    emailNewsletterInput.nextElementSibling.classList.add("mensajeErrorValidacion");
    emailNewsletterInput.nextElementSibling.innerText = `La dirección de email ingresada no es válida`;
  }

  if(dropDownProvincias.value === ""){
    submitFlag = false;
    dropDownProvincias.classList.add("campoErrorValidacion");
    dropDownProvincias.nextElementSibling.classList.add("mensajeErrorValidacion");
    dropDownProvincias.nextElementSibling.innerText = `Seleccione una provincia`;
  }

  if(!checkSectionsLength()){
    submitFlag = false;
    const chkboxSpan = document.querySelector('.newsLetterSection').children[document.querySelector('.newsLetterSection').children.length - 1];
    chkboxSpan.classList.add("mensajeErrorValidacion");
    chkboxSpan.innerText = `Seleccione al menos una sección`;
  }
  else{
    const chkboxSpan = document.querySelector('.newsLetterSection').children[document.querySelector('.newsLetterSection').children.length - 1];
    chkboxSpan.classList.remove("mensajeErrorValidacion");
    chkboxSpan.innerText = `\u00A0`;
  }

  if(submitFlag){
    localStorage.setItem('newsletter', 'false');
    bodyWeb.style.overflowY = "scroll";
    bodyWeb.style.zIndex = "-999";
    e.target.submit();
  }

});

// End Newsletter Form Validation ------------------------------------------------------------------