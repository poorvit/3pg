//query selector
//create element
//
const root = document.querySelector('#root');
const button = document.querySelector('button')

function create(item){
    //getting card
    const card = document.createElement('div');
    card.classList.add('card');

    //getting photos
    const photo = document.createElement('img')
    photo.src=item.thumbnailUrl;
    //geting tite
    const title= document.createElement('h4');
    title.innerHTML=item.title;

    card.appendChild(photo);
    card.appendChild(title);
    root.appendChild(card);

}
function displayImages(items){
    items.forEach(function(item) {
        create(item)
    });
}
button.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>res.json())
    .then((items)=>{
        displayImages(items);
    })
});

