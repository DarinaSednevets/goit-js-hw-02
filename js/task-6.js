let input;
const numbers = [];
let total = 0;
while (true) {
    input = prompt(`Введите число`); 
    if (input === null) {
        break;
    }
    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
        alert(`Необходимо ввести число, попробуйте еще.`);
        continue;
    }
    numbers.push(input);
}
if (numbers.length === 0) {
    alert(`Введите число больше 0`);
} else {
    for (const number of numbers) {
        total += number;
    }
}

alert(`Общая сумма чисел равна ${total}`);