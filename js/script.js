var vacationType = ("Musical");("Tropical"); ("Adventurous"); 
var groupSize = ("<= 2"); ("===3 || <=5"); (">= 6"); 
var Destination = ("New Orleans");("Beach Vacation in Mexico");("Whitewater Rafting the Grand Canyon");
var travelSuggestion = ("First Class");("Helicopter");("Charter Flight");
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");
 
var vacationType = prompt("Does Musical, Tropical or Adventurous sound like a fun trip?"); console.log(vacationType); {
if (vacationType = "Musical" || "Tropical" || "Adventurous") 
var groupSize = prompt("In total how many people will be going on this trip?") ; console.log(groupSize) ;} {

if (groupSize = "<= 2" && vacationType === "Musical") {
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");  
let Destination = "New Orleans"; let travelSuggestion = "First Class"; console.log (result) ;} 

else if (groupSize = "===3 || <=5" && vacationType === "Musical") {
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");  
let Destination = "New Orleans"; let travelSuggestion = "Helicopter";  console.log(result) ;}

else if (groupSize = ">= 6" && vacationType === "Musical") {
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");
let Destination = "New Orleans"; let travelSuggestion = "Charter Flight";  console.log(result) ;}


else if (groupSize = "<= 2" && vacationType === "Tropical") {
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");
let Destination = "Beach Vacation in Mexico"; let travelSuggestion = "First Class" ; console.log(result) ; }

else if (groupSize = "===3 || <=5" && vacationType === "Tropical") { 
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");
let Destination = "Beach Vacation in Mexico"; let travelSuggestion = "Helicopter" ; console.log(result) ; }

else if (groupSize = ">= 6" && vacationType === "Tropical") { 
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");
let Destination = "Beach Vacation in Mexico"; let travelSuggestion = "Charter Flight" ; console.log(result) ; } 


else if (groupSize = "<= 2" && vacationType === "Adventurous") {
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");
let Destination = "Whitewater Rafting the Grand Canyon"; let travelSuggestion = "First Class" ; console.log(result) ; }

else if (groupSize = "===3 || <=5" && vacationType === "Adventurous") {
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");
let Destination = "Whitewater Rafting the Grand Canyon"; let travelSuggestion = "Helicopter" ; console.log(result) ; }

else if (groupSize = ">= 6" && vacationType === "Adventurous") {
var result = ("For a " + vacationType + " trip I suggest going to " + Destination + " on " + travelSuggestion + " that fits " + groupSize + " people.");    
let Destination = "Whitewater Rafting the Grand Canyon"; let travelSuggestion = "Charter Flight" ; console.log(result) ; } }