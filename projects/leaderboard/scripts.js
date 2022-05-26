var tabs= document.querySelectorAll(".lboard_tabs ul li")
var today=document.querySelector(".today")
var month=document.querySelector(".month")
var year=document.querySelector(".year")
var items=document.querySelector(".lboard_item")

tabs.forEach(function(tab)
{
    tab.addEventListener("click",function()
    {
        var dl=tab.getAttribute("data-li");
        tabs.forEach(function(tab)
        {
            tab.classList.remove("active");
        })
        tab.classList.add("active");

        items.forEach(function(item)
        {
            item.style.display="none"
        })
        if(dl=="today")
        {
            today.style.display="block";
        }
        else if(dl=="month")
        {
            month.style.display="block";
        }
        else if(dl=="year")
        {
            year.style.display="block";
        }
    })
})

