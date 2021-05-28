'use strict';

/*const page = document.getElementById('page');
const botao = document.querySelector('button');

function changeBackground() {
  page.href = 'pagina2.css';
  console.log('background');
}

botao.addEventListener('click', changeBackground);
*/
const toggleOff = document.querySelector('.fa-toggle-off');
const toggleOn = document.querySelector('.fa-toggle-on');
// Função para Ativar o botão de Linguagem (English)
function togOn() {
  toggleOff.style.display = 'none';
  toggleOn.style.display = 'inline-block';
  toggleOn.style.color = 'white';
  document.getElementById('en').style.color = 'white';
}
toggleOff.addEventListener('click', togOn);
// Função para desativar o botão de linguagem (English)
function togOff() {
  toggleOn.style.display = 'none';
  toggleOn.style.color = 'rgb(0, 162, 255)';
  toggleOff.style.display = 'inline-block';
  document.getElementById('en').style.color = 'rgb(0, 162, 255)';
}
toggleOn.addEventListener('click', togOff);
