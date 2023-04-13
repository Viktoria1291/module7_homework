/* Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного 
объекта свойство с данным именем. Функция должна возвращать true или false. */

let str = "gender";

const person = {
    gender: "female",
    group: 3
  }
  
function checkingTheProperty (string, obj) {
  for (let key in obj) {
    alert(string in obj);
}
}

checkingTheProperty (str, person);