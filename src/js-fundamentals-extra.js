// SecondsInHours
//
// Create a function that takes a number of hours and returns the number of 
// seconds in those hours. 
//
// Remember to update the module.exports definition at the bottom of the file
// with a reference to your function.
//
// TODO: write code below

function secondsInHours(hours) {
  return hours * 3600
}
// MilesTravelled
//
// Create a function that takes a number representing speed in miles per hour,
// a duration in minutes, and returns the distance travelled in miles rounded
// *up* to the nearest whole mile. You can use the Math.ceil function to
// perform the rounding. You can assume only whole numbers will be provided
// to the function.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below


function milesTravelled(speed, minutes) {

  const hoursTravelled = minutes / 60

  const miles = speed * hoursTravelled

  return Math.ceil(miles)

}


// KilometersToMiles
//
// Create a function that takes a number of kilometers and converts it to miles. 
// For this task assume there are exactly 1.6 kilometers in a mile. The returned 
// mile distance should be rounded to the nearest mile. You can  use the Math.round
// function to do this.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function kilometersToMiles(kilometers) {
  const miles = kilometers / 1.6
  return Math.round(miles)
}




// MakeSentence
//
// Create a function that takes a string and returns the same string with the 
// first letter capitalized and a full stop added on to the end. If the string 
// already ends with a full stop, question mark (?) or an exclamation mark(!) 
// then a full stop should not be added.
//
// You may need to the use `String.substring` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function makeSentence(string) {
  let capitalLetter = string.charAt(0).toUpperCase()

  const lastCharacter = string.charAt(string.length - 1)

  const sentence = capitalLetter + string.substring(1)

  if (lastCharacter !== '.' && lastCharacter !== '!' && lastCharacter !== '?') {
    return sentence + '.'
  }
  return sentence
}



// FileExtension
//
// Create a function that takes a filename as a string and returns the file extension
// - i.e. `image.png` should return `png`. If the file has no extension then an empty
// string should be returned. You may need to the use `String.substring` method and
// the `String.lastIndexOf` method.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function fileExtention(fileName) {
  const dot = '.'

  if (!fileName.includes(dot)) {
    return ''
  }

  return fileName.substring(fileName.lastIndexOf(dot)+1)
 /* return fileName.substring(fileName.length - 3) */

}


// Range
//
// Create a function that takes an array of numbers and returns the difference 
// between the highest and lowest numbers in the array. You can assume the array
// will always contain at least 1 number (it will never be empty)
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function range(numbers) {

  let highestNumber = Math.max(...numbers)
  let lowestNumber = Math.min(...numbers)

  return highestNumber - lowestNumber

}

// CheckTransactions
//
// Create a function that checks if a list of banking transactions is valid for 
// a given account. 
//
// The function should accept 3 arguments. The first is an array containing a 
// list of transactions to apply to the account balance. Positive numbers are 
// deposits and negative numbers are withdrawals. The second argument is the 
// account starting balance and the third is the account overdraft. The function
// should return false if applying the list of transactions causes the account
// balance to go below the overdraft value at any point.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function CheckTransactions (transactions, balance, overdraft) {
for (let i = 0; i<transactions.length;i++) {
  const transaction = transactions[i]
 balance = balance + transaction
}
 if (balance < -overdraft) {
 return false
 }
return true
}


// FilmsInGenre
//
// Create a function that takes an array of film objects, a film genre, and returns
// an array of film names that match the supplied genre. Each film object contains a 
// `name` key that contains the film name and a 'genre' key that contains an array 
// of strings describing what genres the film belongs to. See the spec file for
// example data.
//
// Remember to update the module.exports definition at the bottom of the file 
// with a reference to your function.
//
// TODO: write code below

function filmsInGenre (films, genre) {
  const names = []
for (let i=0; i<films.length; i++) {
  const film = films[i]

  if (film.genres.includes(genre)) {
    names.push(film.name)
  }
}
return names
}


// TODO: change undefined to be the name of the functions you defined
module.exports = {
  //SecondsInHours
  a: secondsInHours,

  //MilesTravelled,
  b: milesTravelled,

  //KilometersToMiles,
  c: kilometersToMiles,

  //MakeSentence
  d: makeSentence,

  //FileExtension
  e: fileExtention,

  //Range
  f: range,

  //CheckTransactions
  g: CheckTransactions,

  //FilmsInGenre
  h: filmsInGenre,
}
