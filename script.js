const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    }) 
}
if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    }) 
}
function toggleHide(){
  let btn = document.getElementById('login-btn'); 
  let form = document.getElementById('form');
  if(form.style.display != 'none'){
    form.style.display = 'none';
  }
  else{
    form.style.display = 'block';
  }
}
// var form = document.getElementById('form');
var create = document.getElementById('create');
var Reset = document.getElementById('Reset');

function showReset() {
  form.style.display = "none"
  Reset.style.display = "block"
}
// function hideReset() {
//   form.style.display = "block"
//   create.style.display = "none"
// }
function showCreate() {
  form.style.display = "none"
  create.style.display = "block"
}
function hideCreate() {
  form.style.display = "block"
  create.style.display = "none"
}
function hideReset() {
  form.style.display = "block"
  Reset.style.display = "none"
}
