function myname(alex) {
    return `Hello ${alex}`
}

console.log(myname('alex'));


let numbers = [3, 8, 13, 21, 34, 50];

function searchForNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 10) {
            console.log(numbers[i]);
        }
    }
}

searchForNumbers(numbers);



function calculator(num1, num2, operator) {

    let result;

    if (operator === 'plus') {
        result = num1 + num2;
    } else if (operator === 'minus') {
        result = num1 - num2;
    } else if (operator === 'multiply') {
        result = num1 * num2;
    } else if (operator === 'divide') {
        if (num2 !== 0) {
            result = num1 / num2;
        }
    }

    return result;
}
let result = calculator(2, 3, 'minus');
console.log(result);



let myUser = {
    name: 'Alex',
    age: 30,
    role: 'Admin',


    greet: function (name) {
        return `Hello ${name}`;
    }
};

console.log(myUser.greet('Alex'));


let users = [
    {
        name: 'Ivan',
        age: 23,
        role: 'admin'
    },
    {
        name: 'Max',
        age: 27,
        role: 'user'
    },
    {
        name: 'Petya',
        age: 18,
        role: 'user'
    },
    {
        name: 'Anna',
        age: 45,
        role: 'admin'
    },
    {
        name: 'Roma',
        age: 33,
        role: 'user'
    },
    {
        name: 'Vova',
        age: 26,
        role: 'user'
    },
];


let userCount = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].role !== 'admin') {
        userCount++;
    }
}

console.log('количество простых пользователей:', userCount);

