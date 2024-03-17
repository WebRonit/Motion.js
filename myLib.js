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


 