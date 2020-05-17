auth.onAuthStateChanged(user => {
   if (user)
  {
    $('#SignOutButton').css('display', 'inline-block');
    $('#WelcomeMessage').css('display', 'inline-block');

    $('#UserNameContainer').html('[NO NAME YET]');

    db.collection("Test")   //.where("content", "==", "meat1")
    .get()
      .then(function(snapshot) 
      {
        console.log(snapshot);
        //$('#SampleDataFromDB').html(snapshot.docs);
        console.log(snapshot.docs);
        var data = snapshot.docs;

        data.forEach(doc => {

            var CurrentContent = $('#SampleDataFromDB').html();

            CurrentContent = CurrentContent + doc.data().title + '<br />';

            $('#SampleDataFromDB').html(CurrentContent);
          
        });

      })
      .catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorMessage);
  
  
     });;


    

  }
  else
  {
    window.location.replace("signin.html");
  }
});