var balls = document.getElementsByClassName('ball');

    document.onmousemove = (event) => {
        
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';
        
    for (let i=0;i<2;i++){

    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};

function borderChange(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("ball").style.borderColor = "#" + randomColor;
    document.getElementById("ball2").style.borderColor = "#" + randomColor;
}
function changeColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    var element = document.getElementById("circle");
    document.body.style.backgroundColor = "#" + randomColor2;
    element.style.backgroundColor = "#" + randomColor;
            
}