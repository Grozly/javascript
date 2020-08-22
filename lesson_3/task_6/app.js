/*
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/
'use strict';

let xNum = "x"; 
console.log(xNum); 

for(let x = 0; x < 20; x++) { 
    console.log(xNum += "x"); 
}
