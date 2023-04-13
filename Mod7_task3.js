/* Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа. */

function CreateObject() {
  const obj = Object.create(null);
  console.log(obj);
}

CreateObject();