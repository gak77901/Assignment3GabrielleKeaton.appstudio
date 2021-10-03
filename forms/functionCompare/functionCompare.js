/*
Get the desired new password from the user twice in the main program. 
Create a function named 'Compare' that takes two arguments (pass1, pass2) and is called from the main program.
Call the function from the main program and pass the two passwords to the function.
The function returns 'true' if the two passwords passed in were the same, or 'false' if they were  not the same.
Hint: .localeCompare() is a handy string method..... (see https://www.w3schools.com/jsref/jsref_localecompare.asp (Links to an external site.) )
The variables used inside the function must be declared in the function (the function parameters, etc). No global variables (ie. declared outside the function) may be used in the function.  
*/

function Compare(pass1, pass2) {
  if (pass1 == pass2) {
    console.log(`The passwords are the same.`)
  } else {
    console.log(`The passwords are not the same.`)
  }
}

let password1 = prompt("Enter a password:")
let password2 = prompt("Re-enter a password:")

let passwordCompare = Compare(password1,password2)


