// document.cookie="name=khale";




function setcookie(key,value,exdate) {
    var date= new Date(exdate);
    document.cookie= key+"="+value+";expires="+date+";";
}
// setcookie("color","fdf","2022-10-20")



function allCookiy( ) {

    var cookie = document.cookie.split(";");
    var cookieArray = [];
  
    for (const i of cookie) {
      var x = i.split("=");
      cookieArray[x[0].trim()] = x[1];
    }

    return cookieArray    
}



function deletallCookiy( ) {

  
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

function serch(item) {
   return allCookiy().hasOwnProperty(item)
        
    }

    function delet(delitem) {

        if (serch(delitem)) {
            document.cookie= delitem+"=;expires=;";
            
        } else {
                throw(" its not fond")

        }
        
    }

    function getcookey(key) {
            if (serch(key) ) {
                return  allCookiy()[key]

            } else {
                throw(" not  fond key")
            }
         }
     
