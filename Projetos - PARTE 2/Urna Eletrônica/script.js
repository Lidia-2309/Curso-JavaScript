// Definições das variáveis que usam o código do HTML

let seuVotopara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector(".d-1-3");


let etapaAtual = 0;
let numero = '';
// Funções

function comecarEtapa(){
  let etapa = etapas[etapaAtual];

  let numeroHtml = '';

  seuVotopara.style.display ='none';
  cargo.innerHTML = etapa.titulo;
  descricao.innerHTML = '';
  aviso.style.display = 'none';
  lateral.innerHTML = '';
  numeros.innerHTML = numeroHtml;
}

function clicou(n){
  alert("Clicou em "+n);
}

function branco(){
  alert("Clicou em BRANCO");
}

function corrige(){
  alert("Clicou em CORRIGE");
}

function confirma(){
  alert("Clicou em CONFIRMA");
}

comecarEtapa();