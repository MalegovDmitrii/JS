console.log(`Задача №1.Написать функцию сравнения двух массивов.
    Функция принимает на вход два массива, сравнивает их и
    возвращает true, если массивы равны и false, если не равны.`);
function VerificationArray(arr,arr2){
    return arr.toString() === arr2.toString() ? true : false;
}

var array =[1,2,3,4,5];
var array2 =[1,2,3,4,5];
console.log(VerificationArray(array,array2));
var array2 =[5,4,3,2,1];
console.log(VerificationArray(array,array2));

console.log(`Задача №2.Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона,
третий аргумент - необязательный (если он не задан, шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа из него, включая начальное и конечное.
Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].`);

function Range(begivRange, endRange, step = 1){
    var array = [];
    for (var i = begivRange; i < endRange; i += step) {
        array.push(i)
    }
    return array;
}
console.log(Range(1,10));
console.log(Range(1,10,2));

console.log(`Задача №3.Построить объект студент со свойствами:
Имя, Фамилия, Возраст, Интересы (в виде массива), Место обучения.
Написать отдельную функцию, которой передается объект студент, а она выводит его содержимое.`);

var student = {
    firstName: "Иван",
    lastName: "Иванов",
    age: 30,
    interests:["Спорт","Компьютеры"],
    placeOfStudy: "Универ"
}
function Students(objStudent){
    /*console.log("Имя - " + objStudent.firstName);
    console.log("Фамилия - " + objStudent.lastName);
    console.log("Возраст - " + objStudent.age);
    console.log("Интересы - " + objStudent.interests);
    console.log("Место учебы - " + objStudent.placeOfStudy);*/
    for (var variable in objStudent) {
        if (objStudent.hasOwnProperty(variable)) {
            console.log(ReplaceName(variable) + " - " + objStudent[variable]);
        }
    }
}
function ReplaceName(property){
    return property == "firstName" ? "Имя":
        (property == "lastName" ? "Фамилия":
            (property == "age" ? "Возраст":
                (property == "interests" ? "Интересы":
                    (property == "placeOfStudy" ? "Место учебы":"Неизвестное свойство"))));
}
Students(student);


console.log(`Написать генератор случайных “слов”. Сформировать слово используя правила:
- определить длину слова случайно, но в диапазоне от 3 до 5 букв;
- начинать слово с гласной или согласной (определить случайно);
- чередовать гласные и согласные буквы в слове;
- буквы выбираются случайно.`);

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomSymbol() {
  return String.fromCharCode(getRandomNum(1040, 1071));
}
//Проверяет на гласную или согласную
function vowelVerif (randomSymbol) {
    return "АЕЁИЙОУЫЭЮЯ".indexOf(randomSymbol) >= 0 ? true: false;
}
//Рандомная длинна
var randomNumber = getRandomNum(3, 5);
// 0 - Гласная или 1- согласная
var vowel = Math.floor(Math.random() * 2);
var istring = "";
for (var i = 0; i < randomNumber; i++) {
    var randomSymbol = getRandomSymbol();

    vowelVerif(randomSymbol) && vowel % 2 == 0 ?
        (istring += randomSymbol, vowel++) :
            ((!vowelVerif(randomSymbol) && vowel % 2 != 0) ?
                (istring += randomSymbol, vowel++) : randomNumber++);
}
console.log(istring);
