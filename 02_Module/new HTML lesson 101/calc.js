//3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль. Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

function calc(arg1, arg2, math_oper) {
    if (math_oper === 'plus') {
        result = arg1 + arg2
        return result = console.log(`${arg1} + ${arg2} = ${result}`)
        
    } else if (math_oper === 'minus') {
        result = arg1 - arg2
        return result = console.log(`${arg1} - ${arg2} = ${result}`)

    } else if (math_oper === 'mult') {
        result = arg1 * arg2
        return result = console.log(`${arg1} * ${arg2} = ${result}`)

    } else if (math_oper === 'div') {
        result = arg1 / arg2
        return result = console.log(`${arg1} : ${arg2} = ${result.toFixed(2)}`)

    } else {
        console.log("операция не существует или указана с ошибкой")
    }
}

const someExample = calc(5, 7, 'div')