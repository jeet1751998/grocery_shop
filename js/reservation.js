$(document).ready(function () {
    // submit button click function
    $("#reservation_form").submit(function (event) {
        var isValid = true;
        var phonePattern = "\d{3}[\-]\d{3}[\-]\d{4}"
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        // Get user input from textfield, store in variable
       
        var name = $("#name").val();
        var email = $("#email").val().trim();
        var phone = $("#phone").val().trim();
     
        //validate user input
        

        if (name == "") {

            $("#name").next().text("This field is required");
            isValid = false;

        }


        if (email == "") {

            $("#email").next().text("This field is required.");
            isValid = false;

        } else if (!emailPattern.test(email)) {

            $("#email").next().text("Must be a valid email address.");
            isValid = false;

        } else {

            $("#email").next().text("");
        }

        $("#email").val(email);



        if(phone == ""){
            
            $("#phone").next().text("This field is required");
            isValid = false
        }

        // submit form if all entries are valid 
        if (isValid == false) {

            event.preventDefault();

        }
    }); // end of the function
}); // end ready
window.onload=function(){
       $("#name").focus();
}
