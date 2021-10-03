/*
Get as many cities from the user as they want - stop getting cities when the user says to stop. 
The user can use any case mixture in their input (eg. SAN FranciSCO)
Cities go into an array named 'cities'.  
When city input is done, use a while loop that outputs to the console each city on its' own line in all lower case, using a template literal.
*/

let wantToContinue = true
let cities = []
let enterCity = ""

while (wantToContinue) {
  let enterCity = prompt("Enter a city:");
  cities.push(enterCity)
  wantToContinue = confirm("Do you want to enter another city")
  }

i = 0

while (i < cities.length) {
  console.log(cities[i].toLowerCase())
  i = i + 1
  }

