// document.cookie="name=khale";


function CREATOR () {
console.log("From ITI STUSEND, the BY 💚💛 Mohamed Awaad and 🆗 Khaled Ram, thank you Awaad and thank ITI " );
 var x="dfdf"
 return x
}

function ItiAllMetiod(){
console.log("CREATOR ()");
console.log("ItiAllCookiy ()");
console.log("ItiDeletAllCookiy ()");
console.log("ItiGetcookey ()");
 
}
CREATOR ()
function ItiSetcookie(key,value,exdate) {
    var date= new Date(exdate);
    document.cookie= key+"="+value+";expires="+date+";";
}
// setcookie("color","fdf","2022-10-20")



function ItiAllCookiy( ) {

    var cookie = document.cookie.split(";");
    var cookieArray = [];
  
    for (const i of cookie) {
      var x = i.split("=");
      cookieArray[x[0].trim()] = x[1];
    }

    return cookieArray    
}



function ItiDeletAllCookiy( ) {

  
    for (const i of cookie) {
      var x = i.split("=");
      allco=cookieArray[x[0].trim()] = x[0]
console.log(  document.cookie= allco+"=;expires=") }

    return cookieArray    
}


 



 
 ///////////
 
// for (const key in allCookiy()) {
//     console.log(key);
//     console.log(allCookiy()[key]);

    
// }

function ItiSerch(item) {
   return allCookiy().hasOwnProperty(item)
        
    }

    function ItiDelet(delitem) {

        if (serch(delitem)) {
            document.cookie= delitem+"=;expires=;";
            
        } else {
                throw(" its not fond")

        }
        
    }

    function ItiGetcookey(key) {
            if (serch(key) ) {
                return  allCookiy()[key]

            } else {
                throw(" not  fond key")
            }
         }
     
