var quotes = ["Nothing is impossible, the word itself says “I'm possible”!",
	"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
	"Whether you think you can or you think you can't, you're right",
	"Perfection is not attainable, but if we chase perfection we can catch excellence",
	"Life is 10% what happens to me and 90% of how I react to it",
	"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
	"Remember no one can make you feel inferior without your consent",
	"I can't change the direction of the wind, but I can adjust my sails to always reach my destination",
	"Believe you can and you're halfway there",
	"To handle yourself, use your head; to handle others, use your heart",
	"Too many of us are not living our dreams because we are living our fears",
	"Do or do not. There is no try",
	"Whatever the mind of man can conceive and believe, it can achieve",
	"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover",
	"Strive not to be a success, but rather to be of value"
];

var author = ["Audrey Hepburn",
	"Maya Angelou",
	"Henry Ford",
	"Vince Lombardi",
	"Charles Swindoll",
	"Oprah Winfrey",
	"Eleanor Roosevelt",
	"Jimmy Dean",
	"Theodore Roosevelt",
	"Eleanor Roosevelt",
	"Les Brown",
	"Yoda",
	"Napoleon Hill",
	"Mark Twain",
	"Albert Einstein"
];
var myFun = function(){
	var rannumber = Math.floor((Math.random()*author.length)+1);
		$("#quote").text(quotes[rannumber]);
		$("#quote-footer").text(author[rannumber]);
};
$(document).ready(function(){
	$("#next-button").click(myFun);
    $("#twitter-button").click(function(){
		var currentQuote = $("#quote").text();
		var currentWriter = $("#quote-footer").text();
		$(this).attr('href','https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '"     ' + currentWriter));
	});
});
