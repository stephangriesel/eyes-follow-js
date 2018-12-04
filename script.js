var pupils = document.getElementsByClassName("pupil");
document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%";

    for(var i=0;i<2;i++){
        pupils[i].style.left = x;
    }
}