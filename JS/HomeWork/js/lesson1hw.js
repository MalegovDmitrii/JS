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
var c = (Math.pow(cX - aX, 2) + Math.pow(cY - aY, 2) + Math.pow(cZ - aZ, 2));

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

console.log("Задача №1. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название соответствующего времени года (зима, весна и т.д.).");
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


console.log("Задача №2. Единицы длины пронумерованы следующим образом: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. Дан номер единицы длины и длина отрезка L в этих единицах (вещественное число). Вывести длину данного отрезка в метрах.");
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

console.log("Задача №3.Дано целое число, лежащее в диапазоне от -999 до 999. Вывести строку - словесное описание данного числа вида отрицательное двузначное число, нулевое число, положительное однозначное число и т.д.");
var number = 42;
if(number < 0 && String(number).length == 3 && String(number).charAt(0) == "-"){
    console.log("Число " + number + " - " + "отрицательное двухзначное число");
}else if(number > 0 && String(number).length == 1){
    console.log("Число " + number + " - " + "положительное однозначное число");
}else if(number == 0 ){
    console.log("Число " + number + " - " + "нулевое");
}else {
    console.log("Число " + number + " - " + "не удовлетворяет условию задачи");
}
