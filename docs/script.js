const toggleButton = document.getElementsByClassName('toggle')[0];
const navbarLinks = document.getElementsByClassName('menu');
toggleButton.addEventListener('click',function(){
    for (var i=0; i<navbarLinks. length; i++)
    navbarLinks[i].classList.toggle('active');
});