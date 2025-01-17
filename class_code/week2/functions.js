function sayHi(name) {
    console.log(`Hello ${name}`)
}

const sayHi2 = (name) => {
    console.log(`whats up ${name}`)

}

const sayHi3 = (name) => {
    return `whats up ${name}`
}

module.exports = {sayHi, sayHi2, sayHi3}