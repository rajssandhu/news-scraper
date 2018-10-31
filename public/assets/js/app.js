$("#scrape").on("click", function(){
	$.ajax({
		method: "GET",
		url: "/scrape",
	}).done(function(data){
		console.log(data)
		window.location = "/"
	})
});

$(".navbar-nav li").click(function(){
	$(".navbar-nav li").removeClass("active");
	$(this).addClass("active");
});

$(".delete").on("click", function(){
	var thisId = $(this).attr("data-id");
	$.ajax({
		mehtod:"POST",
		url: "/articles/delete/" + thisId
	}).done(function(data){
		window.location = "/saved"
	})
});

$(".saveNote").on("click", function(){
	var thisId = $(this).attr("data-id");
	if(!$("#noteText" + thisId).val()) {
		alert("please enter a note to save")
	} else {
		$.ajax({
			method: "POST",
			url: "/notes.save/" + thisId,
			data:{
				text: $("#noteText" + thisId).val()
			}
		}).done(function(data){
			console.log(data)
				$("#noteText" + thisId).val("");
				$(".modalNote").modal("hide");
				window.location = "/saved"
			
		});
	}
});

$(".deleteNote").on("Click", function(){
	var noteId = $(this).attr("data-note-id");
	var artcileId = $(this).attr("data-article-id");
	$.ajax({
		mehtod: "DELETE",
		url: "/notes/delete/" + noteId + "/" + articleId
	}).done(function(data){
		console.log(data)
		$(".modalNote").modal("hide");
		window.location = "/saved"
	})
});