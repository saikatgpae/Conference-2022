document.querySelector('.header').addEventListener('click',()=>{

    //Creating the X sumbol by changing the .bar div position.
    document.querySelector('#bar1').classList.toggle('bar1-clicked');
    document.querySelector('#bar2').classList.toggle('bar2-clicked');
    document.querySelector('#bar3').classList.toggle('bar3-clicked');

    //poping up the mobile menu
    document.querySelector('.mobile-menu').classList.toggle('mobile-menu-trans')  
});


 //closing the popup menu onclicking the popup menu items

const menu = Array.from(document.querySelectorAll('.menu a'));
menu.forEach((link)=>{link.addEventListener('click',()=>{
    document.querySelector('.mobile-menu').classList.remove('mobile-menu-trans');
    document.querySelector('#bar1').classList.remove('bar1-clicked');
    document.querySelector('#bar2').classList.remove('bar2-clicked');
    document.querySelector('#bar3').classList.remove('bar3-clicked');

})});


//activating the dropdown menu
const dropDown = document.querySelector('.dropdown-arrow');
dropDown.addEventListener('click',()=>{
    document.querySelector('.dropdown').classList.toggle('dropdown-dispaly');
    document.querySelector('.dropdown-arrow').classList.toggle('dropdown-arrow-reverse');
});