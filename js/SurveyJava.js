function check(){

// variable declaration
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;
// not included
	if (question1 == "kinshasa"){
		correct++;
}
    if (question2 == "pretoria") {
    	correct++;
}
    if (question3 == "bangui") {
    	correct++
    }  
// message after clicking submit
    var messages = ["Thank You!", "Thank You!", "Thank You!"];
    var range;

     if (correct < 1){
     	 range = 2;
     }

      if (correct > 0 && correct < 3){
     	 range = 1;
     }

        if (correct > 2){
     	 range = 0;
     }
// once submit is clicked, the message is displayed
   document.getElementById("after_submit").style.visibility="visible";


   document.getElementById("message").innerHTML = messages[range];
   document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";

}

// refresh page function

function myFunction() {
    location.reload();
}