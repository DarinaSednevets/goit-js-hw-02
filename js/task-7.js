const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  if (login.length < 4 || login.length > 16) {
    return false;
  }
};
const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }
};

const addLogin = function (allLogins, login) {
  if (isLoginUnique(allLogins, login) === false) {
    return 'Такой логин уже используется!';
  }
  if (isLoginValid(login) === false) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  logins.push(login);
  return 'Логин успешно добавлен!';
};

console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'