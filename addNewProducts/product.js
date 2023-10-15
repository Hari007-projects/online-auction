




function hari()
{   
  const category = document.querySelector('#inputState1').value;
  const err1=document.getElementById("error1")
   if(category==""){
    err1.innerHTML=" Name is required"
  }
else if(category.length<5){
  err1.innerHTML="The name must be 5 characters"
 }
    
    const password = document.querySelector('#inputPassword').value;
    const err2=document.getElementById("error2")
   
    var passw=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var passre= password.match( passw )
    if( password === ''){
            //   return false;
               
                err2.innerHTML="Password is required"
            }
            else if(!passre ){
                // return false;
                
                err2.innerHTML= " The password meets the minimum length requirement and contains at least 1 upper case letter, 1 lower case letter,1 number, and 1 special character"
            }
            else{
                err2.innerHTML="Password is  successful "
            }
            const cpassword = document.querySelector('#inputCPassword').value;
            const err3=document.getElementById("error3")
            if(cpassword === ''){
                // return false;
                
                err3.innerHTML="Confirm password is required"
            }
            else if(cpassword!==passre){
                // return false;
               
                err3.innerHTML="Password does not match"
            }
            else{
               
                err3.innerHTML="Confirm password is successful"
            }
        
            const name = document.querySelector('#inputFName1').value;
            const err4=document.getElementById("error4")
             if(name==""){
                err4.innerHTML=" Name is required"
            }
          else if(name.length<5){
            err4.innerHTML="The name must be 5 characters"
           }
           
            else if (name.length > 15){
                err4.innerHTML="Name length must not exceed 15 characters"
            }else{
                err4.innerHTML="The name is successful "
            }
            const date = document.querySelector('#inputLName2').value;
            const err10=document.getElementById("error10")

            if (date =="") {
                err10.innerHTML="You need to enter a date";
            } else {
                console.log(date);
            }
            const nation= document.querySelector('#inputAddress1').value
            const err5=document.getElementById("error5")

            if (nation=="") {
                err5.innerHTML="Please enter your nationality."
            } else if(nation.length<4) {
                err5.innerHTML="The nationality must be 4 characters."
            } else if(nation.length>20){
                err5.innerHTML="The nationality length must not exceed 20 characters."
            }else{
                err5.innerHTML="The nationality is successfully recorded."
            }

            const add= document.querySelector('#inputAddress2').value
            const err6=document.getElementById("error6")

            if (add=="") {
                err6.innerHTML="you need to enter address"
            } else if(add.length<15) {
                err6.innerHTML="address must be 15charactrs"
            } else if(nation.length>50){
                err6.innerHTML="address length must not exceed 40 characters"
            }else{
                err6.innerHTML="The address is successfully recorded."
            }
            var mobile=document.getElementById('inputMobile')
            var err12=document.getElementById('error12')
            var phoneno = /^\d{10}$/;
           var mob = mobile.value.match(phoneno)
            if(mob){
                err12.innerHTML="The phone number is successfully recorded."
            }else{
                err12.innerHTML=" not vaild"
            }
                
           
           
            var fileInput = document.getElementById('inputPhoto');
            const err7=document.getElementById("error7")
            var filePath = fileInput.value;
            var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if(!allowedExtensions.exec(filePath)){
                err7.innerHTML="Please upload a file with the extensions .jpeg/.jpg/.png/.gif only."
                fileInput.value = '';
                return false;
            }else{
                //Image preview
                if (fileInput.files && fileInput.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        console.log('<img src="'+e.target.result+'"/>') ;
                        err7.innerHTML="The image upload is successful."
                    };
                    reader.readAsDataURL(fileInput.files[0]);
                }
            }

            var fileInput1 = document.getElementById('inputZip1');
            const err8=document.getElementById("error8")
            var filePath1= fileInput1.value;
            var allowedExtensions1 = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if(!allowedExtensions1.exec(filePath1)){
                err8.innerHTML="Please upload a file with the extensions .jpeg/.jpg/.png/.gif only."
                fileInput1.value = '';
                return false;
            }else {
                //Image preview
                if (fileInput1.files && fileInput1.files[0]) {
                    var reader1= new FileReader();
                    reader1.onload = function(e) {
                        console.log('<img src="'+e.target.result+'"/>') ;
                        err8.innerHTML="The Aadhar front image upload is successful."
                    };
                    reader1.readAsDataURL(fileInput1.files[0]);
                }
            }
           
            var fileInput2 = document.getElementById('inputZip2');
            const err9=document.getElementById("error9")
            var filePath2= fileInput2.value;
            var allowedExtensions2 = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
            if(!allowedExtensions2.exec(filePath2)){
                err9.innerHTML="Please upload a file with the extensions .jpeg/.jpg/.png/.gif only."
                fileInput2.value = '';
                return false;
            }else {
                //Image preview
                if (fileInput2.files && fileInput2.files[0]) {
                    var reader2= new FileReader();
                    reader2.onload = function(e) {
                        console.log('<img src="'+e.target.result+'"/>') ;
                        err9.innerHTML="The Aadhar back image upload is successful."
                    };
                    reader2.readAsDataURL(fileInput2.files[0]);
                }
            }
          


            var checkbox=document.getElementById('gridCheck')
            var err11=document.getElementById('error11')
             if(checkbox.checked){
                err11.innerHTML="your not accept the terms and condition"
             }else{
                err11.innerHTML="your  accept the terms and condition"
             }
        }

       

      
      
       
      
// form.addEventListener('submit',(e)=>{
    
//     if(!validateInputs()){
//         e.preventDefault();
//     }
// })

// function validateInputs(){
//     const usernameVal = username.value.trim()
//     const emailVal = email.value.trim();
//     const passwordVal = password.value.trim();
//     const cpasswordVal = cpassword.value.trim();
//     let success = true

//     if(usernameVal===''){
//         success=false;
//         setError(username,'Username is required')
//     }
//     else{
//         setSuccess(username)
//     }

//     if(emailVal===''){
//         success = false;
//         setError(email,'Email is required')
//     }
//     else if(!validateEmail(emailVal)){
//         success = false;
//         setError(email,'Please enter a valid email')
//     }
//     else{
//         setSuccess(email)
//     }

//     if(passwordVal === ''){
//         success= false;
//         setError(password,'Password is required')
//     }
//     else if(passwordVal.length<8){
//         success = false;
//         setError(password,'Password must be atleast 8 characters long')
//     }
//     else{
//         setSuccess(password)
//     }

//     if(cpasswordVal === ''){
//         success = false;
//         setError(cpassword,'Confirm password is required')
//     }
//     else if(cpasswordVal!==passwordVal){
//         success = false;
//         setError(cpassword,'Password does not match')
//     }
//     else{
//         setSuccess(cpassword)
//     }

//     return success;

// }
// //element - password, msg- pwd is reqd
// function setError(element,message){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = message;
//     inputGroup.classList.add('error')
//     inputGroup.classList.remove('success')
// }

// function setSuccess(element){
//     const inputGroup = element.parentElement;
//     const errorElement = inputGroup.querySelector('.error')

//     errorElement.innerText = '';
//     inputGroup.classList.add('success')
//     inputGroup.classList.remove('error')
// }

// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };







