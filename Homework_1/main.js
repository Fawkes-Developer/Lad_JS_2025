let greetting = 'Hello world!\n';
console.log(greetting);

const gender = 'man';
let age = 21;
let isAdult = age >= 18;
let longNumber = 22n;
let noLink = null;
let id = Symbol(1);
let empty;
let user = {
  name: 'Игорь',
  age,
  gender,
  isAdult
};

let array = [gender, age, isAdult, longNumber, noLink, id, empty, user];

for (let i = 0; i < array.length; i++) {
  console.log(`${i + 1}. Значение: ${String(array[i])} Тип: ${typeof array[i]}`);
}

console.log(`\n${typeof(getFactorial)}\n`);

const animals = ['cat', 'dog'];
animals.push('bird');

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

let number = 4;
console.log(`\nФакториал числа ${number} равен: ${getFactorial(number)}`);

function getFactorial(value) {
  if (value < 0) {
    return "Вы ввели некорректное число"; 
  }
  
  let result = 1;

  for (let i = 1; i <= value; i++) {
    result *= i;
  }

  return result;
}

console.log(typeof "userName" + 22);