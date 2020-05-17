// Semantic UI Form Validation
$(document)
.ready(function() {
  $('.ui.form')
    .form({
      fields: {
        firstname: {
          identifier  : 'FirstName',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your first name'
            },
            {
              type   : 'length[2]',
              prompt : 'Please enter a name of at least two characters.'
            }
          ]
        },
        lastname: {
          identifier  : 'LastName',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your Last Name'
            },
            {
              type   : 'length[2]',
              prompt : 'Please enter a valid name'
            }
          ]
        },
        
        email: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        },
        password: {
          identifier  : 'password',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your password'
            },
            {
              type   : 'length[6]',
              prompt : 'Your password must be at least 6 characters'
            }
          ]
        },
        address: {
          identifier  : 'Address',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your address'
            }
          ]
        },
        phone: {
          identifier  : 'phone',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter your phone number'
            },
            {
              type   : 'length[11]',
              prompt : 'Please enter a valid phone number, including area code'
            }
          ]
        },
      },
      onSuccess: function(event, fields) {

        event.preventDefault();

        SignUp();

      }           
    })
  ;
});


var SignUp = function()
{

   // Get form fields
   const FirstName =  document.getElementById("FirstName").value;
   const LastName =  document.getElementById("LastName").value;
   const Address =  document.getElementById("Address").value;
   const Phone =  document.getElementById("Phone").value;
   const email =  document.getElementById("email").value;
   const password =  document.getElementById("password").value;

   auth.createUserWithEmailAndPassword(email, password)
   .then(credentials =>
    {
      const UserID = credentials.user.uid;
      
      db.collection('Users').add({
        UserID: UserID,
        FirstName: FirstName,
        LastName: LastName,
        Address: Address,
        Phone: Phone, 
        Email: email,         
      })
      .then(() =>
      {
        window.location.replace("index.html");
      })
      .catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;
  
        $('.ui.error.message').html(
           '<ul class="list"><li>' + errorMessage + '</li></ul>'         
        );
  
        $('.ui.error.message').css(
          'display', 'block'
        );
  
     });

    })
   .catch(function(error) {

      var errorCode = error.code;
      var errorMessage = error.message;

      $('.ui.error.message').html(
         '<ul class="list"><li>' + errorMessage + '</li></ul>'         
      );

      $('.ui.error.message').css(
        'display', 'block'
      );

   });

}