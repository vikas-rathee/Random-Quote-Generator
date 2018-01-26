var myFun = function(){
	$.getJSON("Random.json",function(result){
		console.log(result);
		let ranNumber = Math.floor((Math.random()*result.quotesJSON.length) + 1);
		$("#quote").text(result.quotesJSON[ranNumber]);
		$("#quote-footer").text(result.writerJSON[ranNumber]);
	});
};

$(document).ready(function(){
	$("#next-button").click(myFun);
	$("#twitter-button").click(function(){
		let currentQuote = $("#quote").text();
		let currentWriter = $("#quote-footer").text();
		$(this).attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + currentQuote + '"     ' + currentWriter));

	});
});
