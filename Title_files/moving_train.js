        //The code that is used to move the train
        var imgObj = null;
        var animate ;
        var stopped = false;
        var target_stop = 600;

        //Initialization and cloning of child objects
        function init() {
           imgObj = document.getElementById('myImage');
           imgObj.style.position= 'relative';
           imgObj.style.left = '0px';
           imgObj2 = document.getElementById('myImage2');
           imgObj2.style.position= 'relative';
           imgObj2.style.left = '0px';
           moveRight();
        }
        //Actual function that moves the objects
        function moveRight() {
            //Get my train position
            var rect = imgObj.getBoundingClientRect();

           //"Real" movement
           var stop_dist = target_stop - rect.right;
           stop_dist = Math.abs(stop_dist);

           if (stop_dist < 400){
               var vel = stop_dist/100;
               if (vel < 1.5){
                    vel = 1.5;
               }
               console.log(vel);
               imgObj.style.left = parseInt(imgObj.style.left) + vel + 'px';
               imgObj2.style.left = parseInt(imgObj2.style.left) + vel + 'px';
           }else{

           imgObj.style.left = parseInt(imgObj.style.left) + 4 + 'px';
           imgObj2.style.left = parseInt(imgObj2.style.left) + 4 + 'px';
           }


           //If we get off the screen, jump back to the main screen
           if (rect.right > 1920){
                //This is really ugly
                stopped = false;
                imgObj.style.left = parseInt(imgObj.style.left) + -2400 + 'px';
                imgObj2.style.left = parseInt(imgObj2.style.left) + -2400 + 'px';
           }

           if (rect.right > target_stop && rect.right < target_stop + 10 && stopped == false){
               animate = setTimeout(moveRight,5000);
               stopped = true;
               //alert("Nani");
           }
           else{
                animate = setTimeout(moveRight,20);    // call moveRight in 20msec
           }
        }
		window.onload = init;