// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Ivan",
  age: 19,
  hobby: "Dota 2",
  IsStudies: true,
};

console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const object1 = {};

const isEmpty = object => {
  if (object) {
    for (let key in object) {
      return false;
    }
  }
  return true;
};

console.log(isEmpty(object1));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "Name",
  description: "Desc",
  isCompleted: true,
};
console.log(task);

const taskLength = {
  length: 500,
};
console.log(taskLength);

const cloneAndModify = (object, modifications) => {
  const newObject = { ...object, ...modifications };

  for (let key in newObject) {
    console.log(`${key}`, `${newObject[key]}`);
  }
};
cloneAndModify(task, taskLength);

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const job = {
  salary: 100,
  isLocated: "Moscow",
  beforeWorkers: 15,
  afterWorkers: 25,
  calculationSalary: () => {
    return job.salary * job.afterWorkers;
  },
  calculationDifferenceWorkers: () => {
    return job.afterWorkers - job.beforeWorkers;
  },

  conclusionCount: () => {
    return `зп: ${job.calculationSalary()}, разница бывший и нынешних сотрудников: ${job.calculationDifferenceWorkers()}`;
  },
};

const callAllMethods = object => {
  for (let key in object) {
    if (typeof object[key] === "function") {
      console.log(`${object[key]()}`);
    }
  }
};

callAllMethods(job);
