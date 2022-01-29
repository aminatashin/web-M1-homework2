/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20
console.log(sum)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe"

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let y = x - 12

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"
name1 !== name2
console.log(name1.toLowerCase()===name2.toLowerCase())

/* EXERCISE 8
 Create a variable named k, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let k = 8
if(k===1){
console.log('one')
}else if(k===5){
console.log('five')
}else if(k===8){
console.log("eight")
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let o = (k===8) ? 'eight' : 'one'
console.log(o)