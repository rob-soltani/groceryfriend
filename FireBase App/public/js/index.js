auth.onAuthStateChanged(user => {
   if (user)
  {
    $('#SignOutButton').css('display', 'inline-block');
    $('#WelcomeMessage').css('display', 'inline-block');  

    db.collection("Users")
    .where("UserID", "==", user.uid)
    .get()
      .then(function(snapshot) 
      {
        console.log(snapshot);

        $('#UserNameContainer').html(snapshot.docs[0].data().FirstName);

        // snapshot.docs.forEach(doc => {

        //   var CurrentContent = $('#SampleDataFromDB').html();

        //   CurrentContent = CurrentContent + doc.data().title + '<br />';

        //   $('#SampleDataFromDB').html(CurrentContent);
          
        // });

      });

      db.collection("cats")
      .get()
        .then(function(snapshot) 
        {
          console.log(snapshot);

          snapshot.docs.forEach(doc => {
  
            var CurrentContent = $('#SampleDataFromDB').html();
  
            CurrentContent = CurrentContent + doc.data().name + '<br />';
  
            $('#SampleDataFromDB').html(CurrentContent);
            
          });
  
        });  

  }
  else
  {
    window.location.replace("signin.html");
  }
});