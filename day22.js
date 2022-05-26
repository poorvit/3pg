const cont=document.querySelector('#root');
//const mybutton=document.querySelector('#btn')
function display(item){
const card= document.createElement('div');
card.classList.add('card');
const name= document.createElement('h1');
name.innerHTML=item.name;
//   const capital= document.createElement('h3');
//   capital.innerhtml=item.capital;
//   const language= document.createElement('h4');
//   language.innerhtml=item.language;
//   const population= document.createElement('h4');
//   population.innerHTML=item.population
//   const area= document.createElement('h4');
//   area.innerHTML=item.area;

card.appendChild(name);
//   card.appendChild(capital);
//   card.appendChild(population);
//   card.appendChild(language);
//   card.appendChild(area);
newDiv.appendChild(card);




}
var newDiv;
function content(data){
    data.forEach((item) => {
    newDiv=document.createElement("div");
    // console.log("abc");
    newDiv.classList.add('box');
    cont.appendChild(newDiv);
    display(item);
    });

}


 // countries api
//mybutton.addEventListener('click',function(){
fetch('https://restcountries.com/v2/all')
  .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
    // getting the data
    content(data)
})
//});