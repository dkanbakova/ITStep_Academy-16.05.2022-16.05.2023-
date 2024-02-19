// const button1 = document.querySelector("#b1");
// const button2 = document.querySelector("#b2");
// const number = document.querySelector("#block")
// button1.onclick = function()
// {
//     let j=11;
//     number.append(i);
//     j++;
// }

// button2.onclick = function()
// {
//     let j=11;
//     number.append(i);
//     j=j-1;
// }

// Есть затруднения с 1 заданием



const button1 = document.querySelector("#red");
const button2 = document.querySelector("#yellow");
const button3 = document.querySelector("#purple");
const button4 = document.querySelector("#green");
const button5 = document.querySelector("#orange");
const button6 = document.querySelector("#blue");
const text = document.querySelector("#text");
button1.onclick = function()
{
    text.style.color = "red";
}
button2.onclick = function()
{
    text.style.color = "yellow";
}
button3.onclick = function()
{
    text.style.color = "purple";
}
button4.onclick = function()
{
    text.style.color = "green";
}
button5.onclick = function()
{
    text.style.color = "orange";
}
button6.onclick = function()
{
    text.style.color = "blue";
}