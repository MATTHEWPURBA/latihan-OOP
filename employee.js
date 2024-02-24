class Employee {
  #baseSalary;
  constructor(name, position, joinDate, baseSalary) {
    this.name = name;
    this.position = position;
    this.joinDate = joinDate;
    this.#baseSalary = baseSalary;
  }

  getTakeHomePay() {
    const tax = 0.02 * this.#baseSalary;
    let tunjangan;
    let overtime = 0;
    if (this.position == "Manager") {
      tunjangan = 500_000;
    }
    if (this.position === "Staff") {
      tunjangan = 0;
      overtime = 100_000;
    }

    return this.#baseSalary - tax + tunjangan + overtime;
  }

  get baseSalary() {
    // if (this.position === "Manager") {
    //   return "rahasia";
    // }
    return this.#baseSalary;
  }

  set baseSalary(value) {
    if (typeof value != "number") {
      throw new Error("gaji harus angka");
    }
    if (this.position === "Manager" && value < 15_000_000) {
      throw new Error("Gaji kekecilan bos");
    }
    this.#baseSalary = value;
  }
}

const gajih3 = new Employee("bagasBABI", "Manager", new Date().toDateString(), 10_000_000);

class Manager extends Employee {
  constructor(name, joinDate, baseSalary) {
    super(name, "Manager", joinDate, baseSalary);
  }
  getTakeHomePay() {
    const tax = 0.02 * this.baseSalary;
    let tunjangan = 500_000;
    let overtime = 0;

    // if (this.position == "Manager") {
    //   tunjangan = 500_000;
    // }
    // if (this.position === "Staff") {
    //   tunjangan = 0;
    //   overtime = 100_000;
    // }

    return this.baseSalary - tax + tunjangan + overtime;
  }
}

const gajih = new Manager("bagasKontol", new Date().toDateString(), 10_000_000);

class Staff extends Employee {
  constructor(name, joinDate, baseSalary, jobdesk = "kerja 925") {
    super(name, "Staff", joinDate, baseSalary);
    this.jobdesk = jobdesk;
    /** pembuatan properti khusus staff */
    /**properti yang dibuat khusus di kelas extend
     * bisa diubah sesuai dengan console.log
     */
  }
  getTakeHomePay() {
    const tax = 0.02 * this.baseSalary;
    let tunjangan = 500_000;
    return this.baseSalary - tax + tunjangan;
  }
  lembur(hours) {
    for (let i = 0; i < hours; i++) {
      console.log("kerja lembur kuda");
    }
  }
}

/** cara set tanggal dengan hari dan tanggal detail */

const gajih2 = new Staff("bagasAnjing", new Date().toDateString(), 10_000_000, "dateng tepat waktu");

// gajih.baseSalary = 17_000_000;

/** cara set tanggal dengan hari dan tanggal detail */

console.log(gajih3);

console.log(gajih.getTakeHomePay());

console.log(gajih2.getTakeHomePay());
console.log(gajih2);

// console.log(gajih2.lembur(2));
gajih2.lembur(4)
console.log('pengulangan lembur sesuai dengan jumlah angka karena coding lembur (hours)')

// const gajih1 = new Employee("bagasTaIII", "Staff");

// console.log(gajih);
// console.log(gajih2);
