// Create one function with zero parameter having a console statement;

// function para(){
//     var str = 0;
//     console.log(str);
// } 
// para();

//or:

// var str = function(){
//     console.log(str);
// }
// ()


// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

// function print(a,b){
//     console.log(a+b);

// }
// print(3,4)

//Create one arrow function:

//  let result = cb(()=>{
//     //  console.log("hi all");

//  })
//  console.log(result);


 //Print output: 4
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();


//"Print output:5

// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };

// "Print output:6

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };

// Write a function that accepts parameter n and returns factorial of n:7

function cb(a) 
{ 

  if (a === 0)
 {
    return 1;
 }
  return a * cb(a-1);
         
}
console.log(cb(5));
                   

