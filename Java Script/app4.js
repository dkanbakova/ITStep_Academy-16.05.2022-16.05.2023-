// let list=["игрушка - 1000тг", "платье - 4000 тг", "духи - 1200 тг", "ноутбук - 150 000 тг", "смартфон - 100 000тг"];
// fancy = +prompt("Добрый день! Желаете ли вы что-либо приобрести(да/нет): ");
// amount = +prompt("Введите количество покупок, которые планируете сделать: ");
// let price=0;
// for (let i=0; i<amount; i++)
// {
//     user_choice = prompt("Выберите желанный товар: "+ list).toLowerCase();
//     if (user_choice == 'игрушка')
//     {
//         number = +prompt("Введите количество штук: ");
//         price+=number*1000;
//     }
//     else if (user_choice == 'платье')
//     {
//         number = +prompt("Введите количество штук: ");
//         price+=number*4000;
//     }
//     else if (user_choice == 'духи')
//     {
//         number = +prompt("Введите количество штук: ");
//         price+=number*1200;
//     }
//     else if (user_choice == 'ноутбук')
//     {
//         number = +prompt("Введите количество штук: ");
//         price+=number*150000;
//     }
//     else if (user_choice == 'смартфон')
//     {
//         number = +prompt("Введите количество штук: ");
//         price+=number*100000;
//     }
//     else
//     {
//         console.log("Вы неправильно ввели данные!")
//     }
// }
// discount = prompt("Есть ли у вас скидка(да/нет)? ");
// if (discount=="да")
// {
//     off = +prompt("Введиет цифру в процентах: ");
//     price = price - price * (off/100);
//     console.log("С вас" + price + "тг")
// }
// else
// {
//     console.log(price + "тг")
// }







// // a)
// let array = [-10, 20, -30, 40, -50, 60, -70];

// let negative_sum = 0;

// for (i = 0; i < array.length; i++)
// {
//     if (array[i] < 0)
//     {
//         negative_sum += array[i]
//     }
// }

// console.log("Сумма отрицательных элементов: ",negative_sum)


// // b)
// let array = [-10, 20, -30, 40, -50, 60, -70];
// console.log(array);

// let maxNum = 0;
// let minNum = -10;
// let array_mul = 1;

// for(let i = 0; i < array.length; i++)
// {
// 	if(maxNum < array [i])
// 	{
// 		maxNum = array[i];
// 	}

// 	if(minNum > array [i])
// 	{
// 		minNum = array[i];
// 	}

//     if((i > minNum && i < maxNum) || (i < minNum && i > maxNum))
//     {
//         array_mul *= i;
//     }

// }

// console.log("Min: ",minNum, "Max:", maxNum)

// console.log("Произведение элементов между max/min: ",array_mul)


// // с) 
// let array = [-10, 20, -30, 40, -50, 60, -70];
// console.log(array);

// let array_mul = 1;

// for(let i = 0; i < array.length; i++)
// {
//     if(i % 2 == 0)
//     {
//         array_mul *= array[i]
//     }
// }

// console.log("Произведение элементов с чётными номерами: ",array_mul)


// // d)
// let array = [-10, 20, -30, 40, -50, 60, -70];
// console.log(array);

// let first_negative = 0;
// let last_negative = 0;

// let their_sum = 0;

// for(let i = 0; i < array.length; i++)
// {
//     if (array[i] < 0)
//     {
//         first_negative = array[i];
//         break
//     }

//     if (array[i] < 0)
//     {
//         last_negative = array[i];
//     }

//     if (i > first_negative && i < last_negative)
//     {
//         their_sum += array[i]
//     }
// }

// console.log(first_negative);
// console.log(last_negative);
// console.log(their_sum)







// let y = 1;

// let m = 1;
// let month_finance_sum = 0;

// while(y != 6)
// {
//     console.log("Рассчёт за", y, "год: ")
//     while (m != 13)
//     {
//         let month_finance = +prompt("Введите количество норм за месяц:");
//         m++;
//         month_finance_sum += month_finance;
//     }

//     console.log("За год получено", month_finance_sum, "норм. Конвертируем в соотношении 5 норм = 1 плюс учёта.")

//     let year_finance = Math.trunc(month_finance_sum / 5);
//     console.log(y, "+"*year_finance);
//     y++;
// }


