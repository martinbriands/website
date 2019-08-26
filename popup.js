let popupParent = document.getElementById("popupParent");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");

let button;

let bigImage = document.getElementById("bigImage");
let smallImage1 = document.getElementById("smallImage1");
let smallImage2 = document.getElementById("smallImage2");
let smallImage3 = document.getElementById("smallImage3");
let smallImage4 = document.getElementById("smallImage4");
let smallImage5 = document.getElementById("smallImage5");

let titleElement = document.getElementById("popupTitle");
let underTitleElement = document.getElementById("popupUnderTitle");

let descriptionParentElement = document.getElementById("popupDescription");

overlay.addEventListener("click", function() {
	popupParent.style.display = "none";
	//maybe also empty the popup;
});

smallImage1.addEventListener("click", SwitchImage)
smallImage2.addEventListener("click", SwitchImage)
smallImage3.addEventListener("click", SwitchImage)
smallImage4.addEventListener("click", SwitchImage)
smallImage5.addEventListener("click", SwitchImage)



button = document.getElementById("Fangs & Friends");
button.addEventListener("click", function () {2
	FillPopup("Fangs & Friends", "Unity 3D - C#", "Fangs&Friends",
	"LevelUP 2019 <br> 1st place Overall/Gameplay - 1st place Art <br> 2nd place People's Choice <br> <br>Unity 3D asychronous puzzle coop <br>with an Ice and Fire power dichotomy <br> Project exectuted by a team of 7 students<br> (3 code - 3 art - 1 music) over 4 months <br> <br> What I implemented: <br> - Character Movement / Animation Rigging <br> - Xbox Controller Mapping <br> - Particle Effects / Water Shader <br> - Level Design <br> - Environment Hazards & Logic",
	"<br>Check the project out on <br> <a href=\"https://fangsandfriends.com\"> fangsandfriends.com </a>")
});

button = document.getElementById("DS");
button.addEventListener("click", function () {
	FillPopup("Centivizer Driving Simulator", "BabylonJS - Javascript", "DS",
	"Driving Simulator targeted towards aging home facilities patients suffering from dementia <br> Developed as a team of two developers <br> Great number of iterations of the software, <br> with weekly review of new features <br> <br> The game presents an island to drive around, <br> with items randomly generated from a list to collect <br> and famous people and animals you can stop and talk to, the map is generated at loading from a double array <br> <br> The game works with physical modules (wheel, pedals ..) connected to a server that the game get its inputs from <br><br> What I implemented: <br> - Car Controller Input & Logic <br> - Collision Detection <br> - Interaction with characters <br> - Map Generation with customisation <br>",
	"<br><a href=\"centivizer.com\"> centivizer.com </a>")
});

button = document.getElementById("FishermanFoes");
button.addEventListener("click", function () {
	FillPopup("Fisherman Foes", "Unity 2D - C# - TOJAM13", "FishermanFoes",
	"Unity 2D fighter party game <br> Developed with a team of 4 for Toronto Game Jame 2018 <br><br> Players attack by casting your line and reeling yourself to enemies <br> The goal is to be the highest player for the longest amout of time <br> You can grab onto surfaces to swing and sling yourself <br> The level evolves as the game progresses, changing what you can attach yourself to <br><br> What I implemented: <br> - Hook Mechanic <br> - Character Movement / Animation Rigging <br> - Balistic Trajectory Prediction & Raytracing <br> - Line that folds on contact points with the ground <br> - Controller & Keyboard Support",
	"<br><a href=\"https://github.com/jurcaua/TOJAM13\"> Github</a> <br><a href=\"https://jurcaua.itch.io/fisherman-foes\"> Itch.io</a>")
});

button = document.getElementById("Kleptomanihat");
button.addEventListener("click", function () {
	FillPopup("Kleptomanihat", "Unity 2D - C# - GMD 2018", "Kleptomanihat",
	"UofT Game Development & Design Club's<br> Game Making Deathmatch 2018 <br> 1st place Overall - 1st place Theme <br><br> Unity 2D action platformer <br> Developed with a team of 2 over 2 months <br> Players need to collect hats that stack, each hat having a different effect when you use it <br> <br> What I implemented: <br> - Character Movement and Physics <br> - Hat Interface Class for easy implementation of new Content <br> - Animation Rigging <br> - Area of sight with Raycasting <br>",
	"<br><a href=\"https://github.com/jurcaua/Kleptomanihat\"> Github</a> <br><a href=\"https://jurcaua.itch.io/kleptomanihat\"> Itch.io</a>")
});

button = document.getElementById("vrc");
button.addEventListener("click", function () {
	FillPopup("VR Classroom", "AFrame - Javascript / Node.JS / AFrame - Capstone CSC494", "vrc",
	"Project started as an initiative to fight overcrowded classrooms <br> Students can attend lecture as a 360 degree video with their phone and a Google Cardboard <br> Two different VR environments available: <br> - Lecture Mode: 360 VR livestream of a lecture <br> - Group Mode: teachers separate students in groups that each join a different VR room with avatars, voice chat and doodle sharing in 3D space <br> <br> What I implemented: <br> - Web VR environment with A-Frame <br> - Voice chat and Doodles sharing <br> - Real Time coordinates of Avatars sharing <br> - 360 degree video live streaming",
	"<br><a href=\"https://github.com/virtual-classroom/virtual-classroom\"> Github</a>")
});

button = document.getElementById("BreadRampage");
button.addEventListener("click", function () {
	FillPopup("Bread Rampage", "Unity 3D VR - C#", "BreadRampage",
	"Final project for the UofT Game Development <br>& VR Research Program <br><br> Developed with motion sickness in mind, with a slow moving character to reduce nausea <br> You can move around and throw bread to attract nearby birds that attack anything in their path <br> You do not attack yourself, but instead have to use the bird flocking to get rid of the enemies <br> <br> What I implemented: <br> - Bird Flocking Algorithm <br> - Xbox controller & Oculus Rift Support <br> - VR User Interface <br> - Player Movement / Enemy AI <br> - Trajectory Prediction & Line Rendering", 
	"<br><a href=\"https://github.com/martinbriands/BreadRampage\"> Github</a>")
});

button = document.getElementById("WyvernsNest");
button.addEventListener("click", function () {
	FillPopup("Wyvern's Nest", "Custom Engine - C++", "WyvernsNest", 
	"Classic Tactical Turn Based RPG with heavy customization elements and DnD-esque character stats <br> It also features many different abilities and extensive skill trees <br> <br>The game was built over a semester and worked with a custom C++ engine based on WebGL <br> For this project I was the Programming Team Lead for a team of 10  <br><br> What I implemented: <br> - Sprite Rendering <br> - Sheet Animation Pipeline <br> - Character Pathing <br> - Enemy AI <br> - Particle Effects Generation & Animation <br> - Map Tiling System <br> - Character & Abilities Interfaces", 
	"<br><a href=\"https://github.com/ianw3214/WyvernsNest\"> Github</a> <br><a href=\"https://quichi.itch.io/wyverns-nest\"> Itch.io</a>")
});

button = document.getElementById("GameNani");
button.addEventListener("click", function () {
	FillPopup("Game Nani", "Unity Developer tool - C#", "GameNani",
	"Thacks2 <br> Best Developer Tool Prize <br><br> Developer Tool for Unity Projects that gives a visualisation of player data, aimed at optimizing playtesting <br> Gives relevant data concerning specified objects during playtime <br>(# times looked at, # times interracted with, playtime, time in field of view of Player, Key presses, ...) <br> Easy drag & Drop implementation on objects of interest <br> Data automatically compiled into graphs that can be analyzed with an interface <br><br> What I implemented: <br> - Raycasting Logic <br> - JSON encoding & decoding <br> - Graph Generation <br> - Debugger UI",
	"<br><a href=\"https://github.com/jurcaua/GameNani\"> Github</a><br><a href=\"https://devpost.com/software/thacks2\"> DevPost</a>")
});

button = document.getElementById("GoogleSpy");
button.addEventListener("click", function () {
	FillPopup("GoogleSpy", "Unity Google Home Game - C#", "GoogleSpy",
	"UofT Hacks V entry <br><br> Voice Controlled Stealth Infiltration Game where the only method of input is through a Google Home Device <br> The player can communicate with the Google Home with a list of different actions, like telling the character to move to a certain place, direction or object <br><br> This app works with Actions by Google & a Firebase Database that communicate to Unity <br> A JSON is sent to the Unity Game that is then interpreted accordingly <br> <br> What I implemented: <br> - JSON query encoding / decoding <br> - WW Requests handling <br> - Programming of all interactions <br> - Line of sight Tracing <br> - Action Querying",
	"<br><a href=\"https://github.com/jurcaua/GoogleSpy\"> Github</a><br><a href=\"https://devpost.com/software/googlespy\"> DevPost</a>")
});

button = document.getElementById("Netflix");
button.addEventListener("click", function () {
	FillPopup("Netflix Recommendation System", "Webapp - JS / HTML", "Netflix", 
	"Final Project for Web Development Class <br> Website that suggests recommended movie to Users based on their predetermined Subcription Services and Preferences <br> Users can create accounts linked to their broadcasting services (Netflix, Hulu, Amazon Prime, HBO GO) and the website will give them suggestions on what is available for them to watch <br> Additional Movie Entries can be added by admins and all the data is handled with a MongoDB Database <br> <br> What I implemented: - User Profile <br> - User Sign In / Registration <br> - HTTP Requests <br> - Admin Tools <br> - Database Setup", 
	"")
});

button = document.getElementById("Pacman");
button.addEventListener("click", function () {
	FillPopup("Pacman", "Custom Pacman Engine - C++ & JS", "Pacman",
	"Pacman C++ Clone originally Developed as a submission for the Ubisoft NXT competition, then revised as a JS Web Game for this site <br> <br>The focus of this game is the ghost AI, each having their own way of attacking the player: <br> - Red chases the player Directly <br> - Pink Chases the player's next intersection <br> - Blue moves randomly <br> - Yellow targets the player then moves randomly when it gets close <br> The other aspect of the game is the customization of the level, that is fully customizable thanks to a double array, allowing to make a classic Pacman Grid or something like the header of this site <br><br> What I implemented: <br> - Player Movement and Input <br> - A* pathfinding algorithm <br> - Custom Map Generation <br> Interface for new types of Ghost",
	"<br><a href=\"game.html\"> Try the Game</a>")
});

function FillPopup(title, underTitle, folder, description, links) {
	console.log("button clicked");
	popupParent.style.display = "block";

	bigImage.src = "assets/" + folder + "/1.gif";
	smallImage1.src = "assets/" + folder + "/2.gif";
	smallImage2.src = "assets/" + folder + "/3.gif";
	smallImage3.src = "assets/" + folder + "/4.gif";
	smallImage4.src = "assets/" + folder + "/5.gif";
	smallImage5.src = "assets/" + folder + "/6.gif";

	titleElement.innerHTML = title;
	underTitleElement.innerHTML = underTitle;

	let descriptionElement = document.createElement("div");
	let linksElement = document.createElement("div");
    linksElement.classList.add("centered");


	descriptionElement.innerHTML = description;
	linksElement.innerHTML = links;

	var child = descriptionParentElement.lastElementChild;  
    while (child) { 
        descriptionParentElement.removeChild(child); 
        child = descriptionParentElement.lastElementChild; 
    } 
    
	descriptionParentElement.appendChild(descriptionElement);
	descriptionParentElement.appendChild(linksElement);


}

function SwitchImage() {
	let temp = bigImage.src;
	bigImage.src = this.src;
	this.src = temp;
}

function Skills() {
	//alert("clicked on skills");
	
	document.getElementById("skillsID").scrollIntoView();
	window.scrollBy(0,-100);
}

function Experience() {
	document.getElementById("experienceID").scrollIntoView();
	window.scrollBy(0,-100);
}

function Education() {
	document.getElementById("educationID").scrollIntoView();
	window.scrollBy(0,-100);
}

function Portfolio() {
	document.getElementById("portfolioID").scrollIntoView();
	window.scrollBy(0,-100);
}

function Contact() {
	document.getElementById("contactID").scrollIntoView();
	//window.scrollBy(0,-100);
}