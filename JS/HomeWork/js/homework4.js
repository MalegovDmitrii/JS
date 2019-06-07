console.log(`Задача №1.Дана строка, изображающая целое число. Вывести сумму цифр этого числа.`);

var stringNumber = "4212";
var array = stringNumber.split('');
var summ = 0;
for (var i = 0; i < array.length; i++) {
    summ += Number(array[i]);
}
console.log(summ);

console.log(`Задача №2.Дана строка и символ. Удвоить каждое вхождение заданного символа в строку.`);

var iString = "aBBa";
var iSymbol = "a";

console.log( 'aBBa'.replace( new RegExp('' + iSymbol + '', 'ig'), iSymbol + iSymbol ));

console.log(`Задача №3.Проверить что введенный пароль удовлетворяет
следующим условиям сложности:
- длинна от 9 символов;
- содержит обязательно английские буквы верхнего и нижнего регистра;
- содержит более двух цифр;
- содержит обязательно один из неалфавитных символов (например, !, $, #, %).`);


let iPassword = prompt("Введите пароль");
var reg = /(?=(.*\d){2})(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{10,}/g;
console.log(reg.test(iPassword));

console.log(`Задача №4.Нечёткий поиск:
Дана строка-словарь, например: "Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье".
Пользователь вводит слово из словаря с одной
перепутанной буквой, например: "Срида". Написать программу, которая позволяет с использованием
регулярного выражения найти в строке-словаре введённое пользователем слово (не смотря на одну ошибка в слове)
и вывести исправленное слово пользователю, например: "Среда".`);

//Без регулярки
/*var weekday = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
var day = prompt("Введите день недели");
var correctDay = "";
var number = 0;
for (var i = 0; i < weekday.length; i++) {
    var arraySybolDayBase =  weekday[i].split('');
    var arraySybolDayUser = day.split('');
    var iCounter = 0;
    for (var j = 0; j < arraySybolDayUser.length; j++) {
        j < arraySybolDayBase.length ?
        (arraySybolDayUser[j] == arraySybolDayBase[j] ?
                iCounter++ : iCounter): iCounter;
    }
    number < iCounter ? (correctDay = weekday[i], number = iCounter) : correctDay;
}
console.log(correctDay);*/

var weekday = ["Понедельник","Вторник","Среда","Четверг","Пятница","Суббота","Воскресенье"];
var day = prompt("Введите день недели");
var correctDay = "";
var number = 0;
for (var i = 0; i < weekday.length; i++) {
    var arraySybolDayUser = day.split('');
    var iCounter = 0;
    for (var j = 0; j < arraySybolDayUser.length; j++) {
        new RegExp('' + arraySybolDayUser[j] + '', 'i').test(weekday[i]) ?
            iCounter++ : iCounter;
    }
    number < iCounter ? (correctDay = weekday[i], number = iCounter) : correctDay;
}
console.log(correctDay);
