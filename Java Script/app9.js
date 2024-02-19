const block = document.querySelector("#block");
const forma = document.querySelector("#forma");
const button = document.querySelector("#button");

const url = "https://reqres.in/api/unknown";
const req = new XMLHttpRequest();
req.open("GET", url);
req.responseType="json";
req.onload = () => {
    button.onclick = function()
    {
        let data = req.response;
        for (let i of data['data'])
        {
            block.style.backgroundColor = i.color;
            if (i.color != forma.value)
            {
                block.style.backgroundColor = forma.value;
            }
        }
    }
}
req.send();