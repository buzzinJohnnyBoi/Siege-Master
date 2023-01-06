var bodyBackgroundColor = "skyblue";
var knightsPlayer = 200;
var knightsEnemy = 100;
var longbowPlayer = 200;
var longbowEnemy = 100;
var crossbowPlayer = 150;
var crossbowEnemy = 100;
var spearPlayer = 150;
var spearEnemy = 100;
var Horses = 250;
var Trebuchets = 5;
var Catapults = 3;
var Ladders = 0;
var Siege_towers = 2;
var Battering_ram = 3;
var Movable_shields = 200; 
var money = 1000;

var dmg = [
	10,
	15,
	50,
	10,
	0,
	40,
	40,
	50,
	0
];


var knights_cost = 15;
var longbow_cost = 15;
var crossbow_cost = 10;
var spearPlayer_cost = 10;
var Horses_cost = 100;
var Trebuchets_cost = 300;
var Catapults_cost = 300;
var Ladders_cost = 10;
var Siege_towers_cost = 250;
var Movable_shields_cost = 10;
var Battering_ram_cost = 100;

var Max_Food = 100;
var Food = 100;
var FoodPer = (Food / Max_Food) * 100;
var Max_Walls = 100;
var Walls = 100;
var WallsPer = (Walls / Max_Walls) * 100;
var Max_People = 100;
var People = 100;
var PeoplePer = (People / Max_People) * 100;

updateBackgroundColor();
updateStats();

function updateBackgroundColor() {
	document.querySelector("body").style.backgroundColor = bodyBackgroundColor;
	document.querySelector(".turret").style.borderColor = bodyBackgroundColor;	
	document.querySelector("#t2").style.borderColor = "gray";	
	document.querySelector("#t3").style.borderColor = bodyBackgroundColor;	
	document.querySelector(".gate").style.backgroundColor = "dimgray";	
	document.querySelector(".gate").style.borderColor = "dimgray";	
}

function buy() {
	document.querySelector(".buyscreen").style.display = "block";	
	setTimeout(function(){	document.querySelector(".buyscreen").style.backgroundColor = "black";}, 250);	
	setTimeout(function(){	document.querySelector(".buyscreen").style.backgroundColor = "white";}, 750);	
	setTimeout(function(){	document.querySelector("content").style.display = "block";}, 1000);	
}

function unbuy() {
	setTimeout(function(){	document.querySelector(".buyscreen").style.backgroundColor = "black";}, 250);	
	setTimeout(function(){	document.querySelector(".buyscreen").style.backgroundColor = "rgba(0, 0, 0, 0.0)";}, 750);	
	setTimeout(function(){	document.querySelector("content").style.display = "none";}, 250);	
	setTimeout(function(){	document.querySelector(".buyscreen").style.display = "none";	}, 1000);
}

function updateStats() {
	//player
	FoodPer = (Food / Max_Food) * 100;
	WallsPer = (Walls / Max_Walls) * 100;
	PeoplePer = (People / Max_People) * 100;

	document.querySelector("#j1").innerHTML = knightsPlayer;
	document.querySelector("#j2").innerHTML = longbowPlayer;
	document.querySelector("#j3").innerHTML = crossbowPlayer;
	document.querySelector("#j4").innerHTML = spearPlayer;
	document.querySelector("#j5").innerHTML = Horses;
	document.querySelector("#j6").innerHTML = Trebuchets;
	document.querySelector("#j7").innerHTML = Catapults;
	document.querySelector("#j8").innerHTML = Ladders;
	document.querySelector("#j9").innerHTML = Siege_towers;
	document.querySelector("#j10").innerHTML = Movable_shields;
	document.querySelector("#j11").innerHTML = Battering_ram;
	//enemy
	document.querySelector("#k1").innerHTML = knightsEnemy;
	document.querySelector("#k2").innerHTML = longbowEnemy;
	document.querySelector("#k3").innerHTML = crossbowEnemy;
	document.querySelector("#k4").innerHTML = spearEnemy;
	document.querySelector("#k5").innerHTML = Math.round(FoodPer);
	document.querySelector("#k6").innerHTML = Math.round(WallsPer);
	document.querySelector("#k7").innerHTML = Math.round(PeoplePer);
	//buyscreen
	document.querySelector("#l1").innerHTML = knightsPlayer;
	document.querySelector("#l2").innerHTML = longbowPlayer;
	document.querySelector("#l3").innerHTML = crossbowPlayer;
	document.querySelector("#l4").innerHTML = spearPlayer;
	document.querySelector("#l5").innerHTML = Horses;
	document.querySelector("#l6").innerHTML = Trebuchets;
	document.querySelector("#l7").innerHTML = Catapults;
	document.querySelector("#l8").innerHTML = Ladders;
	document.querySelector("#l9").innerHTML = Siege_towers;
	document.querySelector("#l10").innerHTML = Movable_shields;
	document.querySelector("#l11").innerHTML = Battering_ram;
	document.querySelector("m").innerHTML = money;
}

function buysome(num) {

	if (num == 1) { if (money >= knights_cost) {       knightsPlayer++; money -= knights_cost;}}
	else if (num == 2) { if (money >= longbow_cost) {  longbowPlayer++; money -= longbow_cost;}}
	else if (num == 3) { if (money >= crossbow_cost) {  crossbowPlayer++; money -= crossbow_cost;}}
	else if (num == 4) { if (money >= spearPlayer_cost) {  spearPlayer++; money -= spearPlayer_cost;}}
	else if (num == 5) { if (money >= Horses_cost) {  Horses++; money -= Horses_cost;}}
	else if (num == 6) { if (money >= Trebuchets_cost) {  Trebuchets++; money -= Trebuchets_cost;}}
	else if (num == 7) { if (money >= Catapults_cost) {  Catapults++; money -= Catapults_cost;}}
	else if (num == 8) { if (money >= Ladders_cost) {  Ladders++; money -= Ladders_cost;}}
	else if (num == 9) { if (money >= Siege_towers_cost) {  Siege_towers++; money -= Siege_towers_cost;}}
	else if (num == 10) {if (money >= Movable_shields_cost) { Movable_shields++; money -= Movable_shields_cost;}}
	else if (num == 11) {if (money >= Battering_ram_cost) { Battering_ram++; money -= Battering_ram_cost;}}
	updateStats();
}

function calcDMG()
{
	var KnightDMG = dmg[0] * document.querySelectorAll(".kightclass").length;
	var LongbowDMG = dmg[1] * document.querySelectorAll(".longbowclass").length;
	var CrossbowDMG = dmg[2] * document.querySelectorAll(".crossbowclass").length;
	var SpearDMG = dmg[3] * document.querySelectorAll(".spearclass").length;
	var HorseDMG = dmg[4] * document.querySelectorAll(".horseclass").length;

	return [KnightDMG, LongbowDMG, CrossbowDMG, SpearDMG, HorseDMG];
}

function Attack()
{
	everyThing = 0;
	var DMG = calcDMG();
	var totalDMG = 0;
	for (var i = 0; i < DMG.length; i++) {
		totalDMG += DMG[i];
	}
	Walls -= DMG[0] * 0.1;
	People -= DMG[1] * (10 / Math.abs(WallsPer));
	People -= DMG[2] * (10 / Math.abs(WallsPer));
	Walls -= DMG[3] * 0.1;
	Walls -= DMG[4] * 0.1;
	if (totalDMG >= 1) {
		Food -= (People / 100);
	}
	updateStats();
	if (PeoplePer <= 0) {
		//location.reload();
	}
	if (FoodPer <= 0) {
		People -= 10;
	}
	everyThing = 0;
	document.querySelector("#main").innerHTML = "";

}

var i = 0;
var knight;
function PreAttack()
{
	i = 0;
	knight = document.querySelectorAll(".kightclass");
	var interval = setInterval(move, 1000 / 60);

	// Attack();
}

function move()
{
	for(var j = knight.length - 1; j >= 0; j--)
	{
		if(knight[j].style.left != "1200px")
		{
			knight[j].style.left = (i * 3) + "px";
			console.log("huhg");
		}
		else {
			knight[j].remove();
		}
	}
	i+= 1;
}