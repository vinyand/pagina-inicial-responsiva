// esse javas aqui faz o menu aparecer do lado da tela os ifs troc imagens

var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function() {
    if (iconMenu.getAttribute("src") == 'imagens/imagens/menu.png') {
        iconMenu.setAttribute("src", "imagens/imagens/close.png");

    } else {
        iconMenu.setAttribute("src", "imagens/imagens/menu.png");
    }

    menu.classList.toggle('active');
});