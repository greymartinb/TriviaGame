//global variables//


var wins = 0;

var losses= 0;

var matchesPlayed= 0;

var questions = ["What animal did New Zealand politican Joseph Hatch boil to death in the hundreds of thousands to collect their oil?",
"Hetty Green, a.k.a 'The Witch of Wallstreet' died in 1916 with a fortune worth 4.4 billion after adjusted for inflation. What was she too cheap to pay for?",
 "The movie and book 'Jaws' are based on a series of shark attacks that happened on the New Jersey coast in the early 1900's. What was the popular opion of sharks at the time?",
 "The Boston busing riots took place in the years of of 1974-75, as a result of forced school integration. What was the song the white residents of Boston's Southie neighborhood sang while marching?",
 "Black Panther leader Fred Hampton was killed during an 'arrest' in 1969. In the civil case the FBI revealed that they had withheld documents. How many documents had they held back?",
 "What was the fastest growing sport in the 1870's in America?",
 "Cassius Clay was a southern abolitionist . At one point he had a anti-slavery newspaper in a slavery state. When people threatened to destroy his printing presses how did he respond?",
 "John Wayne Thompson had both of his arms ripped off by heavy farm machinery in 1992. What was the funniest thing he said?",
 "Before the popularization of automobiles, the street was largely filled with pedestrians. Before traffic laws, what insult did the auto industry invent to sway popular opinion in their favor?" ];

 var answers = [
 	["Seals","Birds", "Rabbits","Penguins"],
 	["Wouldn't pay for her son to see the doctor for a broken leg", "Would move to avoid paying taxes", "Wouldn't pay for running water", "All of the above"],
 	["Dangerous, but not life threatening", "Scary, not life threatening", "Fierce killing machines", "Utterly harmless to humans"],
 	["O Danny Boy", "Molly Malone", "United we stand", "Popular civil rights song 'We Shall Overcome'"],
 	["200 volumes with 500 pages each","30 files", "15 memos","nothing"],
 	["Boxing", "Baseball", "Bowling", "Walking at a regular speed"],
 	["Filled the walls with gunpowder", "Armed every employee with a pistol", "Shut down his business", "Knifed a opposing politician"],
 	["one onethousand. You said the ambulance would be here in one second.", "I can't feel my arms", "Sorry for kicking in the front door dad.", "All of the above"],
 	["Jay Walker", "Bumpkin", "Road Rube", "Goat Foundler"]
	]; 
var display = [
"Penguins. From episode 207. That is just one of the many man made ecological diasasters on that tiny australian island. 10/10 funny. Recorded Live .",
"All of the above. From episode 164. America's most personally facisnating financial giants. When she died she gave most of her money to charity. 8/10 interesting. Recorded in Studio",
"Utterly harmless to humans. From episode 210. Fascinating change in perspective. 10/10 funny. Recorded live with the hosts of the podcast 'My Favorite Murder'.",
"We shall Overcome. From episode 228 & 229. Both funny and enlightening. One of the episode clearly made to address current events with a relevent event from history. 10/10 Enlightening. Recorded in Studio.",
"200 volumes with 500 pages each. From Episode 214. Really horrifying. The FBI and police just murdered someone and didn't even bother to really cover it up. 10/10 grotesque. Recorded in Studio.",
"Walking at a regular speed. Episode 159. The funniest thing I have ever listened to. It seems like the excitement might be because of gambling? 10/10 You won't even mind passing out from laughing so much. Recorded in Studio.",
"Filled the walls with gunpowder. Episode 54. He also impregnated a ballerina while he was the Russian diplomat. And maimed a hired killer with their own knife. 10/10 BADASS. Recorded in Studio.",
"All of the above. From Episode 149. He is the funniest dude who ever got his arms ripped off. Serious badass. 10/10 cool under pressure. Recorded in Studio.",
"Jay Walker. From Episode 193. They also invented the game red light green light. As a corporate campaign against the culture of walking. 10/10 surprised, but not really surprised. Recorded in Studio."
]


var rightWrong = [
["wrong","wrong","wrong","right"],
["wrong","wrong","wrong","right"],
["wrong","wrong","wrong","right"],
["wrong","wrong","wrong","right"],
["right","wrong","wrong","wrong"],
["wrong","wrong","wrong","right"],
["wrong","wrong","wrong","right"],
["wrong","wrong","wrong","right"],
["right","wrong","wrong","wrong"]
];

var pictArray= [
"island.png",
"witchWallstreet.png",
"sharkAttack.png",
"bostonBusing.png",
"fredHampton.png",
"walking.png",
"badAss.png",
"arms.png",
"cars.png"
]
var watchTime= 31;

var pictureTime= 16;

var picturesShown= -1;

var intervalId;



function start() {
	intervalId = setInterval(count,1000);

};

function count() {
watchTime--;
$(".clockSpot").replaceWith("<div class='clockSpot'> <h3> Time Left : "+ watchTime+ "</h3></div>");
console.log(watchTime);
if (watchTime === 0){
	losses++;
	matchesPlayed++;;
	watchTime=31;
	results();
};
};



var clickExtractor= function(localthis)
{
var selector = $(localthis);
};



var setUpGame = function(){
	$(".mainText").replaceWith("<div class= 'mainText'> <h3>" + questions[matchesPlayed] + "</h3> </div>");
	$("button#start").hide()

	for (var i= 0; i <4; i++) {
	$(".guess").append("<div><button class= '"+ rightWrong[matchesPlayed][i]+ " question " +i+ "'> <h4>" + answers[matchesPlayed][i] + "</h4> </button></div>")
	
	};



};

var nextQuestion = function()

{ 
	$(".guess").show();
	$(".picts").hide();
	start();
	$(".mainText").replaceWith("<div class= 'mainText'> <h3>" + questions[matchesPlayed] + "</h3> </div>");	
	for (var i= 0; i <4; i++) {
	$("." +i).replaceWith("<div><button class= '"+ rightWrong[matchesPlayed][i]+ " question " +i+ "'> <h4>" + answers[matchesPlayed][i] + "</h4> </button></div>");
	};


};

var results =function() {
	$(".guess").hide();
	$(".mainText").replaceWith("<div class= 'mainText'> <h3>" + display[picturesShown] + "</h3> </div>");
	$(".picts").replaceWith("<div class= 'picts' ><img class = 'pictures' src = 'assets/images/" + pictArray[picturesShown]+ "'> <button class= 'moveOn question'> <h4> Move On </h4> </button> </div>" );
	window.clearInterval(intervalId);
	if (matchesPlayed===9){
		$(".picts").hide();
	}
	



};










