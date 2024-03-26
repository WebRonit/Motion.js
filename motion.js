
//     Text animation

var text = document.querySelectorAll(".motion-animate-text");
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


// 3d hover effect

var hoverBoxes = document.querySelectorAll(".motion-hover-3d");
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

//   Ripple effect

var rippleBoxes = document.querySelectorAll('.motion-ripple-effect');

rippleBoxes.forEach((rippleBox) => {
    rippleBox.addEventListener('click', () => {

        rippleBox.style.overflow = "hidden";
        rippleBox.style.position = "relative";

        const circle = document.createElement("div");
        const diameter = Math.max(rippleBox.clientWidth, rippleBox.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rippleBox.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - rippleBox.offsetTop - radius}px`;
        circle.classList.add("ripple");
        
        const ripple = rippleBox.getElementsByClassName("ripple")[0];

         if(ripple) {
          ripple.remove();
        }
        
        rippleBox.appendChild(circle);

    });
});





