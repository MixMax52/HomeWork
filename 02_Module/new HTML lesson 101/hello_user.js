//1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

function helloUser(firstName) {
    return console.log(`"Hello ${firstName}"`)
}

const userName = helloUser('Gulchatai')