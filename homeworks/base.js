
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
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
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



