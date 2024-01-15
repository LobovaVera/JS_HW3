"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

/**
 * Просит пользователя ввести числа и возвращает из массив.
 * @param {number} howManyNumbers количесто чисел, которые вы хотите получить от пользователя.
 * @return {array} numbers - массив чисел, введенных пользователем.
 */
function getNumbersFromUser(howManyNumbers) {
    let numbers = [];
    for (let i = 0; i < howManyNumbers; i++) {
        numbers[i] = prompt(`Введите число ${i + 1}`);
    }
    return numbers;
}



/**
 * Функция выводит через alert большее число массива
 * @param {array} numbersArray - массив чисел
 */
function getMaxNumberHW(numbersArray = []) {
    let max = Number(numbersArray[0]);
    for (let i = 1; i <= numbersArray.length - 1; i++) {
        if (max < numbersArray[i]) {
            max = numbersArray[i];
        }
    }
    alert(`Максимальное значение среди чисел ${numbersArray[0]}, ${numbersArray[1]}, ${numbersArray[2]} равно ${max}.`);
}

let inputNumbers = getNumbersFromUser(3);
getMaxNumberHW(inputNumbers);


//если нужно именно три числа, можно еще так

// function getMaxNumberHW(num1, num2, num3) {
//     let max = Math.max(+num1, +num2, +num3);
//     alert(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${max}.`);
// }
// getMaxNumberHW(inputNumbers[0], inputNumbers[1], inputNumbers[2]);