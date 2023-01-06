var kCount = 0;
var lCount = 0;
var cCount = 0;
var sCount = 0;
var everyThing = 0;

var size = [
  1,
  0.5,
  1,
  1,
  1,
  40,
  40,
  50,
  0
];

function addKnight() {
	if (knightsPlayer > 0 && everyThing < 18) {
    knightsPlayer--;
		document.querySelector(CreateElement("div", "main", {id: "k"+kCount, class: "kightclass"})).style.left = "0px";
		kCount++;
    everyThing += size[0];
	}
}

function addLongbow() {
  if (knightsPlayer > 0 && everyThing < 18) {
    longbowPlayer--;
    CreateElement("div", "main", {id: "l"+lCount, class: "longbowclass"});
    lCount++;
    everyThing += size[1];
  }
}

function addCrossbow() {
  if (knightsPlayer > 0 && everyThing < 18) {
    crossbowPlayer--;
    CreateElement("div", "main", {id: "c"+cCount, class: "crossbowclass"});
    cCount++;
    everyThing += size[2];
  }
}

function addSpear() {
  if (knightsPlayer > 0 && everyThing < 18) {
    spearPlayer--;
    CreateElement("div", "main", {id: "s"+sCount, class: "spearclass"});
    sCount++;
    everyThing += size[3];
  }
}

function CreateElement(type, path, attributes)
{
  document.querySelector("#button").style.display = "inline-block";
  const parent = document.querySelector("#" + path);
  const el = document.createElement(type);
  for(var attribute in attributes)
  {
    el.setAttribute(attribute, attributes[attribute]);
  }
  parent.appendChild(el);
  updateStats();
  return "#" + attributes["id"];
}