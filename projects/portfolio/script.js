let i=0;
let footer=["JAVASCRIPT","REACT","PYTHON","REDUX","HTML","MONGODB","NUMPY"];
let header=["MOTIVATOR","INSTRUCTOR","EDUCATOR","TEACHER","PROGRAMMER","SPEAKER","STUDENT"];

let ele=document.getElementById("wss");
let move=document.getElementById("move");
function next()
{
        i++;
        ele.style.opacity=0;
        move.style.opacity=0;
        if(i>(footer.length-1)|| i>(header.length-1))
        {
            i=0;
        }
    setTimeout('slide()',1000);
    
}

function slide()
{
    ele.innerHTML=footer[i];
    ele.style.opacity=1;
    move.innerHTML=header[i];
    move.style.opacity=1;
    setTimeout('next()',2000)
}
slide();
