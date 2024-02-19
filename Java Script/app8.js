const button1 = document.querySelector("#b1");
const button2 = document.querySelector("#b2");
const button3 = document.querySelector("#b3");
const head = document.querySelector("h1");
const text = document.querySelector("p");
const body = document.querySelector("body")

button1.onclick = function change()
{
    text.style.color = "aquamarine";
    head.style.color = "deepSkyBlue";
    body.style.backgroundColor = "indigo";
    localStorage.setItem("1", "dark");
}
button2.onclick = function()
{
    text.style.color = "blue";
    head.style.color = "darkslateblue";
    body.style.backgroundColor = "white";
    localStorage.setItem("2", "light");
}
button3.onclick = function()
{
    text.style.color = "Blue";
    head.style.color = "orangeRed";
    body.style.backgroundColor = "gold";
    localStorage.setItem("3", "colorfull");
}