auth.onAuthStateChanged(user => {
   if (user)
  {
    db.collection("Users")
    .where("UserID", "==", user.uid)
    .get()
      .then(function(snapshot) 
      {

        $('#UserNameContainer').html(snapshot.docs[0].data().FirstName);

      });
 

  }
  else
  {
    window.location.replace("signin.html");
  }
});