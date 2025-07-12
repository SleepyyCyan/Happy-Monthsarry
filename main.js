let passwordInput = document.querySelector('.passwordInput');
let btnLogin = document.querySelector('.btnLogin');
let card = document.querySelector('.card');
let loginPage = document.querySelector('.loginPage');
let headText = document.querySelector('.headText');
let message = document.querySelector('.message');
let nextBtn = document.querySelector('.nextBtn');
let popUpBtn = document.querySelector('.popUpBtn');
let popUpMsg = document.querySelector('.popUpMsg');
let flowerImg = document.querySelector('.flowerImg');

let m1 = document.querySelector('.m1');
let m2 = document.querySelector('.m2');
let m3 = document.querySelector('.m3');
let m4 = document.querySelector('.m4');
let m5 = document.querySelector('.m5');
let m6 = document.querySelector('.m6');
let m7 = document.querySelector('.m7');
let m8 = document.querySelector('.m8');
let m9 = document.querySelector('.m9');
let m10 = document.querySelector('.m10');

let storePassword = '05102024'

btnLogin.addEventListener('click', () => {
  password = passwordInput.value;
  
  if (password == storePassword) {
    passwordInput.value = '';
    loginPage.style.display = 'none';
    card.style.display = 'flex';
    card.style.animationPlayState = 'running';
    
    setTimeout(() => {
      headText.style.display = 'flex';
      message.style.display = 'flex';
      nextBtn.style.display = 'flex';
      
    }, 350)
  }
  else {
    passwordInput.style.border = '1px solid red';
    passwordInput.value = '';
  }
});
let clickCount = 0;
const elements = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10];
popUpBtn.addEventListener('click', () => {
  if (clickCount < elements.length) {
    elements[clickCount].style.opacity = '1';
    clickCount++;
  }
  else {
    popUpMsg.style.display = 'none'
    flowerImg.style.display = 'flex'
  }
});

nextBtn.addEventListener('click', () => {
  card.style.display = 'none';
  popUpMsg.style.display = 'flex';
});
