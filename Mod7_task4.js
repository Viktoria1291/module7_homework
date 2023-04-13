/* Задание 4.
Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте суммарную потребляемую мощность всех 
включенных приборов (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими 
свойствами он обладает.

План:
Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :) */

function Device(name) {
  this.device = 'electrodevice',
  this.name = name,
  this.activation = false
  }

function Characteristic(name, color) {
	this.name = name,
	this.color = color
}

Device.prototype.connect = function(){
  this.activation = true;
  console.log("Прибор подключен")
}

Device.prototype.getPower = function(power) {
  this.power = power;
  if (this.activation == true) {
    return this.power;
  }
  else if (this.activation == false) {
    return 0;
  } 
}

Characteristic.prototype = new Device();

const Lamp = new Characteristic('Lamp', 'white');
const Computer = new Characteristic('Computer', 'black');
const Printer = new Characteristic('Printer', 'grey');
const PhoneCharger = new Characteristic('Phone charger', 'red');

Computer.connect();
Printer.connect();
PhoneCharger.connect();

console.log(Lamp.getPower(60) + Computer.getPower(100) + Printer.getPower(10) + PhoneCharger.getPower(5))