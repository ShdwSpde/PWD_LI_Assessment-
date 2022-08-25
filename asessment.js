/* Problem 1 */
/* Skill: Git
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/
//YOUR CODE HERE
git switch HEAD-5
git branch -b testbranch
  
/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 

API ENDPOINT: https://www.reddit.com/r/react.json

complete the code as per the given instructions:
*/


class APICaller extends React.Component{
  callApi(){
    //#1 Implement a fetch method with the given API ENDPOINT
    // YOUR CODE HERE 
    fetch("https://www.reddit.com/r/react.json")
      .then((result)=>{ 
      //#2 Return the result in json format
      //YOUR CODE HERE 
      result.json())
    }).then((jsonData)=>{
      //#3 Print/log the jsonData in the console of the browser
      //YOUR CODE HERE 
      console.log(jsonData))
    })
  }
render(){
  return <div>
    <button 
  //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked. 
  // YOUR CODE HERE 
    onclick="callApi()">Call API</button>
  </div>
}
}
React.render(
  //#5 Implement the APICaller component appropiately into the render method
  //YOUR CODE HERE 
  , document.getElementById('myapicaller')
)


/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.

Please write an example of a recursive function, and comment each line 

*/
/*EXPLANATION HERE (1 paragraph)

A recursive function is a function that calls upon itself repeatedly until a stopping condition is met. Usually it is composed of an if-statement
that governs the base case or initial conditions whereupon you can exit the loop. Then there is usually an else statement where we are using the stated 
function repeatedly to check other incremental cases until a solution is reached
 */

function myRecursiveFunction(){
  //YOUR CODE WITH COMMENTS HERE
  if (number < 0)   //  checks if the number is negative
  {
    number = Math.abs(number);  // takes the absolute value of the number
  }
  if (number===0) // if the number is equal to 0 it sets the answer to true. 
  {
    return true;
  }
  if (number===1) 
  {
    return false; // if the number is one, it is odd and flase
  }
  else 
  {
    number = number - 2; // here the function will progressively run through this check subtracting 2 each time, as opposed to using the modulus 
    return is_even_recursion(number); // after running enough times, you would either get to a remainder of 1 or 0 and thus exit the loop
  }
}


/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* Sorting algorithms intro explanation HERE (1-2 paragraphs)

When we speak about sorting, we are typically thinking of ways to redistribute indexed elements in an array. We can sort
based upon lowest and highest numerical values and even ASCII values. There are many different ways to sort, some more 
complex than others*/


/*Bubble sort example HERE*/

71639 => 17639
17639 => 16739
16739 => 16379
16379 => 16379

16379 => 16379
16379 => 13679
13679 => 13679
13679 => 13679

13679 => 13679
13679 => 13679
13679 => 13679
13679 => 13679






/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/house-robber/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/

/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 

https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/

and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.

/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6

LINK TO YOUR REPO HERE
*/

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 

//Your explanation HERE
*/

/* Problem 9 */
/* 
Skill: Node/Express

How would you explain what Node and Express do to a beginner learner with no experience in server side programming?

Your explanation HERE (2 paragraphs)
*/

/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/
