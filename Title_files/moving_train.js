        //The code that is used to move the train
        var imgObj = null;
        var animate ;
        var stopped = false;
        var target_stop = 500;
        var train_cars = [];
        var slow_speed = 4
        var respawn_location = 5 * 400

        //Initialization and cloning of child objects
        function init() {
            imgObj = document.getElementById('myImage');
            imgObj.style.position= 'relative';
            imgObj.style.left = '0px';


            car1 = document.getElementById('trainCar1');
            car2 = document.getElementById('trainCar2');
            car3 = document.getElementById('trainCar3');
            // car4 = document.getElementById('trainCar4');


            car1.style.position = 'relative';
            car2.style.position = 'relative';
            car3.style.position = 'relative';
            // car4.style.position = 'relative';


            car1.style.left = '0px';
            car2.style.left = '0px';
            car3.style.left = '0px';

            imgObj2 = document.getElementById('myImage2');
            imgObj2.style.position= 'relative';
            imgObj2.style.left = '0px'

            moveRight();
        }
        //Actual function that moves the objects
        function moveRight() {

            //Get my train position;
            //Returns an object of the rectangle representing the image of the train.
            var rect = imgObj.getBoundingClientRect();

           //Set the stopping location as the location of the set destination with the right side of the image of the
            // first train engine.
           var stop_dist = target_stop - rect.right;
           //Get the floor of the decimal location.
           stop_dist = Math.abs(stop_dist);



           if (stop_dist < 350){
               //Change the speed depending on the proximaty to the end location
               var vel = stop_dist/50;
               if (vel < 1.5){
                    vel = 1.5;
               }
               if (vel > 4){
                   vel = 4.0;
               }

               // console.log(vel);
               imgObj.style.left = parseInt(imgObj.style.left) + vel + 'px';
               imgObj2.style.left = parseInt(imgObj2.style.left) + vel + 'px';
               // train_cars.forEach(move_cars(imgObj.style.left))

                car1.style.left = parseInt(imgObj2.style.left) + vel + 'px';
               car2.style.left = parseInt(imgObj2.style.left) + vel + 'px';
               car3.style.left = parseInt(imgObj2.style.left) + vel + 'px';


           }else{
               imgObj.style.left = parseInt(imgObj.style.left) + slow_speed + 'px';
               imgObj2.style.left = parseInt(imgObj2.style.left) + slow_speed + 'px';


               car1.style.left = parseInt(imgObj2.style.left) + slow_speed + 'px';
               car2.style.left = parseInt(imgObj2.style.left) + slow_speed + 'px';
               car3.style.left = parseInt(imgObj2.style.left) + slow_speed + 'px';
           }


           //If we get off the screen, jump back to the main screen
           if (rect.right > 1920){
                //This is really ugly
               //For some godforsaken reason this ACTUALLY MOVES ALL THE CARS
                stopped = false;
                imgObj.style.left = parseInt(imgObj.style.left) + -3400 + 'px';
                imgObj2.style.left = parseInt(imgObj2.style.left) + -3400 + 'px';
           }


           //Stops the animation
           if (rect.right > target_stop && rect.right < target_stop + 10 && stopped == false){
               animate = setTimeout(moveRight,5000);
               stopped = true;
               //alert("Nani");
           }
           else{
                animate = setTimeout(moveRight,20);    // call moveRight in 20msec
           }
        }

        // move_cars(value,dist)
        // {
        //
        // }



		window.onload = init;