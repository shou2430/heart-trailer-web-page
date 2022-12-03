const bodyE1 = document.querySelector("body");

bodyE1.addEventListener("mousemove", function(heartEvent) {animate(heartEvent)});
// let the effect works on phone
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    // if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) 
    // {/*most significant*/
    //     if ( xDiff > 0 ) {
    //         /* right swipe */ 
    //     } else {
    //         /* left swipe */
    //     }                       
    // } else {
    //     if ( yDiff > 0 ) {
    //         /* down swipe */ 
    //     } else { 
    //         /* up swipe */
    //     }                                                                 
    // }
    animate(evt);
    /* reset values */
    xDown = null;
    yDown = null;                                             
};



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