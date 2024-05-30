let interestsContainerEle = document.getElementById("interestsContainer");
let breakEle = document.createElement("br");
let headingEle = document.createElement("h1");
headingEle.textContent = "Choose your interests";
interestsContainerEle.appendChild(headingEle);
let inputEle1 = document.createElement("input");
inputEle1.setAttribute = ("type", "checkbox");
inputEle1.id = "music";
inputEle1.type="checkbox";



let labelEle1 = document.createElement("label");
labelEle1.textContent = "Music";
labelEle1.setAttribute = ("for", "music");


interestsContainerEle.appendChild(inputEle1);
interestsContainerEle.appendChild(labelEle1);
interestsContainerEle.appendChild(breakEle);
let inputEle2 = document.createElement("input");
inputEle2.setAttribute = ("type", "checkbox");
inputEle2.id = "dance";
inputEle2.type="checkbox";

let labelEle2 = document.createElement("label");
labelEle2.textContent = "Dance";
labelEle2.htmlFor = "dance";

interestsContainerEle.appendChild(inputEle2);
interestsContainerEle.appendChild(labelEle2);