function clicar(){
  let imagem = document.getElementById("images").files[0];

  let img = document.createElement('img');
  img.src = URL.createObjectURL(imagem);
  img.width = 200;

  document.getElementById("area").appendChild(img);
}