
console.log('Ukolov');
let drStr = 'cool';
let halk = drStr;
alert('Oleksii ' + drStr + ' ' + halk);

let username = 'prom';
let price = 2346;
let isValid = false;
let emptyObject = null;
let averageMark = undefined;
/*
let isAdult = confirm('Ви досягли повноліття?');
if (isAdult) {
    console.log('Вам більше 17')
}
else {
    console.log('Вам менше 17')
};
*/
let name = ('Oleksii');
let surname = ('Ukolov');
let group = false;
let birthYear = (2007);
console.log(`Birth Year: ${birthYear}, Type: ${typeof (birthYear)}`);
console.log(`Group: ${group}, Type: ${typeof (group)}`);
console.log(`Username: ${name}, Type: ${typeof (name)}`);
console.log(`Surname: ${surname}, Type: ${typeof (surname)}`);
console.log(emptyObject);
console.log(averageMark);
let Login = prompt('Your login:');
let Email = prompt('Your email:');
let Password = prompt('Your password:');
console.log(`Your login: ${Login}, Your email: ${Email}, Your password: ${Password}.`);
let Hour = +prompt('hour');
let Day = +prompt('day');
let Mounth = +prompt('month');
console.log(`number of seconds in an hour: ${Hour * 3600}, number of seconds in a day: ${Day * 86400}, number of seconds in a month: ${Mounth * 2629746} `);
//1:
let a = 1;
let b = 2;
let c = 3;

let Test = a < b && b < c;

console.log(Test);

//2:
let x = 1;
let y = 2;

let res1 = `${x}${y}`
console.log(res1);
console.log(typeof res1);

let res2 = `${x == true}${y}`
console.log(res2);
console.log(typeof res2);

let res3 = x !== y
console.log(res3);
console.log(typeof res3);

let res4 = Math.sqrt(x - y)
console.log(res4);
console.log(typeof res4);

//3:
let isAdult = prompt('скільки вам років?');
if (isAdult >= 18) {
    console.log('Ви досягли повнолітнього віку');
} else {
    console.log('Ви ще надто молоді');
};

//4:
let firstSide = parseFloat(prompt('first side'));
let secondSide = parseFloat(prompt('second side'));
let thirdSide = parseFloat(prompt('third side'));
if (firstSide == NaN || secondSide == NaN || thirdSide == NaN) {
    console.log('Incorrect data');
} else {
    let SPerimeter = (firstSide + secondSide + thirdSide);
    let S = Math.sqrt(
        SPerimeter * (SPerimeter - firstSide) * (SPerimeter - secondSide) * (SPerimeter - thirdSide))
    console.log('S triangle: ' + S.toFixed(3));
};
let PriamokutnyjTriangle =
    firstSide * firstSide + secondSide * secondSide === thirdSide * thirdSide ||
    firstSide * firstSide + thirdSide * thirdSide === secondSide * secondSide ||
    secondSide * secondSide + thirdSide * thirdSide === firstSide * firstSide;
console.log('Primokutnyj : ' + PriamokutnyjTriangle);
//5:
let currentHour = new Date().getHours();

if (currentHour >= 23 || currentHour < 5) {
    console.log("Доброї ночі!");
} else if (currentHour >= 5 && currentHour < 11) {
    console.log("Доброго ранку!");
} else if (currentHour >= 11 && currentHour < 17) {
    console.log("Доброго дня!");
} else if (currentHour >= 17 && currentHour < 23) {
    console.log("Доброго вечора!");
};


/*
let currentHour = new Date().getHours();
let greeting;

switch (true) {
  case (currentHour >= 23 || currentHour < 5):
    greeting = "Доброї ночі";
    break;
  case (currentHour >= 5 && currentHour < 11):
    greeting = "Доброго ранку";
    break;
  case (currentHour >= 11 && currentHour < 17):
    greeting = "Доброго дня";
    break;
  case (currentHour >= 17 && currentHour < 23):
    greeting = "Доброго вечора";
    break;
};

console.log(greeting);
*/

//6:
//let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = new Map();

for (const num of arr) {
    if (data.has(num)) {
        data.set(num, data.get(num) + 1);
    } else {
        data.set(num, 1);
    }
}

let maxCount = 0;
let mostFrequentNumber;

for (const [num, count] of data.entries()) {
    if (count > maxCount) {
        maxCount = count;
        mostFrequentNumber = num;
    }
}

arr = arr.filter((num) => num !== mostFrequentNumber);

console.log(arr);





//3 LOOPS. FUNCTIONS


//1
 function createArray(start, end) {
    return Array(end - start + 1).fill().reduce(function(arr, _, i) {
      arr.push(start + i);
      return arr;
    }, []);
  }
  
  var arr = createArray(2, 9);
  console.log(arr); 
  

//2
function printNumbers(a, b) {
    for (let i = a; i <= b; i++) {
      let count = i - a + 1;
      for (let j = 0; j < count; j++) {
        console.log(i);
      }
    }
  }
  
  printNumbers(2, 5);
  

//3
function randArray(length) {
let k = [];
for (let i = 0; i < 5; i++) {
   let value = Math.floor(Math.random() * 500);
   k.push(value);
}
return k;
}
let result = randArray(5);
console.log(result);


/*4.
Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]


5.
Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
let arrNew = funcName(arr);
/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 



6.
Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
calc(10, 3, 1); // =>

7
[19:32]

Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/

