const navbar=document.querySelector('.navbar');
const navposition= navbar.offsetTop;


window.addEventListener('scroll',()=>{

  
if(window.pageYOffset >=navposition){

    navbar.classList.add('navbar-sticky');

}
else{

    navbar.classList.remove('navbar-sticky');
}

})