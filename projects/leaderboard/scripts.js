const lb= document.querySelector('.board');
const ap= document.querySelector('.btn');

ap.addEventListener('click',()=>{
    const Firstname=document.querySelector('#First').value;
    const Lastname=document.querySelector('#Last').value;
    const Country=document.querySelector('#Country').value;
    const Score=document.querySelector('#Score').value;

    // const card=document.createElement('div');
    // card.classList.add('card');

    const list = document.createElement('div');
    list.classList.add('list');

    const task=document.createElement('input');
    task.classList.add('task');
    task.value=Firstname+" "+Lastname+" "+Country+" "+Score;
    // task.value=Lastname;
    // task.value=Country;
    task.setAttribute('readonly','true');
    list.appendChild(task);
    lb.appendChild(list);
});