const arrowDown = document.getElementById("arrow-down");
const arrowUp = document.getElementById("arrow-up");

const description = document.getElementById("description");
const content = document.getElementById("content");

arrowDown.addEventListener("click",function(){
      
    description.style = 'display:inherit';
      content.style = 'top:3%';

});

arrowUp.addEventListener("click",function(){
      
    description.style = 'display:none';
      content.style = 'top:25%';

});



// <!-- <button class="btn btn-outline-primary arrow-up" type="button"><a href="#" id="arrow-up"><img
//                             src="https://img.icons8.com/ios-filled/50/000000/circled-chevron-down.png" /></a>
//                 </button> -->