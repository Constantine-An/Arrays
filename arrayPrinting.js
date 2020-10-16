function printArray(){
var text, fLen, i;
var student = ["An", "JM", "Eric", "Ken"];
fLen = student.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + student[i] + "</li>";
}
	text += "</ul>";
	document.getElementById("array").innerHTML = text;
}

function printArray2()
{
var text, fLen, i;
var animal = ["pig", "dog", "panda", "bird"];
fLen = animal.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + animal[i] + "</li>";
}
	text += "</ul>";
	document.getElementById("array2").innerHTML = text;
}
 function makeArrayMultiples() {
var value = prompt("enter a value");
var multiple17 = [value];
var text;
var i;
for (i = 2; i < 11; i++) {
  multiple17.push(i*value);
}
  document.getElementById("multiple17").innerHTML = multiple17;
}
function creatArrayWords() {
  var words = ["I", "Love", "Bats."];
  var text = "";
  for (var i = 0; i < words.length; i++) {
    text += words[i] + " ";
  }
  document.getElementById("wordsList").innerHTML = text;
}
