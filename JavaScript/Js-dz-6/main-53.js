// Задание 1.
// Дан массив пользователей:
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

const getUserAverageAge = arr => {
  let middleAge = null;
  let sum = null;

  arr.forEach(el => {
    sum += el.age;
  });
  middleAge = sum / arr.length;
  console.log(middleAge);
};

getUserAverageAge(users);

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = arr => {
  let admins = [];

  arr.forEach(el => {
    if (el.isAdmin === true) {
      admins.push(el);
    }
  });

  console.log(admins);
};

getAllAdmins(users);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const test = [1, 2, 3, "Hello"];

const first = (arr, n) => {
  let newArr = [];

  if (n === 0) {
    console.log(newArr);
  } else if (n === undefined) {
    {
      console.log(arr[0]);
    }
  } else {
    arr.forEach((el, index) => {
      if (index < n) {
        newArr.push(el);
      }
    });
    console.log(newArr);
  }
};

first(test, 1);
