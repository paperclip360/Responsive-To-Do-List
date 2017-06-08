
// toggle completed and not completed TODOS
$("ul").on("click","li", function() {
	$(this).toggleClass("completed");
});

// click on X to delete TODO, with stopPropagation to stop from going through all layers on tags
$("ul").on("click", ".can", function(event) {
	$(this).parent().fadeOut(550,function() {
		// this Jquery ref is not same as previos ref. becit refers to the parent
		$(this).remove();
	});
});

// type and enter a new Todo by pressing enter key
$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		var todoTest = $(this).val();
		$(this).val("");
		// create new li element to the ul
		$("ul").append("<li class='list-group-item'><span class='can'><i class='fa fa-trash'></i></span>" + todoTest + "<span class='check'><i class='fa fa-check'></i></span></li>");
	}
});

// fade in input field
$(".fa-list").click(function() {
	$(".inputTodo").slideToggle("slow", function() {
	});
});

// hide completed completed li's
$(".fa-eye-slash").click(function() {
	$(".completed").slideUp("slow", function() {
	});
});

// show completed completed li's
$(".fa-eye-slash").dblclick(function() {
	$(".completed").slideDown("slow", function() {
	});
});

// delete all completed completed li's
$(".fa-eraser ").dblclick(function() {
	$(".completed").remove();
});