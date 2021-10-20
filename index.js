let images = ["./img/img1.jpg","./img/img2.jpg","./img/img3.jpg","./img/img4.jpg"]
let i=0; 
let dots = document.getElementsByClassName("radioClass")
setInterval(() => {
    console.log(i);
    document.getElementById("bg-img1").src = images[i];
    dots[i].setAttribute('id','cl-1')
    dots[i].style.backgroundColor = '#fff';
    i=i+1;
    if (i>3){
        i=0;
    }
}, 3000);

var img = document.getElementsByClassName("pr-img");