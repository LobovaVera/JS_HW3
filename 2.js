"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/



function salaryValidation(salary) {
    if (Number.isNaN(Number(salary)) || salary.trim() === "" || salary < 0) {
        return "Значение задано неверно";
    } else {
        salary = Number(salary);
        return `Размер заработной платы за вычетом налогов равен ${getAfterTaxSalary(salary.toFixed(2))}`;
    }
}

function getAfterTaxSalary(salary) {
    let a = (salary * 0.87).toFixed(2);
    return a;
}
const salaryInput = prompt("Введите размер своей заработной платы: ");
console.log(salaryValidation(salaryInput));

