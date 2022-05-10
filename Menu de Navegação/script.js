function abrirmenu() {
  if (document.querySelector('#menu-area').classList.contains('menu-off')) {
  document.querySelector('#menu-area').classList.remove('menu-off');
  document.querySelector('#menu-area').classList.add('menu-on');
} else {
  document.querySelector('#menu-area').classList.remove('menu-on');
  document.querySelector('#menu-area').classList.add('menu-off')
}
}