/*1.
let pattern = /^[A-Z]/;
let upperCase = prompt('Your string');



 if (pattern.test(upperCase)) {
    console.log('String starts with uppercase character');
 } else {
    console.log('String not starts with uppercase character');
 }
*/
2.
/*let patT = /^([a-zA-Z0-9_.+-]+)\@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]+$/
let email = prompt('Your email')
if (patT.test(email)) {
    console.log('true');
} else {
    console.log('false');
}*/
3.
function swapSubstrings(inputString) {
  
    const outputString = inputString.replace(/(.*?)(\S+)\s+(.*?)(\S+)/, (match, group1, substring1, group2, substring2) => {
        return group2 + substring2 + ' ' + group1 + substring1;
      });
    return outputString;
  }
  
  const inputString = prompt("веддіть строку:");
  if (inputString === null || inputString.trim() === '') {
    alert("ви не ввели.");
  } else {
    const result = swapSubstrings(inputString);
    alert("результат: " + result);
  }
  
4.
function formatCreditCard(event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, ''); 
    const formattedValue = addDashesEveryFourDigits(value);
    input.value = formattedValue;
  }
  
  function addDashesEveryFourDigits(str) {
    return str.replace(/(\d{4}(?!$))/g, '$1-'); 
  }
  
5.
let valid =/^[A-Za-z0-9]+([-_][A-Za-z0-9]+)*@[A-Za-z0-9-]+\.[A-Za-z]+$/
let email = prompt('Your email')
if (valid.test(email)) {
    console.log('true');
} else {
    console.log('false');
}

6.


function findNumbersInString(inputString) {
  
  const numbers = inputString.match(/\d+(\.\d+)?/g);
  return numbers || []; 
}

function checkLogin() {
  let login;
  while (true) {
      login = prompt('Будь ласка, введіть пароль (від 2 до 10 символів, тільки букви та цифри, перший символ не число):');
      if (isValidLogin(login)) {
          const numbersInLogin = findNumbersInString(login);
          alert('Знайдені числа у введеному паролі: ' + numbersInLogin.join(', '));
          break;
      } else {
          alert('Неправильний формат пароля! Спробуйте ще раз.');
      }
  }
}

function isValidLogin(login) {
  if (!login || login.length < 2 || login.length > 10 || /^\d/.test(login) || !/^[a-zA-Z0-9]+$/.test(login)) {
      return false;
  }
  return true;
}

checkLogin();


