let num1;
let num3;
let resultAnswer;
let operator;
let add;
let subtract;
let multiply;
let divide;
let points = 0;
//THIS WILL GET THE RANDOM NUMBER THAT WILL BE USED IN MATH QUIZ
document.getElementById("generate").onclick = function () {
    num1 = Math.floor(Math.random() * 10 + 1);
    num3 = Math.floor(Math.random() * 10 + 1);


    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num3").innerHTML = num3;
}
//THIS AREA WILL GET THE OPERATOR AND LATER WILL CONVERT THEM
add = document.getElementById("add");

document.getElementById("add").onclick = function(){
  document.getElementById("op").innerHTML = '+';
 operator = '+';
   
}
document.getElementById("subtract").onclick = function(){
document.getElementById("op").innerHTML = '-';
}
document.getElementById("multiply").onclick = function(){
document.getElementById("op").innerHTML = 'x';
}
document.getElementById("divide").onclick = function(){
document.getElementById("op").innerHTML = '/';
}
//THIS AREA WILL DETERMINE IF THE ANSWER IS CORRECT OR WRONG
document.getElementById("submit").onclick = function(){
if(operator == '+'){
 resultAnswer = num1 + num3;
  if(document.getElementById("answer").value == resultAnswer){
     window.alert("YOU ARE CORRECT!");
     points += 5;
    document.getElementById("score").innerHTML = points;
   }
}

}
    
//
//let name = "IAN JOHN";
//
//let firstName = name.slice(0, name.indexOf(" ")).toLocaleUpperCase().trim();
//let lastName = name.slice(name.indexOf(" ")+1).toUpperCase().trim();
//
//console.log(firstName);
//console.log(lastName);

//let age;
//
//document.getElementById("button").onclick = function(){
//   age = document.getElementById("age").value;
//
//   if(age >= 65){
//    window.alert("YOU ARE SENIOR");
//    }else if(age == false){
//    window.alert("PLEASE ENTER YOUR AGE");
//    }else if(age < 0){
//    window.alert("IT IS OVERATED!");
//}else if(age >=18){
//window.alert("YOU ARE LEGAL")
//}
//else{
//window.alert("YOU ARE MINOR");
//}
