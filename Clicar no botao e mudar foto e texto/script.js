function trocarImagem(filename,animalName){
  document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
  pegarAnimal(animalName);
}

function pegarAnimal(nome){
  console.log(nome);
  alert("O animal é: " + nome);
}