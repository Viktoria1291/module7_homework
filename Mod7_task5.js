/* Задание 5.
Переписать консольное приложение из предыдущего юнита на классы. */

class Device {
  constructor(name) {
    this.device = 'electrodevice',
    this.name = name,
    this.activation = false
    }

connect(){
  this.activation = true;
  console.log("Прибор подключен")
}

getPower(power) {
  this.power = power;
  if (this.activation == true) {
    return this.power;
  }
  else if (this.activation == false) {
    return 0;
  } 
}}

class Characteristic extends Device {
  constructor(name, color) {
	super(name),
	this.color = color
}}

const Lamp = new Characteristic('Lamp', 'white');
const Computer = new Characteristic('Computer', 'black');
const Printer = new Characteristic('Printer', 'grey');
const PhoneCharger = new Characteristic('Phone charger', 'red');

Computer.connect();
Printer.connect();
PhoneCharger.connect();

console.log(Lamp.getPower(60) + Computer.getPower(100) + Printer.getPower(10) + PhoneCharger.getPower(5))