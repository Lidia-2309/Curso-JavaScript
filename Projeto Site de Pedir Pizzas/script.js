let cart =[];
let modalQt = 1;
let modalKey = 0;

pizzaJson.map((item,index) =>{

  let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true);

  pizzaItem.setAttribute('data-key', index);
  pizzaItem.querySelector('.pizza-item--img img').src = item.img;
  pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
  pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
  pizzaItem.querySelector('.pizza-item--price').innerHTML = 'R$ '+item.price.toFixed(2);
  
  pizzaItem.querySelector('a').addEventListener('click', 
  (
    eventoDeClique)=>{
      eventoDeClique.preventDefault();

      let key = eventoDeClique.target.closest('.pizza-item').getAttribute('data-key');
      modalQt = 1;
      modalKey = key;

      document.querySelector('.pizzaBig img').src = pizzaJson[key].img;
      document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
      document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
      document.querySelector('.pizzaInfo--actualPrice').innerHTML = 'R$ '+item.price.toFixed(2);
      document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
      document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex)=>{
        if(sizeIndex == 2){
          size.classList.add('selected');
        }
        size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
      });
    

      document.querySelector('.pizzaWindowArea').style.opacity = 0;
      document.querySelector('.pizzaWindowArea').style.display = 'flex';
      setTimeout(() =>{
      document.querySelector('.pizzaWindowArea').style.opacity = 1;
      },200);
    });

  document.querySelector('.pizza-area').append(pizzaItem);
});

function closeModal(){
  document.querySelector('.pizzaWindowArea').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('.pizzaWindowArea').style.display = 'none';
  },500);
}

document.querySelectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
  item.addEventListener('click',closeModal);
});

document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', () =>{
  if(modalQt > 1){
    modalQt--;
    document.querySelector('.pizzaInfo--qt').innerHTML = modalQt;
  }
});

document.querySelector('.pizzaInfo--qtmais').addEventListener('click', () =>{
    modalQt++;
    document.querySelector('.pizzaInfo--qt').innerHTML = modalQt;
  
});

document.querySelectorAll('.pizzaInfo--size').forEach((size, sizeIndex)=>{
  size.addEventListener('click', (eventoDeClique) =>{
    document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
    size.classList.add('selected');
  });
});

document.querySelector('.pizzaInfo--addButton')
.addEventListener('click', ()=>{

  let size = document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key');

  let indentifier = pizzaJson[modalKey].id+'@'+size;
  
  let key = cart.findIndex((item)=>item.indentifier == indentifier);
 
  if(key > -1){
    console.log("aqui")
      cart[key].qt += modalQt;
  }
  else{  
    console.log(cart);
    cart.push({
    indentifier,
    id: pizzaJson[modalKey].id,
    size,
    qt:modalQt
    });
    console.log(cart);
  }

  closeModal();
  updateCart();
});

function updateCart(){
  if (cart.length > 0){
    console.log("S");
    document.querySelector('aside').classList.add('show');
  }
  else{
    document.querySelector('aside').classList.remove('show');
  }
}
 