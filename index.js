let leftButton1 = document.getElementById("inbox")
let leftButton2 = document.getElementById("stared")
let leftButton3 = document.getElementById("snoozed")
let leftButton4 = document.getElementById(" sentt")
let leftButton5 = document.getElementById(" draft")
let middlebox1 = document.getElementById('middlebox1');
let middlebox2 = document.getElementById('middlebox2');
let middlebox3 = document.getElementById('middlebox3');
let middlebox4 = document.getElementById('middlebox4');
let middlebox5 = document.getElementById('middlebox5');


        function draft(params) {
            middlebox5.style.visibility = "visible";
             middlebox5.style.display = "block";
                
            middlebox4.style.visibility = "hidden";
            middlebox4.style.display = "none";
            middlebox3.style.visibility = "hidden";
            middlebox3.style.display = "none";
            middlebox2.style.display = "none";
            middlebox2.style.display = "none";
            middlebox1.style.display = "none";
            middlebox1.style.display = "none";
        }
        function sent(params) {
            middlebox5.style.visibility = "hidden";
             middlebox5.style.display = "none";
            middlebox4.style.visibility = "visible";
            middlebox4.style.display = "block";
            middlebox3.style.visibility = "hidden";
            middlebox3.style.display = "none";
            middlebox2.style.display = "none";
            middlebox2.style.display = "none";
            middlebox1.style.display = "none";
            middlebox1.style.display = "none";
        }
leftButton3.addEventListener("click", function name(params) {
        
        } );

        function snoozed(params) {
            console.log('kooo');
            middlebox1.style.visibility = "hidden";
            middlebox1.style.display = "none";
           middlebox2.style.visibility = "hidden";
           middlebox2.style.display = "none";    
           middlebox3.style.visibility = "visible";
           middlebox3.style.display = "block";
           middlebox4.style.visibility = "hidden";
           middlebox4.style.display = "none";
           middlebox5.style.visibility = "hidden";
           middlebox5.style.display = "none";
        }


 function started(params) {
    console.log('kooo');
    middlebox1.style.visibility = "hidden";
    middlebox1.style.display = "none";
   middlebox2.style.visibility = "visible";
   middlebox2.style.display = "block";
   middlebox3.style.visibility = "hidden";
   middlebox3.style.display = "none";
   middlebox4.style.visibility = "hidden";
   middlebox4.style.display = "none";
   middlebox5.style.visibility = "hidden";
   middlebox5.style.display = "none";
 }

 function inbox(params) {
    middlebox1.style.visibility = "visible";
    middlebox1.style.display = "block";
   middlebox2.style.display = "none";
   middlebox2.style.display = "none";
   middlebox3.style.visibility = "hidden";
   middlebox3.style.display = "none";
   middlebox4.style.visibility = "hidden";
   middlebox4.style.display = "none";
   middlebox5.style.visibility = "hidden";
   middlebox5.style.display = "none";
 }


//   leftButton1.addEventListener("click", function name(params) {
//    console.log('kooo');
//    middlebox1.style.visibility = "visible";
//    middlebox1.style.display = "block";
//    middlebox2.style.display = "none";
//    middlebox2.style.display = "none";
//    console.log('wieourweioru');
//    } )
//   leftButton1.addEventListener("click", function name(params) {
//    console.log('kooo');
//    middlebox1.style.visibility = "visible";
//    middlebox1.style.display = "block";
//    middlebox2.style.display = "none";
//    middlebox2.style.display = "none";
//    console.log('wieourweioru');
//    } )
