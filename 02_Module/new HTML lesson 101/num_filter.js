//2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = Array.from({ length: 10 }, () => getRandomInt(1, 20)); // от 1 до 100
console.log(arr);

someArray = arr

function numericFilter(array) {
    for(count = 0; count < array.length; count++) {
        if (array[count] > 10) {
            console.log(array[count])
        }
    }
}

const randomArray = numericFilter(arr)