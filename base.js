
console.log('Ukolov');
let drStr = 'cool';
let halk = drStr;
alert('Oleksii ' + drStr + ' ' + halk);

let username = 'prom';
let price = 2346;
let isValid = false;
let emptyObject = null;
let averageMark = undefined;
let isAdult = confirm('Ви досягли повноліття?');
if (isAdult) {
    console.log('Вам більше 17')
}
else {
    console.log('Вам менше 17')
};
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
console.log(`number of seconds in an hour: ${Hour * 3600 }, number of seconds in a day: ${Day * 86400}, number of seconds in a month: ${Mounth * 2629746} `);


