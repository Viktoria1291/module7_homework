/* Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только 
собственных свойств. Данная функция не должна возвращать значение. */

const person = {
    gender: "female"
  }
  
  const student = Object.create(person);
  student.group = 3;
  
  function outputOfOwn (obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log('Ключ - ' + key + ', значение - ' + obj[key]);
      }
    }
  }
  
  outputOfOwn (student);