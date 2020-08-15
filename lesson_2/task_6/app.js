/*
(Сложное задание, требует времени и возможно гугления, делайте по желанию.) 
Программа должна спросить у пользователя число, это будет количество денег, 
которое он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
*/
'use strict';

function sklonenie(addMoney, txt) {
    let cases = [2, 0, 1, 1, 1, 2];
    return txt[(addMoney % 100 > 4 && addMoney % 100 < 20) ? 2 : cases[(addMoney % 10 < 5) ? addMoney % 10 : 5]];
}

let addMoney = prompt('Введите сумму которую хотите положить на счет: ');
alert(`На счету ${addMoney} рубл${sklonenie(addMoney, ['ь', 'я', 'ей'])}`);


 

 


 