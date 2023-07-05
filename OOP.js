//1
class Circle {
    constructor(centerX, centerY, radius) {
      this.centerX = centerX;
      this.centerY = centerY;
      this.radius = radius;
    }
  
    getLength() {
      return 2 * Math.PI * this.radius;
    }
  
    static getLength(radius) {
      return 2 * Math.PI * radius;
    }
  
    getCopy() {
      return new Circle(this.centerX, this.centerY, this.radius);
    }
  
    static createCircle(centerX, centerY, radius) {
      return new Circle(centerX, centerY, radius);
    }
  
    isPointInside(x, y) {
      const distance = Math.sqrt((x - this.centerX) ** 2 + (y - this.centerY) ** 2);
      return distance <= this.radius;
    }
  
    toString() {
      return `Circle - Center: (${this.centerX}, ${this.centerY}), Radius: ${this.radius}`;
    }
  }
  
//2
 
function propsCount(currentObject) { 
    return Object.keys(currentObject).length;
 }
  
//3
class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(`${this.name} ${this.surname}`);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      console.log(`${this.surname} ${this.name} ${middleName}`);
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      const course = currentYear - this.year + 1;
      return course;
    }
  }

//4
  class Marker {
    constructor(color, ink) {
      this.color = color;
      this.ink = ink;
    }
  
    print(text) {
      let printedText = "";
      for (let i = 0; i < text.length; i++) {
        if (this.ink > 0) {
          if (text[i] !== " ") {
            printedText += text[i];
            this.ink -= 0.5;
          } else {
            printedText += " ";
          }
        } else {
          break;
        }
      }
      console.log("%c" + printedText, `color: ${this.color}`);
    }
  }
  
  
  
  class RefillableMarker extends Marker {
    refill(inkAmount) {
      this.ink += inkAmount;
      if (this.ink > 100) {
        this.ink = 100;
      }
      console.log(`Marker refilled. Current ink level: ${this.ink}%`);
    }
  }
  
//5

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this.experience = 1.2;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this.experience;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  get showExp() {
    return this.experience;
  }

  set setExp(value) {
    this.experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);


let worker3 = new Worker("Andy Ander", 29, 23);


console.log("\nSorted salary:");
const workers = [worker1, worker2, worker3];
workers.sort((a, b) => {
  const salaryA = a.dayRate * a.workingDays * a.showExp;
  const salaryB = b.dayRate * b.workingDays * b.showExp;
  return salaryA - salaryB;
});
workers.forEach((worker) => {
  const salary = worker.dayRate * worker.workingDays * worker.showExp;
  console.log(`${worker.fullName}: ${salary}`);
});
