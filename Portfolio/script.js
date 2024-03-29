let mobileMenuUl = document.querySelector('.mobileMenuUl');
let bar = document.querySelector('.bar');
let cross = document.querySelector('.cross');

bar.addEventListener('click', ()=>{
    bar.style.display = 'none';
    cross.style.display = 'block';
    mobileMenuUl.style.display = 'block';
})

cross.addEventListener('click', ()=>{
    console.log('clicked on cross');
    cross.style.display= 'none';
    bar.style.display = 'block';
    mobileMenuUl.style.display = 'none';
})


