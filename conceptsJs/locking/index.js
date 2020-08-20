function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

const calcFunction = createCalcFunction(34)
calcFunction()

function createIncrementor(n) {
    return function (num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log('1+19=', addOne(19))
console.log('1+0=',addOne(0))
console.log('10+34=',addTen(34))
console.log('10+(-2)=',addTen(-2))