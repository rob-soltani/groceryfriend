// Semantic UI Form Validation
$(document)
.ready(function() {
  $('.ui.form')
    .form({
      fields: {
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
            }
          ]
        }
      },
      onSuccess: function(event, fields) {

         event.preventDefault();
 
         SignIn();
 
       } 
    })
  ;
})
;


var SignIn = function()
{

   // Get form fields
   const email =  document.getElementById("email").value;
   const password =  document.getElementById("password").value;

   auth.signInWithEmailAndPassword(email, password)
   .then(credentials => {
      console.log(credentials.user);

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

   //window.location.replace("index.html");

}
