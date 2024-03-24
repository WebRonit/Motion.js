var text = document.querySelectorAll(".animate-text");
text.forEach((text) => {
       var textToAnim = text.innerText;
       var delay = 100;
       let i = 0;
       text.textContent = '';

       const textAnim = setInterval(function(){

              if(i < textToAnim.length){ 
                 text.textContent += textToAnim.charAt(i);
                 i++;
              }

              else{
                 clearInterval(textAnim);
              }

       }, delay)
});



var hoverBoxes = document.querySelectorAll(".hover-3d");
hoverBoxes.forEach((hoverBoxes) => {
   
    let height = hoverBoxes.clientHeight;
    let width = hoverBoxes.clientWidth;

    hoverBoxes.style.transition = "transform .1s";

    hoverBoxes.addEventListener('mousemove', (e) => {
   
        var posX = e.layerX;
        var posY = e.layerY;
    
        var rx = Math.floor( 25 * ((posX - width / 2) / width));
        var ry = Math.floor( -25 * ((posY - height / 2) / height));
    
        var boxParent = hoverBoxes.parentNode;
        boxParent.style.perspective = "800px"
        hoverBoxes.style.transform = "rotateX(" + ry + "deg) rotateY(" + rx + "deg)";

        hoverBoxes.addEventListener('mouseout', () => {
             hoverBoxes.style.transform = "rotateX(0deg) rotateY(0deg)"
        });
   
    });
})

