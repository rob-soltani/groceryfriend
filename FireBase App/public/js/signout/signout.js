
var SignOut = function()
{

   auth.signOut().then( () => {
      window.location.replace("index.html");
   })
   .catch(function(error) {
      window.location.replace("index.html");
   })  

}

SignOut();