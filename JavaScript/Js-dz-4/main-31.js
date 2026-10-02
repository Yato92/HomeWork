// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

const calculateFinalPrice = (basePrice, percentageDiscounts, taxRate) => {
  const discount = basePrice * (1 - percentageDiscounts * 10 ** -2);
  return discount + discount * taxRate;
};

// Пример работы:
console.log(calculateFinalPrice(100, 10, 0.2)); // 108
console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

const checkAccess = (name, password) => {
  if (name === "admin" && password === 123456) {
    return "Доступ разрешен";
  } else {
    return "Доступ запрещен";
  }
};

console.log(checkAccess(prompt("Имя:"), +prompt("Пароль:")));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

const getTimeOfDay = number => {
  if (number >= 0 && number <= 5) {
    return "Ночь";
  } else if (number >= 6 && number <= 11) {
    return "Утро";
  } else if (number >= 12 && number <= 17) {
    return "День";
  } else if (number >= 18 && number <= 23) {
    return "Вечер";
  } else {
    return "Некорректное время";
  }
};

console.log(getTimeOfDay(+prompt("Время:")));

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

const findFirstEven = (start, end) => {
  let firstEvenNumber = 0;
  for (i = start; i <= end; i++) {
    if (i % 2 === 0) {
      firstEvenNumber = i;
      break;
    } else {
      firstEvenNumber = "Чётных чисел нет";
    }
  }

  return firstEvenNumber;
};

// Пример работы:
console.log(findFirstEven(1, 10)); // 2
console.log(findFirstEven(9, 9)); // "Чётных чисел нет"
console.log(findFirstEven(11, 20)); // 12
