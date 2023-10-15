function adminlogin() {  
    const emailad = document.querySelector('#inputFName').value;
    const adderrror1=document.getElementById("aderror1")

    var emailregad=/^[a-z0-9._%+-]+@gmail\.com$/;
    const emailmatch=emailad.match(emailregad);
             
    if(  emailmatch){
        adderrror1.innerHTML="Email is successful"
    }else if(  emailad==""){
        adderrror1.innerHTML="Email is required"
    }else{
        adderrror1.innerHTML="Invalid email format"
    }






    var pw = document.getElementById("inputLName").value; 
    const adderrror2= document.getElementById("aderror2"); 
    
    var passw=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var passre= pw.match( passw )
    //  verifyPassword
    if( pw === ''){
        //   return false;
           
        adderrror2.innerHTML="Password is required"
        }
        else if(!passre ){
            // return false;
            
            adderrror2.innerHTML= " The password meets the minimum length requirement and contains at least 1 upper case letter, 1 lower case letter,1 number, and 1 special character"
        }else{
            adderrror2.innerHTML="Password is successful"
            
        }
  }  