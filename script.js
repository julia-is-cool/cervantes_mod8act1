document.getElementById("ppic").src = "photo.jpg";
var name = prompt("What is your name?");
document.getElementById("fname").innerHTML = name; 
var gender;
if (confirm("Press OK for Female and Cancel for Male.")==true){
	document.getElementById("gender").innerHTML = "F";
}
else{
	document.getElementById("gender").innerHTML = "M";
}
var user = prompt("Please input username:"); 
document.getElementById("username").innerHTML = user;
var descrip = prompt("Describe yourself!");
document.getElementById("desc").innerHTML = descrip;
var birthYear = prompt("What year were you born?")
document.getElementById("year").innerHTML = birthYear;
year = new Date().getFullYear();
var age = year - birthYear;
document.getElementById("age").innerHTML = age;
