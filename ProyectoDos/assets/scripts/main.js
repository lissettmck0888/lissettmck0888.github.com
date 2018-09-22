
let closes = document.querySelectorAll(".close");
let content = document.querySelector(".content");

closes.forEach(function(close) {
    close.addEventListener('click',function (ev) {
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("fadeIntRight");
        content.classList.add("animated");
        content.classList.add("fadeOutLeft");
        setTimeout(()=>{
            location.href="../index.html";
        },1000);
    });
})

let starGroupArray = document.querySelectorAll(".star-group");
let starsValue=[];
starGroupArray.forEach(function (element, i) {
    console.log(i);
    console.log(element);
    let stars = element.querySelectorAll(".fa-star");
    stars.forEach(function (element, j) {
        console.log(element);
        element.addEventListener('mouseover',function () {
            pintarEstrellas(stars,j);
        });
        element.addEventListener('click',function () {
            pintarEstrellas(stars,j);
            starsValue[i]=j;
        });
        element.addEventListener('mouseout',function () {
            pintarEstrellas(stars,starsValue[i]);
        })
    });
});


function pintarEstrellas(stars, indiceEstrella) {
    for(i=0;i<stars.length;i++){
        if(i<=indiceEstrella){
            stars[i].classList.remove("far");
            stars[i].classList.add("fas");
        }else {
            stars[i].classList.remove("fas");
            stars[i].classList.add("far");
        }
    }
}
