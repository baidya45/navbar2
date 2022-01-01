let ul = document.querySelector('.list');
let bar = document.querySelector('.menu');

bar.addEventListener('click',()=>{
    ul.classList.toggle('active');
})