const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", e => {
    let xPos = e.offsetX;
    let yPos = e.offsetY;
    animate(e, xPos, yPos);
});

bodyE1.addEventListener('touchmove', e =>{
    // console.log("move");
    // console.log(e.targetTouches[0]["pageX"]);
    // console.log(e.touches)
    // let xPos = e.targetTouches[0]["pageX"];
    // let yPos = e.targetTouches[0]["pageY"];
    let xPos = e.touches[0]["pageX"];
    let yPos = e.touches[0]["pageY"];
    animate(e, xPos, yPos);    
});


function animate(event, xPos, yPos){
    const spanE1 = document.createElement("span");

    // console.log("xpos: ", xPos);
    
    spanE1.style.left = xPos + "px";
    spanE1.style.top = yPos + "px";
    
    const size = Math.random() * 100;   
    spanE1.style.width = size + "px";
    spanE1.style.height = size + "px";
    bodyE1.appendChild(spanE1);
    
    setTimeout(()=>{
        spanE1.remove();
    }, 3000);
}