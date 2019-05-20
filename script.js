var age = +prompt('Введите Ваш возраст', 0),
    name = prompt('Введите ФИО'),
    money = +prompt('Введите Ваш оклад', 'BYN'),
    work = +prompt('Опыт работы в компании', 0);


if (age < 18) {
    alert('Ты слишком молод для такой работы!');
} else if (age >= 18 && age <= 21) {
    if (work > 0 && work <= 4) {
        alert('Только Ваша зарплата: ' + (money + (money * 0.13)) + ' BYN');
    } else {
        alert ('Ты нам наврал и твой штраф 3% от оклада: ' + (money * 0.03) + ' BYN');
        alert ('Твоя зарплата с учетом штрафа: ' + (money - (money * 0.03)) + ' BYN');
    };
} else if (work >= 5 && work < 10) {
    if (age >= 50) {
        alert('Лично Ваша зарплата: ' + (money + (money * (0.05 + 0.1))) + ' BYN');
    } else {
        alert('Ваша зарплата: ' + (money + (money * 0.05)) + ' BYN');
    };
} else if (work >= 10 && work < 15) {
    if (age >= 50) {
        alert('Лично Ваша зарплата: ' + (money + (money * (0.1 + 0.1))) + ' BYN');
    } else {
        alert('Ваша зарплата: ' + (money + (money * 0.1)) + ' BYN');
    };
} else if (work >= 15 && work < 20) {
    if (age >= 50) {
        alert('Лично Ваша зарплата: ' + (money + (money * (0.15 + 0.1))) + ' BYN');
    } else {
        alert('Ваша зарплата: ' + (money + (money * 0.15)) + ' BYN');
    };
} else if (work >= 20) {
    if (age >= 50) {
        alert('Лично Ваша зарплата: ' + (money + (money * (0.2 + 0.1))) + ' BYN');
    } else {
        alert('Ваша зарплата: ' + (money + (money * 0.2)) + ' BYN');
    };
} else {
    alert ('До свидания!');
};