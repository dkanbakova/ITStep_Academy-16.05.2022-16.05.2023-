let language=prompt("Enter languge(ru/en): ")
let price=0;
if(language=="ru")
{
    let word1=prompt("Enter a word: ").toUpperCase();
    for (let value in word1)
    {
        if (value = 'А' || value== 'В' || value== 'Е' || value== 'И' || value== 'Н' || value== 'О' || value== 'Р' || value== 'С' ||value== 'Т')
        {
            price+=1;
        }
        else if (value=='Д' || value=='К' || value=='Л' || value=='М' || value=='П' || value=='У')
        {
            price+=2;
        }
        else if (value=='Б' || value=='Г' || value=='Ё' || value=='Ь' || value=='Я')
        {
            price+=3;
        }
        else if (value=='Ы' || value=='Й')
        {
            price+=4;
        }
        else if (value=='Ж' || value=='З' || value == 'Х' || value == 'Ц' || value == 'Ч')
        {
            price+=5;
        }
        else if (value=='Ш' || value=='Э' || value=='Ю')
        {
            price+=8;
        }
        else
        {
            price+=10;
        }
    }
}
else if(language=="en")
{
    let word2=prompt("Enter a word: ").toUpperCase();
    for (let value in word2)
    {
        if (value = 'A' || value== 'E' || value== 'I' || value== 'O' || value== 'U' || value== 'L' || value== 'N' || value== 'S' ||value== 'T' ||value== 'R')
        {
            price+=1;
        }
        else if (value = 'D' || value== 'G')
        {
            price+=2;
        }
        else if (value = 'B' || value== 'C' || value== 'M' || value== 'P' )
        {
            price+=3;
        }
        else if (value = 'F' || value== 'H' || value== 'V' || value== 'W' || value== 'Y' )
        {
            price+=4;
        }
        else if (value = 'K' )
        {
            price+=5;
        }
        else if (value = 'J' || value== 'X')
        {
            price+=8;
        }
        else if (value = 'Q' || value== 'Z')
        {
            price+=10;
        }
    }
}
console.log(price)




// let emails = {'mgu.edu': ['andrei_serov', 'alexander_pushkin', 'elena_belova', 'kirill_stepanov'],
//       	'gmail.com': ['alena.semyonova', 'ivan.polekhin', 'marina_abrabova'],
//       	'msu.edu': ['sergei.zharkov', 'julia_lyubimova', 'vitaliy.smirnoff'],
//       	'yandex.ru': ['ekaterina_ivanova', 'glebova_nastya'],
//       	'harvard.edu': ['john.doe', 'mark.zuckerberg', 'helen_hunt'],
//       	'mail.ru': ['roman.kolosov', 'ilya_gromov', 'masha.yashkina']};
// for (let value in emails)
// {
//     emails[value].sort();
// }
// console.log(emails);