
function insertText(){
	document.getElementById("newContent").innerHTML = "Some new text: <br> Hello <br>";
}

function calculate(){
var t = widthBox.value;

var w = document.getElementById("widthBox").value;
var l = document.getElementById("lengthBox").value;
var h = document.getElementById("heightBox").value;

// convert to float.

w = parseFloat(w);
l = parseFloat(l);
h = parseFloat(h);
var result1 = w*h*l;

//show result in div.

document.getElementById("result").innerHTML = result1;
}

function multiplication(){
//read from textBox
document.getElementById("mult-tb").innerHTML = "";
var f = document.getElementById("factor").value;
for (var i =1; i<=10; i++){
var res = f*i;
//show result in div
document.getElementById("mult-tb").innerHTML += res+"<br>";
}
}
