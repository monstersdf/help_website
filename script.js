// alert(1);
// slecting burger icon 
const burger = document.querySelector('.burger')
console.log(burger);
const header = document.querySelector('.right-sec')

burger.addEventListener('click', ()=>{
    // console.log();
header.classList.toggle('active')
});