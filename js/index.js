var enter = document.getElementById("enter");
var input = document.getElementById("userInput");
var list = document.querySelector("ul");
var product = document.getElementsByTagName("li");

// Random price generator


function stringSize(){
	return input.value.length;
} 

    // Price Generator 
    
    function getPrice(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)) ; 
    li.appendChild(document.createTextNode("   $")) ; 
    li.appendChild(document.createTextNode(getPrice(50))) ;
	list.appendChild(li); 
	input.value = "" ; 
    
   
	//Change Color
	
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);


	// Delete 
	var del = document.createElement("button");
	del.appendChild(document.createTextNode("DELETE"));
	li.appendChild(del);
	del.addEventListener("click", deleteListItem);
	


	//Change display
	function deleteListItem(){
		li.classList.add("delete")
	}

}


function addListAfterClick(){
	if (stringSize() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (stringSize() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this cod also be display by event.keyCode === 13
		createListElement();
	} 
}


enter.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);