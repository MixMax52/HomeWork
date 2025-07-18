//Создайте объект с вашим описанием(имя, возраст и т.д.)
const myPerson = {
    name: 'Mike',
    age: 38,
    email: 'mah@ya.ru',
    is_admin: false
}

//Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.
const mySecondPerson = {
    name: 'Mike',
    age: 38,
    email: 'mah@ya.ru',
    is_admin: false,
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}
mySecondPerson.sayHello('Abrek')


//Создайте массив объектов с описанием пользователей(такой мы делали в уроке).
const usersArray = [
    {
        name: 'Mike',
        age: 38,
        email: 'mah@ya.ru',
        is_admin: false
    },
    {
        name: 'Alex',
        age: 30,
        email: 'alex@ya.ru',
        is_admin: true
    },
    {
        name: 'Nick',
        age: 25,
        email: 'nick@ya.ru',
        is_admin: false
    },
    {
        name: 'John',
        age: 40,
        email: 'john@ya.ru',
        is_admin: false
    }
]

//Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0.
defaultUsers = 0

//Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу.
for(let i = 0; i < usersArray.length; i++) {
    if(usersArray[i].is_admin === false) {
        defaultUsers ++
    }
}

// После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.
console.log(`"count of default users = ${defaultUsers}"`)
