var CurrentStep = 1;

var DisplayStep = function(Step)
{

    if (Step == 1)
    {
        $('#TheFirstStep_ShoppingList').css('display', 'block');
        $('#TheSecondStep_Destination').css('display', 'none');
        $('#TheThirdStep_Schedule').css('display', 'none');
        $('#TheFourthStep_Summary').css('display', 'none');

        $("#SteapHeader_ShoppingList").removeClass("disabled");
        $("#SteapHeader_Destination").removeClass("active");
        $("#SteapHeader_Schedule").removeClass("active");
        $("#SteapHeader_Summary").removeClass("active");
        
        $("#SteapHeader_ShoppingList").addClass("active");
        $("#SteapHeader_Destination").addClass("disabled");
        $("#SteapHeader_Schedule").addClass("disabled");
        $("#SteapHeader_Summary").addClass("disabled");
         
    }
    else if (Step == 2) 
    {
        $('#TheFirstStep_ShoppingList').css('display', 'none');
        $('#TheSecondStep_Destination').css('display', 'block');
        $('#TheThirdStep_Schedule').css('display', 'none');
        $('#TheFourthStep_Summary').css('display', 'none');    

        $("#SteapHeader_ShoppingList").removeClass("active");
        $("#SteapHeader_Destination").removeClass("disabled");
        $("#SteapHeader_Schedule").removeClass("active");
        $("#SteapHeader_Summary").removeClass("active");
        
        $("#SteapHeader_ShoppingList").addClass("disabled");
        $("#SteapHeader_Destination").addClass("active");
        $("#SteapHeader_Schedule").addClass("disabled");
        $("#SteapHeader_Summary").addClass("disabled");
    }
    else if (Step == 3) 
    {
        $('#TheFirstStep_ShoppingList').css('display', 'none');
        $('#TheSecondStep_Destination').css('display', 'none');
        $('#TheThirdStep_Schedule').css('display', 'block');
        $('#TheFourthStep_Summary').css('display', 'none');    

        $("#SteapHeader_ShoppingList").removeClass("active");
        $("#SteapHeader_Destination").removeClass("active");
        $("#SteapHeader_Schedule").removeClass("disabled");
        $("#SteapHeader_Summary").removeClass("active");
        
        $("#SteapHeader_ShoppingList").addClass("disabled");
        $("#SteapHeader_Destination").addClass("disabled");
        $("#SteapHeader_Schedule").addClass("active");
        $("#SteapHeader_Summary").addClass("disabled");
    }
    else if (Step == 4) 
    {
        $('#TheFirstStep_ShoppingList').css('display', 'none');
        $('#TheSecondStep_Destination').css('display', 'none');
        $('#TheThirdStep_Schedule').css('display', 'none');
        $('#TheFourthStep_Summary').css('display', 'block');   
        
        $("#SteapHeader_ShoppingList").removeClass("active");
        $("#SteapHeader_Destination").removeClass("active");
        $("#SteapHeader_Schedule").removeClass("active");
        $("#SteapHeader_Summary").removeClass("disabled");
        
        $("#SteapHeader_ShoppingList").addClass("disabled");
        $("#SteapHeader_Destination").addClass("disabled");
        $("#SteapHeader_Schedule").addClass("disabled");
        $("#SteapHeader_Summary").addClass("active");
    }

}

DisplayStep(CurrentStep);

var ChangeStep = function(Step)
{
    if (CurrentStep === 1) 
    {

        if ($('#TheFirstStep_ShoppingList_Table tr').length < 2)
        {
            alert('Please add at least one item.');
            return;
        }
    }

    CurrentStep = Step;
    DisplayStep(CurrentStep);
}

auth.onAuthStateChanged(user => {
    if (user)
   {
     db.collection("Users")
     .where("UserID", "==", user.uid)
     .get()
       .then(function(snapshot) 
       {
 
         $('#CurrentDefaultAddress').html('&ensp;&ensp;&ensp;&ensp;' + snapshot.docs[0].data().Address);
 
       });
  
 
   }
   else
   {
     window.location.replace("signin.html");
   }
 });



function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

var AddItem = function ()
{
    var txt = $('#TheSecondStep_ShoppingList_item');  
    if (!(txt.val() != null && txt.val() != '')) {  
        alert('Please enter an item first!')  
        return;
    }     

    var txt2 = $('#TheSecondStep_ShoppingList_amount');  
    if (!(txt2.val() != null && txt2.val() != '')) {  
        alert('Please also enter an amount!')  
        return;
    }

    var TheItem = txt.val();
    var TheAmount = txt2.val();

    txt.val('');
    txt2.val('');

    var TheUUIDv4 = uuidv4();

    $('#TheFirstStep_ShoppingList_Table > tbody:last-child')
       .append(
            '<tr id="' + TheUUIDv4 + '">' + 
             '<td>' + TheItem + '</td>' +
             '<td>' + TheAmount + '</td>' +
             '<td style="text-align:center"><a style="cursor:pointer" onclick="javascript:RemoveItem(\'' + TheUUIDv4 + '\')" ><i class="trash alternate outline icon"></i></a></td>' +
            '</tr>');
}

var RemoveItem = function (TheUUIDv4)
{

    $( "#" + TheUUIDv4 ).remove();

}