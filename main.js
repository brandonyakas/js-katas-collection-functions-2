//Kata 1:

function add (x, y) {

    return x + y

}

console.log("Kata 1:", add(2, 4))

//Kata 2:

function multiply (x, y) {

    let total = 0

    for(let index = 0; index < y; index += 1) {

       let z = add(x, 0)

       total = add(z, total)

    }

    return total
}

console.log("Kata 2:", multiply(6, 4))

//Kata 3: 

function power (x, n) {

    let total = 1

    for(let index = 0; index < n; index += 1) {

        let z = multiply(x, 1)

        total = multiply(z, total)

    }

    return total
}

console.log("Kata 3:", power(2, 8))

console.log("Kata 3:", power(3, 4))

//Kata 4:

function factorial (x) {

    let total = 1

    let product = x

    for(let index = 0; index < x; index += 1) {

        let z = multiply(product, 1)

        total = multiply(z, total)

        product = add(product, -1)

    }

    return total
}

console.log("Kata 4:", factorial(5))