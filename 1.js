"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

/**
 * Принимает число, возводит переданное число в куб и 
возвращает полученное значение
 * @param {number} num 
 * @returns {number} число в кубе
 */
function getCube(num = 1){
    return num ** 3;
}
console.log(getCube(3));