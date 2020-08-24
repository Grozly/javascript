/*
Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/
'use strict';

let myNumber = 961;
console.log(myNumber);

/**
 * Функция преобразует число в объект и разбивает их на три свойства units, tens, hundereds.
 * @param {*} myNumber Принимает чило от 0 до 999
 * @return {*} Объект
 */
function getNumber (myNumber) {
    if (myNumber < 0 || myNumber > 999 || !Number.isInteger(myNumber)) {
        console.error('Получено недопустимое значение, допустимый диапазон чисел [0, 999]');
        return {};
    } else {
        return {
            units: myNumber % 10, 
            tens: Math.floor((myNumber/10) % 10),
            hundreds: Math.floor(myNumber/100)
        }
    }
}

console.log(getNumber(myNumber));