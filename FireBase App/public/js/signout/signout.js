
var SignOut = function()
{

   auth.signOut().then( () => {
      window.location.replace("index.html");
   })
   .catch(function(error) {
      // TODO: Log back-end error somewhere
      window.location.replace("index.html");
   })  

}

SignOut();