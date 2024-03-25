var text = document.querySelectorAll(".animate-text");
text.forEach((text) => {
       var textToAnim = text.innerText;
       var delay = text.dataset.speed || 100;
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
hoverBoxes.forEach((hoverBox) => {
   
    let height = hoverBox.clientHeight;
    let width = hoverBox.clientWidth;
    let tilt = hoverBox.dataset.tilt || 20;

    hoverBox.style.transition = "transform .1s";

    hoverBox.addEventListener('mousemove', (e) => {
   
        var posX = e.layerX;
        var posY = e.layerY;
    
        var rx = Math.floor( tilt * ((posX - width / 2) / width));
        var ry = Math.floor( -tilt * ((posY - height / 2) / height));
    
        var boxParent = hoverBox.parentNode;
        boxParent.style.perspective = "1000px"
        hoverBox.style.transform = "rotateX(" + ry + "deg) rotateY(" + rx + "deg)";

        hoverBox.addEventListener('mouseout', () => {
             hoverBox.style.transform = "rotateX(0deg) rotateY(0deg)"
        });
   
    });
});

