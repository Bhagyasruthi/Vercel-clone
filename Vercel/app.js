//getting elements by classname and performing Dom manipulation
var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (screenWidth < 800){
            this.classList.toggle("active");
            var content = this.nextElementSibling;
           if (content.style.display === "block") {
              content.style.display = "none";
           } 
            else {
              content.style.display = "block";
           }
        }
       
     }); 
    }
//we are adding event listener to the window every time its size changes
 window.addEventListener('resize', function () {
//window.location.reload();
//we are changing the state of all content class elements to block if their state is set to none
var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

 if(screenWidth > 800 ){
    var content = document.getElementsByClassName("content");
    var j;
    for(j =0; j<content.length; j++) {
       var contentItem = content[j];
      if(contentItem.style.display === "none"){
        contentItem.style.display = "block";
      }
    }
  }
});

      
