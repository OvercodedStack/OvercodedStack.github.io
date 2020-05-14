function reload_funt() {
    location.reload();
 }

 function move_to_gallery(){
    window.location.pathname = "Gallery.html";
  }
 function move_to_game(){
    window.location.pathname = "game.html";
  }
 function move_to_index(){
    window.location.pathname = "";
  }
 function move_to_Aboutus(){
    window.location.pathname = "Aboutus.html";
  }
function move_to_contactUs(){
    window.location.pathname = "Contactus.html";


}



function stop() {
       //clearTimeout(animate);
       //imgObj.style.left = '0px';
       //imgObj2.style.left = '0px';
 }

 function stop_at_point(value){
       imgObj.style.left = value.toString() + 'px';
       imgObj2.style.left = value.toString() + 'px';
 }