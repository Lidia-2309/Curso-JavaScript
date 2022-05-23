async function enviar(){
  let arquivo = document.getElementById('arquivo').files[0];

  let body = new FormData();
  body.append('titulo','bla bla bla');
  body.append('arquivo', arquivo);

  let upload = await fetch('https://www.meusite.com.br/upload',{
    method: 'POST',
    body: body,
    headers:{
        'Content-Type':'multipart/form-data'
    }
  });
}
