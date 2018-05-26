// check off specific todos by clicking
// use .on() to listen for future elements
//when li inside ul is clicked run code
//only listen for li's
//needed that since li's not all there to begin with
$("ul").on("click","li",function(){
	//toggle class to show todo completed or not
	$(this).toggleClass("completed");
});

//click on x to delete todo
//use .on("click" to listen for future elements added
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		//remove the parent aka li with span
		$(this).remove();
	});
	event.stopPropagation();
});

//add new todo functionality
$("input[type=text]").keypress(function(event){
	// check for the enter key
	if(event.which === 13){
		//grab new todo text from input
		var todoText = $(this).val();
		//use setter to clear input text
		$(this).val("");
		//create a new todo with that text
				//to new li and add to the ul
			//.append() adds html code to page
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

//toggle add new todo icon
$(".fa-magic").click(function(){
	$("input[type=text]").fadeToggle();
});