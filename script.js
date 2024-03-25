
let img1 = document.getElementById('img1')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    img1.style.top = value * 0.75 +'px'/* change the top to any direction if thats needed*/
})