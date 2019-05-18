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

var a = Math.sqrt(Math.pow(aX - bX, 2) + Math.pow(aY - bY, 2) + Math.pow(aZ - bZ, 2));
var b = Math.sqrt(Math.pow(cX - bX, 2) + Math.pow(cY - bY, 2) + Math.pow(cZ - bZ, 2));
var c = Math.sqrt(Math.pow(cX - aX, 2) + Math.pow(cY - aY, 2) + Math.pow(cZ - aZ, 2));

var num1 = Math.pow(a, 2) + Math.pow(b, 2);
var d = Math.pow(c, 2);

console.log("Длинна строны a = " + a);
console.log("Длинна строны b = " + b);
console.log("Длинна строны c = " + c);

if (d === num1) {
    console.log("Треугольник Прямоугольный");
} else {
    console.log("Треугольник Не прямоугольный");
}
