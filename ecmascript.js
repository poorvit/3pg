/*let and const are block scoped
var  is function scope ,it pollute our code
can access var outisde the block scope
it can completely override the previouse variable
if any var variable is not in fucntion it directly 
get attached to window object it doesnot happenf with let 
with let and const we have only one difference we cannot 
change the  value of a variable

advantage of var is browser support*/

// const age={
//     years:19,
// }
// age.years=20;
// console.log(age);

/*arrow function
const adc=()=>console.log("HI it's me")
const add=a=>console.log(a+a);
add(5);
beat use of arrow function is with this
this returns the window object showing
the parent property but now with the case of 
simple fucntion
*/
//it act as an object
// const shope={
//     puerchase(){
//         console.log(this)
//     }
// }
// shope();
// /*window object , this doesnot have it own 
// constext in arrow function */
// const shop={
//     purchase:()=>{
//         console.log(this)
//     }
// }
// shop();

// const myButton= document.querySelector("#myButton");

// const shop={
//         price:100,
//         buy:function(){
//             const self=this;
//             myButton.addEventListener('click',function()//()=>
//             {
//                 console.log('I spent '+self.price)
//             })
//         }
//     }
//     shop.buy();

/* tempelate litrals aka backticks it helps for new line and 
concatenation of two variables*/
const name ='bob';
const messege=`hello ${name}

how are you`;
console.log(messege);