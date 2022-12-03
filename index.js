const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", function(heartEvent) {animate(heartEvent)});
// let the effect works on phone
document.addEventListener('touchstart', function(heartEvent) {animate(heartEvent)});        
document.addEventListener('touchmove', function(heartEvent) {animate(heartEvent)});


function animate(event){
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanE1 = document.createElement("span");
    
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