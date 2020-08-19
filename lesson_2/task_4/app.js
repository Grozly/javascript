/*
Реализовать основные 4 арифметические операции (+, -, /, *) 
в виде функций с двумя параметрами. Т.е. например, 
функция для сложения должна принимать два числа, 
складывать их и возвращать результат.
Обязательно использовать оператор return.
*/
'use strict';
/**
* Функиця суммирования
*/
function getSum(a, b = 1) {
	return console.log(a + b);
}
getSum(2, 8);

/**
* Функиця вычитания 
*/
function getDifference(a, b = 1) {
	return console.log(a - b);
}
getDifference(2, 8);

/**
* Функиця деления 
*/
function getDivision(a, b = 1) {
	return console.log(a / b);
}
getDivision(2, 8);

/**
* Функиця умножения 
*/
function getСomposition(a, b = 1) {
	return console.log(a * b);
}
getСomposition(2, 8);