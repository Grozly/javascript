/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), 
конструктор Product, который принимает параметры name и price, 
сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, 
который будет уменьшать цену в объекте на 25%.
*/
'use strict';

// в стиле es5
/**
 * Функция конструктор принимает параметры name, price и инициализирует эти параметры.
 * В функции есть метод make25PercentDiscount, который уменьшает значение price на 25%.
 * @param {string} name - имя товара.
 * @param {number} price - стоимость товара.
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.make25PercentDiscount = function(discount) {
        this.price = this.price - (this.price / 100 * discount);
    };
}

const products = [
    new Product('монитор', 6600),
    new Product('процессор', 12000),
    new Product('видеокарта', 22500)
];

for (let product of products) {
    product.make25PercentDiscount(25);
}

console.log(products);

// в стиле es6

class Product1 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    make25PercentDiscount1(discount) {
        this.price = this.price - (this.price / 100 * discount);
    }
}

const products1 = [
    new Product1('монитор', 6600),
    new Product1('процессор', 12000),
    new Product1('видеокарта', 22500)
];

for (let product of products1) {
    product.make25PercentDiscount1(25);
}

console.log(products1);