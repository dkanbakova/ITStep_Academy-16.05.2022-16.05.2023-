let summ = 0;
for (let i=0; i<100; i++)
{
    if (i%2==1)
    {
        summ += i;
    }
}
console.log(summ)




let a=+prompt("Введите число:");
let even = 0;
let odd = 0;
 
while (a > 0)
{
    if (a % 2 == 0)
    {
        even += 1;
    }    
    else
    {
        odd += 1;
    }
    let a = Math.trunc(a/10);
} 
console.log("Even:", even, "odd:", odd);




for (let i =20; i<50; i++)
{
    if (i%3==0)
    {
        if (i%5!=0)
        {
            console.log(i);
        }
    }
}




for (let i=35; i<87; i++)
{
    if (i%7==1)
    {
        console.log(i);
    }
    else if (i%7==2)
    {
        console.log(i);
    }
    else if (i%7==5)
    {
        console.log(i);
    }
}




let arr=[2, 0,52,65,72,12,3,4];
let max = 0;
let min = 0;
for (let i=0; i<arr.length; i++)
{
        if (max < arr[i])
        {
                max = arr[i];
    }

    if (min > i)
    {
            min = arr[i];
        }
    }
    console.log(max, min)
    
    
    
    
    
let arr=[2, 0,52,65,72,12,3,4];
console.log(arr);
let ch = arr[0];
let ch1 = arr[-1];
arr[-1] = ch;
arr[0] = ch1;
console.log(arr)






a = [1, -2, 4, -3, 2,-7, 5, 3, 5, 10];
for (let i = o; i<a.length; i++)
{
    if (a[i]<0)
    {
        i = i*(-1);
        a.push(i);
        a.splice(arr[i],1)
    }
}
console.log(a)