// Function to validate the form
// function validateForm() {
    // Get form elements
    // var email = document.getElementById('email');
    // var password = document.getElementById('password');
    // var confirmPassword = document.getElementById('confirmPassword');
    // var name = document.getElementById('name');
    // var dob = document.getElementById('dob');
    // var district = document.getElementById('district');
    // var address = document.getElementById('address');
    // var mobile = document.getElementById('mobile');
    // var panCard = document.getElementById('panCard');
    // var bankPassbook = document.getElementById('bankPassbook');
    // var photo = document.getElementById('photo');
    // var aadharFrontPage = document.getElementById('aadharFrontPage');
    // var aadharBackPage = document.getElementById('aadharBackPage');
  
    // // Initialize error variables
    // var error1 = document.getElementById('error1');
    // var error2 = document.getElementById('error2');
    // var error3 = document.getElementById('error3');
    // var error4 = document.getElementById('error4');
    // var error5 = document.getElementById('error5');
    // var error6 = document.getElementById('error6');
    // var error12 = document.getElementById('error12');
    // var error7 = document.getElementById('error7');
    // var error8 = document.getElementById('error8');
    // var error9 = document.getElementById('error9');
    // var error10 = document.getElementById('error10');
    // var error11 = document.getElementById('error11');
    // var error13 = document.getElementById('error13');
  
    // // Reset error messages
    // error1.textContent = '';
    // error2.textContent = '';
    // error3.textContent = '';
    // error4.textContent = '';
    // error5.textContent = '';
    // error6.textContent = '';
    // error12.textContent = '';
    // error7.textContent = '';
    // error8.textContent = '';
    // error9.textContent = '';
    // error10.textContent = '';
    // error11.textContent = '';
    // error13.textContent = '';
  
    // // Regular expressions
    // var emailRegex =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    // var passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // var mobileRegex = /^[0-9]{10}$/;
    // var fileExtensionRegex = /\.(jpg|jpeg|png|gif)$/i;
    
    
  
    // // Validate email
    // if (email.value.trim() === '') {
    //   error1.textContent = 'Email is required';
    //   return false;
    // } else if (!emailRegex.test(email.value.trim())) {
    //   error1.textContent = 'Invalid email format';
    //   return false;
    // }
  
    // // Validate password
    // if (!passwordRegex.test(password.value)) {
    //   error2.textContent = 'The password meets the minimum length requirement and contains at least 1 upper case letter, 1 lower case letter,1 number, and 1 special character';
    //   return false;
    // }
  
    // // Validate confirm password
    // if (confirmPassword.value !== password.value) {
    //   error3.textContent = 'Passwords do not match';
    //   return false;
    // }
  
    // // Validate name
    // if (name.value.trim() === '') {
    //   error4.textContent = 'Name is required';
    //   return false;
    // }
  
    // // Validate date of birth
    // if (dob.value.trim() === '') {
    //   error10.textContent = 'Date of Birth is required';
    //   return false;
    // }
  
    // // Validate district
    // if (district.value === 'Choose...') {
    //   error5.textContent = 'Please select a district';
    //   return false;
    // }
  
    // // Validate address
    // if (address.value.trim() === '') {
    //   error6.textContent = 'Address is required';
    //   return false;
    // }
  
    // // Validate mobile number
    // if (!mobileRegex.test(mobile.value.trim())) {
    //   error12.textContent = 'Invalid mobile number';
    //   return false;
    // }
  
    // // Validate PAN card
    // if (panCard.value.trim() === '') {
    //   error7.textContent = 'PAN Card image is required';
    //   return false;
    // } else if (!fileExtensionRegex.test(panCard.value.trim())) {
    //   error7.textContent = '"Please upload a file with the extensions .jpeg/.jpg/.png/.gif only';
    //   return false;
    // }
  
    // // Validate bank passbook
    // if (bankPassbook.value.trim() === '') {
    //   error8.textContent = 'Bank Passbook image is required';
    //   return false;
    // } else if (!fileExtensionRegex.test(bankPassbook.value.trim())) {
    //   error8.textContent = '"Please upload a file with the extensions .jpeg/.jpg/.png/.gif only';
    //   return false;
    // }
  
    // // Validate photo
    // if (photo.value.trim() === '') {
    //   error9.textContent = 'Photo is required';
    //   return false;
    // } else if (!fileExtensionRegex.test(photo.value.trim())) {
    //   error9.textContent = '"Please upload a file with the extensions .jpeg/.jpg/.png/.gif only';
    //   return false;
    // }
  
    // // Validate aadhar front page
    // if (aadharFrontPage.value.trim() === '') {
    //   error11.textContent = 'Aadhar Front Page image is required';
    //   return false;
    // } else if (!fileExtensionRegex.test(aadharFrontPage.value.trim())) {
    //   error11.textContent = '"Please upload a file with the extensions .jpeg/.jpg/.png/.gif only';
    //   return false;
    // }
  
    // // Validate aadhar back page
    // if (aadharBackPage.value.trim() === '') {
    //   error13.textContent = 'Aadhar Back Page image is required';
    //   return false;
    // } else if (!fileExtensionRegex.test(aadharBackPage.value.trim())) {
    //   error13.textContent = '"Please upload a file with the extensions .jpeg/.jpg/.png/.gif only';
    //   return false;
    // }
  
    // // Form is valid
    // return true;
//   }
  
  // Attach event listener to the form's submit event
//   var form = document.getElementById('form');
//   form.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission if validation fails
//     if (validateForm()) {
//       // Form is valid, you can proceed with submitting the form
//       form.submit();
//     }
//   });
//   // Function to validate the form and store data in MySQL database
function validateForm() {

    var email = document.getElementById('email');
    
    var name = document.getElementById('name');
   
    var address = document.getElementById('address');
   
  
    // Initialize error variables
    var error1 = document.getElementById('error1');
   
    var error4 = document.getElementById('error4');
   
    var error6 = document.getElementById('error6');
   
    // Reset error messages
    error1.textContent = '';
  
    error4.textContent = '';
    
    error6.textContent = '';
   
  
    // Regular expressions
    var emailRegex =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    var passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var mobileRegex = /^[0-9]{10}$/;
    var fileExtensionRegex = /\.(jpg|jpeg|png|gif)$/i;
    
    
  
    // Validate email
    if (email.value.trim() === '') {
      error1.textContent = 'Email is required';
      return false;
    } else if (!emailRegex.test(email.value.trim())) {
      error1.textContent = 'Invalid email format';
      return false;
    }
  
    // Validate password
    if (!passwordRegex.test(password.value)) {
      error2.textContent = 'The password meets the minimum length requirement and contains at least 1 upper case letter, 1 lower case letter,1 number, and 1 special character';
      return false;
    }
  
    // Validate confirm password
    if (confirmPassword.value !== password.value) {
      error3.textContent = 'Passwords do not match';
      return false;
    }
  
    // Validate name
    if (name.value.trim() === '') {
      error4.textContent = 'Name is required';
      return false;
    }
  
    // Validate date of birth
    if (dob.value.trim() === '') {
      error10.textContent = 'Date of Birth is required';
      return false;
    }
  
    // Validate district
    if (district.value === 'Choose...') {
      error5.textContent = 'Please select a district';
      return false;
    }
  
    // Validate address
    if (address.value.trim() === '') {
      error6.textContent = 'Address is required';
      return false;
    }
  
    // Validate mobile number
    if (!mobileRegex.test(mobile.value.trim())) {
      error12.textContent = 'Invalid mobile number';
      return false;
    }
  
    
  
    // Validate photo
    if (photo.value.trim() === '') {
      error9.textContent = 'Photo is required';
      return false;
    } else if (!fileExtensionRegex.test(photo.value.trim())) {
      error9.textContent = '"Please upload a file with the extensions .jpeg/.jpg/.png/.gif only';
      return false;
    }
  
    // Validate aadhar front page
    if (aadharFrontPage.value.trim() === '') {
      error11.textContent = 'Aadhar Front Page image is required';
      return false;
    } else if (!fileExtensionRegex.test(aadharFrontPage.value.trim())) {
      error11.textContent = '"Please upload a file with the extensions .jpeg/.jpg/.png/.gif only';
      return false;
    }
  
    // Validate aadhar back page
    if (aadharBackPage.value.trim() === '') {
      error13.textContent = 'Aadhar Back Page image is required';
      return false;
    } else if (!fileExtensionRegex.test(aadharBackPage.value.trim())) {
      error13.textContent = '"Please upload a file with the extensions .jpeg/.jpg/.png/.gif only';
      return false;
    }
  
    // Form is valid
    return true;
    // Get form elements and validation errors (omitted for brevity)
    // ...
  
    // Form is valid, proceed with storing the data in the database
    if (validateForm()) {



        
      // Form is valid, you can proceed with submitting the form
      // Create an AJAX request or use a form submission to send the data to a server-side script for database insertion.
      // Below is an example using AJAX with jQuery:
      $.ajax({
        url: 'values.php', // Replace with the URL of your server-side script
        type: 'POST',
        data: {
          email: email.value,
          password: password.value,
          confirmPassword :confirmPassword.value,
          name:name.value,
          dob:dob.value,
          district:district.value,
          address :address .value,
          mobile:mobile.vaue,
          photo:photo.value,
          aadharFrontPage :aadharFrontPage.value,
          aadharBackPage: aadharBackPage.value
          // Include other form fields here
        },
        success: function (response) {
          // Handle the response from the server
          console.log(response); // You can customize this based on your requirements
        },
        error: function (xhr, status, error) {
          // Handle the error
          console.log(error); // You can customize this based on your requirements
        }
      });
    }
  }
  var form = document.getElementById('form');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission if validation fails
    if (validateForm()) {
      // Form is valid, you can proceed with submitting the form
      form.submit();
    }
  });