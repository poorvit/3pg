// // // hey there
// // /* hi 
// // hello 
// // */
// // /*let a = '23';
// // let b=true;
// // let c  = undefined;
// // let d = null;

// // console.log(typeof a);
// // console.log(typeof b);
// // console.log(typeof c);
// // console.log(typeof d);

// // let name='abc', age=23;

// // let users ={
// //     name:'123',
// //     age:34,

// // }
// // let a = 2;
// // let b = 3;
// // console.log(`${a} is greater than ${b}: ${a > b}`)*/

// // let a='30 days of Javascript';
// // console.log(a.toUpperCase());
// // console.log(a.substring(0,4));
// // console.log(a.slice(3));

// function register(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
            
//             resolve();
//             console.log("registration done");
//         },1000);
//     });
    
// };
// function sendEmail(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("email sent");
//             resolve();
//         },1000);
//     });
    
// }
// function login(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("loggeed in");
//             resolve('logged in with gmail');
//         },1000);
//     });
    
// }
// function getUserData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
            
//             // return reject("error while fetching the data");
//             console.log("get data");
//             resolve();
//         },1000);
//     });
    
// }
// function displayUserData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("display data");
//             resolve();
//         },1000);
//     });
    
// }
// //callback.hell
// // register(function()
// // {
// //     sendEmail(function()
// //     {
// //         login(function()
// //         {
// //             getUserData(function()
// //             {
// //                 displayUserData()
// //             });
// //         });
// //     });
// // });

// //promises

// // register()
// // .then(sendEmail)
// // .then(login)
// // .then(getUserData)
// // .then(displayUserData)
// // .catch((err)=>{
// //     console.log("Error:",err)
// // });

// // async await
// async function authenticate(){
//     try{
//                     await register();
//                     await sendEmail();
//     const messege= await login();
//                     await getUserData();
//                     await displayUserData();
//                     console.log(messege);
//     }catch(err){
//         console.log(err)
//         throw new Error();
//     }
// };
// // ayns await function returns
// authenticate().then(()=>{
//     console.log("done");
// })
// .catch((err)=>{
//     console.log(err)
// });
// console.log("Other application work!");
const cont=document.querySelector('#country');
const mybutton=document.querySelector('#button')
function display(item){
  const card= document.createElement('div');
  card.classList.add('card');
  const name= document.createElement('h1');
  name.innerHTML=item.name;
  const capital= document.createElement('h3');
  capital.innerhtml=item.capital;
  const language= document.createElement('h4');
  language.innerhtml=item.language;
  const population= document.createElement('h4');
  population.innerHTML=item.population
  const area= document.createElement('h4');
  area.innerHTML=item.area;
  
  card.appendChild(name);
  card.appendChild(capital);
  card.appendChild(population);
  card.appendChild(language);
  card.appendChild(area);
  cont.appendChild(card);
}
function content(data){
  data.forEach((item) => {
      display(item);
  });
}

 // countries api
mybutton.addEventListener('click',function(){
  fetch('https://restcountries.com/v2/all')
  .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
    // getting the data
    content(data)
})
});



