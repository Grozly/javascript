/*
Чему будут равны переменные x и a в примере ниже? 
Написать почему так произошло (описать последовательность действий).
*/
'use strict';
/*
a = 4 (умножено на 2)
x = 5 (вычислено как 1 + 4)
*/
let a = 2;
let x = 1 + (a *= 2); // в первую очередь выполняется выражение в скобках (имеет наивысший приоритет)