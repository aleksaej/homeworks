
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



/*

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
 

//4
 function compact(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const arr = [5, 3, 4, 5, 6, 7, 3];
  const arr2 = compact(arr);
  console.log(arr2); // [5, 3, 4, 6, 7]

//5
  function funcName(arr) {
    let newArr1 = [];
    let newArr2 = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArr1 = newArr1.concat(arr[i]);
      } else {
        newArr2.push(arr[i]);
      }
    }
  
    return [newArr1.filter(element => typeof element !== "string"), newArr2.filter(element => typeof element === "string")];
  }
  
  let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  let arrNew = funcName(arr);
  console.log(arrNew);
 
  
  
//6
function calc(a, b, op) {
    let result;
    switch (op) {
      case 1:
        result = a - b;
        break;
      case 2:
        result = a * b;
        break;
      case 3:
        result = a / b;
        break;
      default:
        result = a + b;
        break;
    }
    return result;
  }
  
  console.log(calc(10, 3, 1)); 


  //7
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
        return false;
      }
    }
    return true;
  }
  
  console.log(findUnique([1, 2, 3, 5, 3]));  
  console.log(findUnique([1, 2, 3, 5, 11])); 

*/

 //4. DEBUGGING. HANDLING EXCEPTIONS

 //1.
 function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) {
    throw new Error("Перший аргумент має бути масивом.");
  }
  
  if (typeof first !== 'number' || typeof second !== 'number') {
    throw new Error("Другий та третій аргументи мають бути числами.");
  }
  
  if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
    throw new Error("Другий та третій аргументи мають бути в межах розміру масиву.");
  }
  
  return arr[first] + arr[second];
}


try {
  const array = [1, 2, 3, 4, 5, 6];
  const result = sumSliceArray(array, 2, 4);
  console.log(result); 
} catch (error) {
  console.error(errror);
}


//2.
function checkAge() {
  try {
    const name = prompt("Введіть ваше ім'я:");
    const age = prompt("Введіть ваш вік:");
    const status = prompt("Введіть ваш статус (адмін, модератор, користувач):");
    
    if (!name || !age || !status) {
      throw new Error("The field is empty! Please enter your age");
    }
    
    if (isNaN(age)) {
      throw new TypeError("Вік має бути числовим значенням.");
    }
    
    const parsedAge = parseInt(age, 10);
    
    if (parsedAge < 18 || parsedAge > 70) {
      throw new RangeError("Вік користувача повинен бути в межах 18-70 років.");
    }
    
    if (status !== "адмін" && status !== "модератор" && status !== "користувач") {
      throw new EvalError("Введено неправильний статус.");
    }
    
    alert("Ви маєте доступ до перегляду фільму!");
  } catch (error) {
    alert(`${error}: ${error}`);
  }
}


//3.

function calcRectangleArea(width, height) {
  if (typeof width !== 'number' || typeof height !== 'number') {
    throw new TypeError("Параметри мають бути числовими значеннями.");
  }
  
  return width * height;
}


try {
  const width = parseFloat(prompt("Введіть ширину прямокутника:"));
  const height = parseFloat(prompt("Введіть висоту прямокутника:"));

  const area = calcRectangleArea(width, height);
  console.log("Площа прямокутника:", area);
} catch (error) {
  console.error(error);
}




//4. 
 class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = 'MonthException';
  }
}

function showMonthName(month) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  if (month < 1 || month > 12) {
    throw new MonthException('Incorrect month number');
  }
  
  return months[month - 1];
}


try {
  console.log(showMonthName(5));  
  console.log(showMonthName(14)); 
} catch (error) {
  console.log(error, error);
}


//5
function showUser(id) {
  if (id < 0) {
    throw new Error("ID must not be negative: " + id);
  }
  
  return { id };
}

function showUsers(ids) {
  const users = [];
  
  for (let i = 0; i < ids.length; i++) {
    try {
      const user = showUser(ids[i]);
      users.push(user);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  return users;
}

const result = showUsers([7, -12, 44, 22]);
console.log(result);
