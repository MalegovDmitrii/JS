console.log("Задача №1. На садовом участке площадью 10 соток, разбили грядки 15 на 25 метров. Сколько м2 осталось незанято?");
var landArea = 1000;
var widthSection = 15;
var leghtSection = 25;
var result =  landArea % (widthSection * leghtSection);
console.log(result);



console.log("Задача №2. Найдите площадь овального кольца, полученного из овала площадью 15 дм2 вырезанием овала площадью 600 см2.");
var num1 = 15;
var num2 = 600;
var result =  num1 * 100 - num2;
console.log(result);



console.log("Задача №3. Из трех данных чисел выбрать наименьшее.");
var num1 = 58;
var num2 = 57.5;
var num3 = 90;
var result =  Math.min(num1, num2, num3);
console.log(result);



console.log("Задача №4. Вывести в консоль ближайшее к 10 из двух чисел, записанных в переменные m и n.");
var m = 5.98;
var n = 14.01;
var num1 = Math.abs(10 - m);
var num2 = Math.abs(10 - n);
var result =  Math.min(num1, num2)
if (result === num1) {
    console.log(n);
} else {
    console.log(m);
}
console.log(result);




console.log("Задача №5. Есть три вершины a, b и с. У каждой вершина заданы координатами x, y, z как целые числа. Нужно определить - является ли треугольник с заданными координатамипряоугольным.");

var aX = 3;
var aY = 0;
var aZ = 0;

var bX = 0;
var bY = 0;
var bZ = 0;

var cX = 0;
var cY = 4;
var cZ = 0;

var a = (Math.pow(aX - bX, 2) + Math.pow(aY - bY, 2) + Math.pow(aZ - bZ, 2));
var b = (Math.pow(cX - bX, 2) + Math.pow(cY - bY, 2) + Math.pow(cZ - bZ, 2));
var c = (Math.pow(cX - aX, 2) + Math.pow(cY - aY, 2) + Math.pow(cZ - aZ, 2)); //**2 -возведение в квадрат

if (c === a + b || b === a + c || a === b + c) {
    console.log("Треугольник Прямоугольный");
}
else {
console.log("Треугольник не прямоугольный");

}

console.log("Длинна строны a = " + Math.sqrt(a));
console.log("Длинна строны b = " + Math.sqrt(b));
console.log("Длинна строны c = " + Math.sqrt(c));



console.log("Домашнее задание №2")

console.log(`Задача №1. Дан номер месяца (1 — январь, 2 — февраль, ...).
Вывести название соответствующего времени года (зима, весна и т.д.).`);
var mountNumber = 1;
if(mountNumber == 12 || mountNumber == 1 || mountNumber == 2){
    console.log("Зима");
}
else if(mountNumber == 3 || mountNumber == 4 || mountNumber == 5){
    console.log("Весна");
}
else if(mountNumber == 6 || mountNumber == 7 || mountNumber == 8){
    console.log("Лето");
} else {
    console.log("Осень");
}


console.log(`Задача №2. Единицы длины пронумерованы следующим образом:1 — дециметр, 2 — километр,
3 — метр, 4 — миллиметр, 5 — сантиметр.Дан номер единицы длины и длина отрезка L в этих единицах
(вещественное число). Вывести длину данного отрезка в метрах.`);
var indexUnits = 5;
var iLong = 2546;
switch(indexUnits){
    case 1:
        console.log(iLong + " дециметров = " + iLong / 10 + " метров");
    break;
    case 2:
        console.log(iLong + " километров = " + iLong * 1000 + " метров");
    break;
    case 3:
        console.log(iLong + " метров = " + iLong + " метров");
    break;
    case 4:
        console.log(iLong + " миллиметр = " + iLong / 1000 + " метров");
    break;
    case 5:
        console.log(iLong + " сантиметров = " + iLong / 100 + " метров");
    break;
    default:
        console.log("Че-то не правильно");
    break;
}

console.log(`Задача №3. Дано целое число, лежащее в диапазоне от -999 до 999.
Вывести строку - словесное описание данного числа вида отрицательное двузначное число,
нулевое число, положительное однозначное число и т.д.`);

var number = 42;
if(number < 0 && String(number).length == 3 && String(number).charAt(0) == "-"){
    console.log("Число " + number + " - " + "отрицательное двухзначное число");
}else if(number < 0 && String(number).length == 4 && String(number).charAt(0) == "-"){
    console.log("Число " + number + " - " + "отрицательное трехзначное число");
}else if(number < 0 && String(number).length == 2 && String(number).charAt(0) == "-"){
    console.log("Число " + number + " - " + "отрицательное однозначное число");
}else if(number > 0 && String(number).length == 1){
    console.log("Число " + number + " - " + "положительное однозначное число");
}else if(number == 0 ){
    console.log("Число " + number + " - " + "нулевое");
}else if(number > 0 && String(number).length == 2){
    console.log("Число " + number + " - " + "положительное двухзначное число");
}else if(number > 0 && String(number).length == 3){
    console.log("Число " + number + " - " + "положительное трехзначное число");
}
else {
    console.log("Число " + number + " - " + "не удовлетворяет условию задачи");
}

console.log(`Задача №4. Вывести через console.log все числа от 1 до 100,с двумя исключениями.
    Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, а для чисел, делящихся на 5 (но не на 3) – ‘Five’.
 Измените код так,чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.`);

var text_3 = "Three";
var text_5 = "Five";
var text_35 = "ThreeFive";

for(var i = 1; i < 101; i++) {
    if(( i/3 ) % 1 === 0 && (i/5) % 1 != 0){
        console.log(text_3);
    }else if((i/5) % 1 === 0 && (i/3) % 1 != 0){
        console.log(text_5);
    }else if((i/3) % 1 === 0 && (i/5) % 1 === 0){
        console.log(text_35);
    }else{
        console.log(i);
    }
}
console.log(`Задача №5. Пользователь вводит год, необходимо определить является ли он високосным.
Примеры данных для тестирования 1) '2000' – високосный го 2) '1800' – не високосный год`);
let year = prompt("Введите год");
console.log("1 способ");

let date = new Date(year, 1, 29);

if(date.getDate() === 29){
    console.log("Високосный");
}else{
    console.log("Не високосный");
}
console.log("2 способ");

if(year % 400 === 0){
    console.log("Високосный");
}else if (year % 100 === 0) {
    console.log("Не високосный")
}else if (year % 4 === 0) {
    console.log("Високосный");
}
console.log(`Задача №6. Задать количество тарелок и количество моющего средства.
    Моющее средство расходуется из расчета 0,5 на одну тарелку.
    В цикле выводить сколько моющего средства осталось после мытья каждой тарелки
    В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.`);

let plate = prompt("Введите количество тарелок для мытья");
let detergent = prompt("Введите количество моющего средства");
let consum = 0.5;
for(let i = 0; i < plate; i++){
    if(detergent > 0){
        console.log("Осталось моющего средства - " + detergent)
    } else if(detergent < 0 ){
        console.log("По окончанию средства осталось не вымытых тарелок - " + (plate - i + 1))
        break;
    }
        detergent = detergent - 0.5
}
if(detergent > 0){
    console.log("Тарелки были все вымыты, осталось моющего средства - " + (detergent))
}

console.log("Домашнее задание №3");

console.log(`Задача №1. Заданы два массива
A = [ 12, 4, 3, 10, 1, 20 ]
B = [-3, -7, -100, -33]
необходимо их объединить в один массив C добавив массив B в конец(в начало) A.`);

let A = [ 12, 4, 3, 10, 1, 20 ];
let B = [-3, -7, -100, -33];

let C = A.concat(B);
console.log(C);
C = B.concat(A);
console.log(C);


console.log(`Задача №2. Одномерным массивом задана доска 3 на 3
var area = [ null, null, null, null, null, null, null, null, null ]
Необходимо сформировать и вывести (document.write) игровое поле состоящее из квадратов для крестиков-ноликов в HTML.
При появлении в массиве 0-ля рисовать нолик , 1-цы крестик
Пример: [ 1, null, 0, null, 1, null, null, null, null ] на поле 2-а крестика, и 1-н нолик.`);

function changeSymbol(iSyblol){
    if(String(iSyblol) == "1"){
        return "X";
    }else if (String(iSyblol) == "0"){
        return "0";
    }else {
        return "";
    }
}
var area = [ null, 1, null, 0, null, 1, null, 0, null ];
let fieldGame =  `<table border="1">
                    <tbody>
                        <tr>
                            <td align="center" width="50" height="50">${changeSymbol(area[0])}</td>
                            <td align="center" width="50" height="50">${changeSymbol(area[1])}</td>
                            <td align="center" width="50" height="50">${changeSymbol(area[2])}</td>
                        </tr>
                        <tr>
                            <td align="center" width="50" height="50">${changeSymbol(area[3])}</td>
                            <td align="center" width="50" height="50">${changeSymbol(area[4])}</td>
                            <td align="center" width="50" height="50">${changeSymbol(area[5])}</td>
                        </tr>
                        <tr>
                            <td align="center" width="50" height="50">${changeSymbol(area[6])}</td>
                            <td align="center" width="50" height="50">${changeSymbol(area[7])}</td>
                            <td align="center" width="50" height="50">${changeSymbol(area[8])}</td>
                        </tr>
                    </tbody>
                </table>`;
document.write(fieldGame)

console.log(`Задача №3. Задан массив - [12,4,3,10,1,20].
Удалить из него наименьшее и наибольшее значение.`);

let mass = [12,4,3,10,1,20];
let min  = Math.min.apply(null,mass);
let max = Math.max.apply(null,mass);

mass.splice(mass.indexOf(min),1);
mass.splice(mass.indexOf(max),1);
console.log(mass);

console.log(`Задача №4. В городе N проезд в трамвае осуществляется по бумажным отрывным билетам.
Каждую неделю трамвайное депо заказывает в местной типографии рулон билетов
с номерами от 000001 до 999999.
«Счастливым» считается билетик у которого сумма первых трёх цифр номера равна
сумме последних трёх цифр, как, например, в билетах с номерами 003102 или 567576.
Трамвайное депо решило подарить сувенир обладателю каждого счастливого билета и
теперь раздумывает, как много сувениров потребуется.
С помощью программы подсчитайте сколько счастливых билетов в одном рулоне.`);

function lucky(number){
    arrNumber = String(number).split('');
    if(Number(arrNumber[0])+Number(arrNumber[1])+Number(arrNumber[2]) ==
        Number(arrNumber[3])+Number(arrNumber[4])+Number(arrNumber[5])){
            return true;
        }else {return false;}
}
//Полный код цикла
let matches = 0;
for (var i = 1; i < 1000000; i++) {
    let iLenght = String(i).split('').length;
    switch (iLenght) {
        case 1:
            if(lucky("00000" + i) == true) {matches = matches + 1;}
        break;
        case 2:
            if(lucky("0000" + i) == true) {matches = matches + 1;}
        break;
        case 3:
            if(lucky("000" + i) == true) {matches = matches + 1;}
        break;
        case 4:
            if(lucky("00" + i) == true) {matches = matches + 1;}
        break;
        case 5:
            if(lucky("0" + i) == true) {matches = matches + 1;}
        break;
        case 6:
            if(lucky(i) == true) {matches = matches + 1;}
        break;
        default:

    }
}
console.log(matches);
//Можно оптимизировать
matches = 0;
for (var i = 1000; i < 1000000; i++) {
    let iLenght = String(i).split('').length;
    iLenght == 4 && lucky("00" + i) == true ||
        iLenght == 5 && lucky("0" + i) == true ||
            iLenght == 6 && lucky(i) == true ? matches++ : matches;
}
console.log(matches);
