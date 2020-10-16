function makeStudent() {
    
    var student1 = {name:"Constantine", mathMk :0, engMk: 0, csMk: 0, Average : function() {return 
        (this.mathMk/3+this.engMk/3+this.csMk/3)}};
    var student2 = {name:"Jasmine", mathMk :0, engMk: 0, csMk: 0, Average : function() {return 
            (this.mathMk/3+this.engMk/3+this.csMk/3)}}; 
    var student3 = {name:"Sandy", mathMk :0, engMk: 0, csMk: 0, Average : function() {return 
            (this.mathMk/3+this.engMk/3+this.csMk/3)}}; 

var students =[student1,student2,student3];
for (var i = 0; i <3; i ++) {
    students[i].name = prompt ("What is the student name?");
    students[i].mathMk = prompt ("What is the math mark of the student")
    students[i].engMk = prompt ("What is the english mark of the student?")
    students[i].csMk = prompt ( "What is the copmputer science mark?")
}
document.getElementById("S1Name").innerHTML = student1.name;
document.getElementById("S1Math").innerHTML = student1.mathMk;
document.getElementById("S1Eng").innerHTML = student1.engMk;
document.getElementById("S1CS").innerHTML = student1.csMk;
document.getElementById("S1Average").innerHTML = student1.Average();

document.getElementById("S2Name").innerHTML = student2.name;
document.getElementById("S2Math").innerHTML = student2.mathMk;
document.getElementById("S2Eng").innerHTML = student2.engMk;
document.getElementById("S2CS").innerHTML = student2.csMk;
document.getElementById("S2Average").innerHTML = student2.Average();

document.getElementById("S3Name").innerHTML = student3.name;
document.getElementById("S3Math").innerHTML = student3.mathMk;
document.getElementById("S3Eng").innerHTML = student3.engMk;
document.getElementById("S3CS").innerHTML = student3.csMk;
document.getElementById("S3Average").innerHTML = student3.Average();
}