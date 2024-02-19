const over=document.querySelectorAll('td')
for(let i=0;i<over.length;i++)
{
    over[i].addEventListener(
        "mouseover", 
        function ()
        {
            over[i].style.backgroundColor = "orange";
        });
    over[i].addEventListener(
        "mouseout", 
        function ()
        {
            over[i].style.backgroundColor = "white";
        });
}





let i=1;
const button = document.querySelector("#res");
button.onclick = function ()
{
    button.append(i)
    i++;
}