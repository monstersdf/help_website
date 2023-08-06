// alert(1);
// slecting burger icon 
const burger = document.querySelector('.burger')
console.log(burger);
const header = document.querySelector('header')

burger.addEventListener('click', ()=>{
    // console.log();
header.classList.toggle('active')
});