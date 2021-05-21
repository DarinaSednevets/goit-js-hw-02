
let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('Введите число');
    if (input === null) {
        break;
    }
    input = Number(input);
    const notAnumber = Number.isNaN(input);
    if (notAnumber) {
        alert('Необходимо ввести число');
        continue;
    }
    numbers.push(input);
}
if (numbers.length === 0) {
    alert('Ничего не ввели');
} else {
    for (const number of numbers) {
        total += number;
    }
    alert(`Общая сумма составляет ${total}`);
}