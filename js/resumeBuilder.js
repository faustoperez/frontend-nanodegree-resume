/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append("Fausto");


 // var awesomeThoughts = "I am Fausto and I am AWESOME!";

 // console.log(awesomeThoughts);

 // var email = "fausto@udacity.com";

 // var newEmail = email.replace("udacity", "gmail");

 // console.log(email);
 // console.log(newEmail);

 // var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 // console.log(funThoughts);

 // $("#main").append(funThoughts);


var name = "Fausto";
var role = "Designer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header")
 	.append(formattedName)
 	.append(formattedRole);
