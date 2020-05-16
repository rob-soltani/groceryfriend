auth.onAuthStateChanged(user => {
   if (user)
  {
    $('#SignOutButton').css('display', 'inline-block');
  }
  else
  {
    window.location.replace("signin.html");
  }
});