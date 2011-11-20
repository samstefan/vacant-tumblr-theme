$(function(){
	
	//Tumblr infinite scroll
	$('#Body').infinitescroll({
	
	navSelector  : "div.Pagination",
	nextSelector : "div#Next a:link",
	itemSelector : "#Posts",
	loadingText  : "",
	donetext     : "",
	loadingImg   : "http://static.tumblr.com/ubkenek/4ufljjmjr/loading.gif"
	});
	
});