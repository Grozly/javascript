"use stict";

function colorChange() {
    if (inp.value > 0) {
        color = document.getElementById("tableCount").getElementsByTagName("tr").toggleClass("focused");
    }
}

/**
 * Функция принимает два объекта inp и tr
 * объект inp содержит в себе поле value, где указывается кол-во штук
 * объект tr содержит в себе значение price (цены на товар)
 * производится произведение кол-во штук на цену 
 * @param {Object} inp 
 * @param {Object} tr 
 */
function calculateSum(inp, tr) {
    if (inp.tagName === "INPUT") {
        tr.querySelector(".sum").textContent = parseInt(tr.querySelector(".price").textContent) * parseInt(inp.value);
        tr.querySelector(".workSum").textContent = tr.querySelector(".workPrice").textContent * inp.value;
    }
}

/**
 * Функция суммирует значения общей стоимости оборудования и общей стоимости работы
 */
function totalSumAll() {
    totalAll = parseFloat(document.getElementById("total").textContent);
    totalWorkAll = parseFloat(document.getElementById("totalWork").textContent);
    return totalAll + totalWorkAll;
}

function totalWork() {
    table = document.getElementById("tableCount").getElementsByTagName("tr");
    let workSum = 0;
    for(let i = 0; i < table.length; i++) {
        if(table[i].querySelector('.workSum') && table[i].querySelector('.workSum').textContent) {
            workSum += parseFloat(table[i].querySelector('.workSum').textContent);
        }
    } 
  return workSum;
}

function total() {
    table = document.getElementById("tableCount").getElementsByTagName("tr");
    let sum = 0;
    for(let i = 0; i < table.length; i++) {
        if(table[i].querySelector('.sum') && table[i].querySelector('.sum').textContent) {
            sum += parseFloat(table[i].querySelector('.sum').textContent);
        }
    } 
  return sum;
}

document.getElementById("tableCount").addEventListener("input", function(event) {
    let inp = event.target;
    let tr = inp.parentElement.parentElement;
    calculateSum(inp, tr);
    document.getElementById("total").textContent = total();
    document.getElementById("totalWork").textContent = totalWork();
    document.getElementById("totalSumAll").textContent = totalSumAll();
});