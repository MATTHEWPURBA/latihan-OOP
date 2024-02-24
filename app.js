//! Aturan penamaan class
// 1.English
// 2.nama class harus PascalCase (tiap kata huruf kapital)
// 3.harus singular (Vehicle) bukan (Vehicle(s))

class Vehicle {
  #condition;
  constructor(brand = "", model = "", price = int, age = 0, customers = [], totalRentDays = 0, totalRentCost = 0) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.age = age;
    this.customers = customers;
    this.totalRentDays = totalRentDays;
    this.totalRentCost = totalRentCost;
  }
}

/********* kelas Person ************/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat(food, jenis) {
    console.log(`nyum nyum nyum  enak sekali ${food} ${jenis} ini`);
  }
  intro() {
    console.log(`halo nama saya ${this.name}`);
    console.log(`i am currently ${this.age} years old`);
  }
}

let people = new Person();
let people1 = new Person("bagasTai", 19999);
console.log("dengan person dibungkus people & people1");

console.log({ people, people1 });

console.log("**************");
console.log("**************");

console.log("dengan object Person");
console.log(people, people1);

console.log("**************");
console.log("**************");

// people.eat(20, "bakso");

people1.intro("haris");

/********* kelas Person ************/

/********* kelas kalkulator ************/
class Calculator {
  constructor(number = 5) {
    this.number = number;
  }

  /** harus ada number juga di paramaeter add nya */
  add(number) {
    this.number = this.number + number;
    return this;
    /** harus ada return karena kalau tidak di return nantinya nilai yang ada di this.number
     * tidak akan bisa dipakai di luar function Calculator
     */
  }
  substract(number) {
    this.number -= number;
    return this;
    /** return this nya aja biar bisa di pake method chaining
     * (pas di console log bisa di bikin tambah.multiple().substract())
     */
  }
  multiple(number) {
    this.number *= number;
    return this;
  }
}

/******** pengen hasil nya adalah 9 ************/

// return new Calculator(4);
let tambah = new Calculator();
// console.log((4));
// console.log(tambah.multiple(3).substract(1));
/** kalo pake method chain output nya adalah Method baru
 *
 * Calculator {
 *
 *      number : <hasil>
 *
 * }
 */
// return tambah.substract(4);

/********* kelas kalkulator ************/

let number = [1, 2, 3, 4];

const genap = number.filter((el) => 
  el % 2 == 0
);

console.log(genap); 
