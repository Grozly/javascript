/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/
'use strict';
/**
 * Функиця суммирования
 */
function getSum(a, b = 1) {
	return a + b;
}

/**
 * Функиця вычитания 
 */
function getDifference(a, b = 1) {
	return a - b;
}

/**
 * Функиця деления 
 */
function getDivision(a, b = 1) {
	return a / b;
}

/**
 * Функиця умножения 
 */
function getСomposition(a, b = 1) {
	return a * b;
}

/**
 * Функция принимает два аргумента и название операции
 * выполняет операции по названию и возвращает результат
 */
function mathOperation(arg1, arg2, operation){
	switch(operation) {
		case 'сложение':
			return getSum(arg1, arg2);
			break;
		case 'вычитание':
			return getDifference(arg1, arg2);
			break;
		case 'деление':
			return getDivision(arg1, arg2);
			break;
		case 'умножение':
			return getСomposition(arg1, arg2);
			break;
	}
}

console.log(mathOperation(2, 2, 'сложение'));
console.log(mathOperation(2, 2, 'вычитание'));
console.log(mathOperation(2, 2, 'деление'));
console.log(mathOperation(2, 2, 'умножение'));