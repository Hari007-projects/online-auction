function bidderlogin() {  
    const emailbd1 = document.querySelector('#inputFName1').value;
    const berror1=document.getElementById("bidderror1")

    var emailregbd1=/^[a-z0-9._%+-]+@gmail\.com$/;
    const emailmatch1=emailbd1.match(emailregbd1);
             
    if(emailmatch1){
        berror1.innerHTML="Email is valid"
    }else if( emailbd1== ""){
        berror1.innerHTML="Email is require"
    }else{
        berror1.innerHTML="Email is not valid"
    }
var pw=document.getElementById("inputLName1").value; 
    const berror2=document.getElementById("bidderror2")
    var passw=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var passre=  pw.match( passw)
    //  verifyPassword
    if( pw  === ''){
        //   return false;
           
        berror2.innerHTML="Password is required"
        }
        else if(!passre ){
            // return false;
            
            berror2.innerHTML= " The password meets the minimum length requirement and contains at least 1 upper case letter, 1 lower case letter,1 number, and 1 special character"
        }else{
            berror2.innerHTML="password is successful"
        }
  }  