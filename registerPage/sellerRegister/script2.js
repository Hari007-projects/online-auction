







// function seller()
// {   
    
//     const err1=document.getElementById("error1")
//      const email = document.querySelector('#inputEmail').value; 
//      var emailreg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

//     const emailmatch1=email.match(emailreg);
 
//     if(  emailmatch1){
//         err1 .innerHTML="Email is successful"
//     }else if( email ==""){
//         err1.innerHTML="Email is required"
//     }else{
//         err1.innerHTML="Invalid email format"
//     }
//     const password = document.querySelector('#inputPassword').value;
//     const err2=document.getElementById("error2")
   
//     var passw=  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     var passre= password.match( passw )
//     if( password === ''){
//             //   return false;
               
//                 err2.innerHTML="Password is required"
//             }
//             else if(!passre ){
//                 // return false;
                
//                 err2.innerHTML= " The password meets the minimum length requirement and contains at least 1 upper case letter, 1 lower case letter,1 number, and 1 special character"
//             }
//             else{
//                 err2.innerHTML="Password is  successful "
//             }
//             const cpassword = document.querySelector('#inputCPassword').value;
//             const err3=document.getElementById("error3")
//             if(cpassword === ''){
//                 // return false;
                
//                 err3.innerHTML="Confirm password is required"
//             }
//             else if(cpassword!==passre){
//                 // return false;
               
//                 err3.innerHTML="Password does not match"
//             }
//             else{
               
//                 err3.innerHTML="Confirm password is successful"
//             }
        
//             const name = document.querySelector('#inputFName').value;
//             const err4=document.getElementById("error4")
//              if(name==""){
//                 err4.innerHTML=" Name is required"
//             }
//           else if(name.length<5){
//             err4.innerHTML="The name must be 5 characters"
//            }
           
//             else if (name.length > 15){
//                 err4.innerHTML="Name length must not exceed 15 characters"
//             }else{
//                 err4.innerHTML="The name is successful "
//             }
//             const date = document.querySelector('#inputdob').value;
//             const err10=document.getElementById("error10")

//             if (date =="") {
//                 err10.innerHTML="You need to enter a date";
//             } else {
//                 console.log(date);
//             }
//             const distric= document.querySelector('#inputState').value
//             const err5=document.getElementById("error5")
//             console.log(distric)
//             if (distric == "Choose...") {
//                 err5.innerHTML = "Please select a district.";
//               }
              
//             const add= document.querySelector('#inputAddress').value
//             const err6=document.getElementById("error6")

//             if (add=="") {
//                 err6.innerHTML="you need to enter address"
//             } else if(add.length<15) {
//                 err6.innerHTML="address must be 15charactrs"
//             } else if(nation.length>50){
//                 err6.innerHTML="address length must not exceed 40 characters"
//             }else{
//                 err6.innerHTML="The address is successfully recorded."
//             }
//             var mobile = document.getElementById('inputMobile').value;

//             var err12=document.getElementById('error12')
//             var phoneno = /^\d{10}$/;
//            var mob = mobile.value.match(phoneno)
//             if(mob){
//                 err12.innerHTML="The phone number is successfully recorded."
//             }else{
//                 err12.innerHTML=" not vaild"
//             }
                
           
           
//             var fileInput = document.getElementById('inputPhoto');
//             const err7=document.getElementById("error7")
//             var filePath = fileInput.value;
//             var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
//             if(!allowedExtensions.exec(filePath)){
//                 err7.innerHTML="Please upload a file with the extensions .jpeg/.jpg/.png/.gif only."
//                 fileInput.value = '';
//                 return false;
//             }else{
//                 //Image preview
//                 if (fileInput.files && fileInput.files[0]) {
//                     var reader = new FileReader();
//                     reader.onload = function(e) {
//                         console.log('<img src="'+e.target.result+'"/>') ;
//                         err7.innerHTML="The Pan Card image upload is successful."
//                     };
//                     reader.readAsDataURL(fileInput.files[0]);
//                 }
//             }

//             var fileInput1 = document.getElementById('inputPhoto1');
//             const err8=document.getElementById("error8")
//             var filePath1= fileInput1.value;
//             var allowedExtensions1 = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
//             if(!allowedExtensions1.exec(filePath1)){
//                 err8.innerHTML="Please upload a file with the extensions .jpeg/.jpg/.png/.gif only."
//                 fileInput1.value = '';
//                 return false;
//             }else {
//                 //Image preview
//                 if (fileInput1.files && fileInput1.files[0]) {
//                     var reader1= new FileReader();
//                     reader1.onload = function(e) {
//                         console.log('<img src="'+e.target.result+'"/>') ;
//                         err8.innerHTML="The Bank Passbook Front Page upload is successful."
//                     };
//                     reader1.readAsDataURL(fileInput1.files[0]);
//                 }
//             }
           
//             var fileInput2 = document.getElementById('inputPhoto2');
//             const err9=document.getElementById("error9")
//             var filePath2= fileInput2.value;
//             var allowedExtensions2 = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
//             if(!allowedExtensions2.exec(filePath2)){
//                 err9.innerHTML="Please upload a file with the extensions .jpeg/.jpg/.png/.gif only."
//                 fileInput2.value = '';
//                 return false;
//             }else {
//                 //Image preview
//                 if (fileInput2.files && fileInput2.files[0]) {
//                     var reader2= new FileReader();
//                     reader2.onload = function(e) {
//                         console.log('<img src="'+e.target.result+'"/>') ;
//                         err9.innerHTML="Your image upload is successful."
//                     };
//                     reader2.readAsDataURL(fileInput2.files[0]);
//                 }
//             }
          
//             var fileInput3 = document.getElementById('inputAFP');
//             const err11=document.getElementById("error11")
//             var filePath3 = fileInput3.value;
//             var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
//             if(!allowedExtensions.exec(filePath3)){
//                 err11.innerHTML="Please upload a file with the extensions .jpeg/.jpg/.png/.gif only."
//                 fileInput3.value = '';
//                 return false;
//             }else{
//                 //Image preview
//                 if (fileInput3.files && fileInput3.files[0]) {
//                     var reader3 = new FileReader();
//                     reader3.onload = function(e) {
//                         console.log('<img src="'+e.target.result+'"/>') ;
//                         err11.innerHTML="Aadhar Front Page Image Upload is successful."
//                     };
//                     reader3.readAsDataURL(fileInput3.files[0]);
//                 }
//             }

//             var fileInput4 = document.getElementById('inputABP');
//             const err13=document.getElementById("error13")
//             var filePath4 = fileInput4.value;
//             var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
//             if(!allowedExtensions.exec(filePath4)){
//                 err13.innerHTML="Please upload a file with the extensions .jpeg/.jpg/.png/.gif only."
//                 fileInput4.value = '';
//                 return false;
//             }else{
//                 //Image preview
//                 if (fileInput4.files && fileInput4.files[0]) {
//                     var reader4 = new FileReader();
//                     reader4.onload = function(e) {
//                         console.log('<img src="'+e.target.result+'"/>') ;
//                         err13.innerHTML="Aadhar Back Page Image Upload is successful."
//                     };
//                     reader4.readAsDataURL(fileInput4.files[0]);
              
//               }
//             }

        


// // ...

// // AJAX request to PHP script
// if (validationPassed) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'store_data.php', true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         // Handle the response from the PHP script
//         console.log(xhr.responseText);
//       } else {
//         console.error('Error:', xhr.status);
//       }
//     };
  
//     // Prepare the data to be sent
//     const formData = new FormData();
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('cpassword', cpassword);
//     formData.append('name', name);
//     formData.append('date', date);
//     formData.append('district', district);
//     formData.append('address', address);
//     formData.append('mobile', mobile);
  
//     // Send the data
//     xhr.send(formData);
//   }
  





//   document.getElementById('form').addEventListener('submit', seller);






















//             // var checkbox=document.getElementById('gridCheck')
//             // var err11=document.getElementById('error11')
//             //  if(checkbox.checked){
//             //     err11.innerHTML="your not accept the terms and condition"
//             //  }else{
//             //     err11.innerHTML="your  accept the terms and condition"
//             //  }
//         }

       

      
      
       
      
// // form.addEventListener('submit',(e)=>{
    
// //     if(!validateInputs()){
// //         e.preventDefault();
// //     }
// // })

// // function validateInputs(){
// //     const usernameVal = username.value.trim()
// //     const emailVal = email.value.trim();
// //     const passwordVal = password.value.trim();
// //     const cpasswordVal = cpassword.value.trim();
// //     let success = true

// //     if(usernameVal===''){
// //         success=false;
// //         setError(username,'Username is required')
// //     }
// //     else{
// //         setSuccess(username)
// //     }

// //     if(emailVal===''){
// //         success = false;
// //         setError(email,'Email is required')
// //     }
// //     else if(!validateEmail(emailVal)){
// //         success = false;
// //         setError(email,'Please enter a valid email')
// //     }
// //     else{
// //         setSuccess(email)
// //     }

// //     if(passwordVal === ''){
// //         success= false;
// //         setError(password,'Password is required')
// //     }
// //     else if(passwordVal.length<8){
// //         success = false;
// //         setError(password,'Password must be atleast 8 characters long')
// //     }
// //     else{
// //         setSuccess(password)
// //     }

// //     if(cpasswordVal === ''){
// //         success = false;
// //         setError(cpassword,'Confirm password is required')
// //     }
// //     else if(cpasswordVal!==passwordVal){
// //         success = false;
// //         setError(cpassword,'Password does not match')
// //     }
// //     else{
// //         setSuccess(cpassword)
// //     }

// //     return success;

// // }
// // //element - password, msg- pwd is reqd
// // function setError(element,message){
// //     const inputGroup = element.parentElement;
// //     const errorElement = inputGroup.querySelector('.error')

// //     errorElement.innerText = message;
// //     inputGroup.classList.add('error')
// //     inputGroup.classList.remove('success')
// // }

// // function setSuccess(element){
// //     const inputGroup = element.parentElement;
// //     const errorElement = inputGroup.querySelector('.error')

// //     errorElement.innerText = '';
// //     inputGroup.classList.add('success')
// //     inputGroup.classList.remove('error')
// // }

// // const validateEmail = (email) => {
// //     return String(email)
// //       .toLowerCase()
// //       .match(
// //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// //       );
// //   };

















// // // Retrieve data from the database
// // fetch('values.php')
// //   .then(response => response.json()) // Assuming the response is in JSON format
// //   .then(data => {
// //     // Process the retrieved data
// //     const dataContainer = document.getElementById('dataContainer');
// //     dataContainer.innerHTML = ''; // Clear the container before adding new data
// //     const form = document.getElementById('form');

// //     data.forEach(row => {
// //       const rowElement = document.createElement('div');
// //       rowElement.textContent = `Email: ${row.EmailSeller}, Name: ${row.FNameSeller}`; // Customize the display as per your requirements

// //      const append =  dataContainer.appendChild(rowElement);
// //      form.appendChild(append)
// //     });
// //   })
// //   .catch(error => {
// //     console.error('Error:', error);
// //   });
