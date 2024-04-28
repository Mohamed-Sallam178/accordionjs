
var iconMenu = document.querySelector('.mobile-menu i');
var mobileMenu = document.querySelector('.mobile-menu .show-menu');
var removeMenu = document.querySelector('.mobile-menu .show-menu .overlay');

iconMenu.onclick = function (){
    mobileMenu.style.display = 'block';
}

function reemove() {
    mobileMenu.style.display = 'none'; 
}
removeMenu.onclick = reemove;











// var accordion = document.querySelectorAll('.accordion');
var accordionContent = document.querySelectorAll('.accordion p');

// for(let i = 0; i < accordion.length; i++){
//     accordion[i].onclick = function () {
//     };
// }


function opeeeeeeeen(e) {
    e.style.background = 'red'
}
