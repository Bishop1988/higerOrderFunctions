// activity 1
const simpleFunc = () => {
    console.log("Hello Code Nation")
}

const hof = (fn) => {
    for (let i = 0; i <= 4; i++) {
        fn()
    }
}

hof(simpleFunc)
///////////////

// activity 2
let five = [1,2,3,4,5]

five.map(item => {
    console.log(item * 3)
})
///////////////

// activity 3
const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2)
    }
}

console.log(doMaths(2)(10, multiply))