// Объясните почему код даёт именно такие результаты?
'use strict';
/*
Пример 1 
Префиксная форма сразу возвращает новое значение
оператор ++ увеличивает значение переменно a на 1
*/
//пример 1 
let a = 1, b = 1, c, d; 
c = ++a; 
alert(c); // ответ: 2

/*
Пример 2 
Постфиксная форма возвращает старое значение и
только потом выполняется инкрементирование
оператор ++ увеличивает значение переменно b на 1
*/
//пример 2 
d = b++;
alert(d); //ответ: 1

/*
Пример 3 
Переопределяем переменную с и присваеваем ей
2 + ++a (префиксная форма сразу возвращает новое значение)
2 + 3 = 5
*/
//пример 3 
c = 2 + ++a;
alert(c); //ответ: 5 

/*
Пример 4 
Переопределяем переменную d и присваеваем ей
2 + b++ (постфиксная форма возвращает старое значение),
а это значит 2 + 2 = 4, так как в примере 2 мы уже
увеличивали значение переменной b на +1
*/
//пример 4 
d = 2 + b++; 
alert(d); //ответ: 4 

alert(a); //3 (В Примерах 1 и 3 мы увеличили значение а = 1 на +1, в итоге а = 3)
alert(b); //3 (В Примерах 2 и 4 мы увеличили значение b = 1 на +1, в итоге b = 3)

// Префиксная и постфиксная формы работаю по разному и подходят для разных задач