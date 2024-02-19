function sen(sentence)
{
    new_sen=sentence.split(" ");
    console.log(new_sen.length)
}
sen("Hello how are you?")



function amount(sentence)
{
    for (let value in sentence)
    {
        console.log(value);
    }
}
amount("Hello how are you?")




function pallindrom(sentence)
{
    let new_sentence = sentence.trim();
    let lowSentence = new_sentence.toLowerCase();
    let this_sentence = sentence.reverse();
    if (this_sentence==lowSentence)
    {
        console.log("Pallindrom")
    }
    else{
        console.log("Not pallindrom")
    }
}
pallindrom("Я ем змеb")




let arr=[];
function change8(number)
{
    while(number>8)
    {
        for (let i=0; i<number.length; i++)
        {
            new_number =number/8;
            arr.push(new_number);
        }
    }
    if (number<8)
    {
        arr.push(number);
    }
    console.log(arr.reverse());
}
change8(7)