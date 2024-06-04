//Cau 1:
// let a = Math.round(Math.random() * 20) - 10
// let b = Math.round(Math.random() * 20) - 10
// let c = Math.round(Math.random() * 20) - 10

// function solveLinEquation(a, b, c) {
//     let x = (-c / a).toFixed(2)
//     let y = (-c / b).toFixed(2)
//     return console.log(`x is: ${x}\t\ty is: ${y}`)
// }

// console.log(`${a}x + ${b}y + ${c} = 0`)
// solveLinEquation(a, b, c)

//Cau 2:
// let a = Math.round(Math.random() * 20) - 10
// let b = Math.round(Math.random() * 20) - 10
// let c = Math.round(Math.random() * 20) - 10

// function solveQuadEquation(a, b, c) {
//     let d = b * b - (4 * a * c)
//     x1 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2)
//     x2 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2)
//     if (a == 0) {
//         console.log(`That was not a quadratic equation.`)
//     }
//     else if (d > 0) {
//         console.log(`x1 = ${x1}\t\tx2 = ${x2}`)
//     }
//     else if (d == 0) {
//         console.log(`x = ${x1}`)
//     }
//     else {
//         console.log(`The equation has no solution.`)
//     }
// }

// console.log(`${a}x^2 + ${b}x + ${c} = 0`)
// solveQuadEquation(a, b, c)

//Cau 3:
// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function printArray(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// printArray(arr)

//Cau 4:
// function showDateTime() {
//     let now = new Date()
//     let d = String(now.getDate()).padStart(2, '0')
//     let m = String((now.getMonth() + 1)).padStart(2, '0')
//     let y = now.getFullYear()
//     let h = String(now.getHours()).padStart(2, '0')
//     let min = String(now.getMinutes()).padStart(2, '0')
//     console.log(`${m}/${d}/${y} ${h}:${min}`)
// }

// showDateTime()

//Cau 5:
// var x = Math.round(Math.random() * 10)
// var y = Math.round(Math.random() * 10)
// const [newx, newy] = swapValues(x, y)

// function swapValues(a, b) {
//     return [b, a]
// }

// console.log(`Before swap:
// x = ${x}\ty = ${y}`)

// console.log(`After swap:
// x = ${newx}\ty = ${newy}`)

//Cau 6:
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
// const randomNumArray = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
// const sortedRandomNumArray = randomNumArray.sort()

// function reverseArray(arr) {
//     let reverse = []
//     for (var i = arr.length - 1; i >= 0; i--) {
//         reverse.push(arr[i])
//     }
//     return reverse
// }

// console.log(webTechs)
// console.log(reverseArray(webTechs))
// console.log(sortedRandomNumArray)
// console.log(reverseArray(sortedRandomNumArray))

//Cau 7:
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// function capitalizeArray(arr) {
//     let capitalize = []
//     for (var i = 0; i < arr.length; i++) {
//         capitalize.push(arr[i].toUpperCase())
//     }
//     return capitalize
// }

// console.log(capitalizeArray(webTechs))

//Cau 8:
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// function addItem(a, arr) {
//     let item = arr
//     item.push(a)
//     return item
// }

// console.log(addItem('C++', webTechs))

//Cau 9:
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// function removeItem(a, arr) {
//     let remove = arr.slice(0, a).concat(arr.slice(a + 1, arr.length))
//     return remove
// }

// console.log(removeItem(3, webTechs))

//Cau 10:
// const randNum = Math.round(Math.random() * 100)

// function sumOfNumbers(num) {
//     let sum = 0
//     for (var i = 0; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }

// console.log(randNum)
// console.log(sumOfNumbers(randNum))

//Cau 11:
// const randNum = Math.round(Math.random() * 100)

// function sumOfOdds(num) {
//     let sum = 0
//     for (var i = 0; i <= num; i++) {
//         if (i % 2 != 0) {
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(randNum)
// console.log(sumOfOdds(randNum))

//Cau 12:
// const randNum = Math.round(Math.random() * 100)

// function sumOfEvens(num) {
//     let sum = 0
//     for (var i = 0; i <= num; i++) {
//         if (i % 2 == 0) {
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(randNum)
// console.log(sumOfEvens(randNum))

//Cau 13:
// const randNum = Math.round(Math.random() * 100)

// function evensAndOdds(num) {
//     let countEvens = 0
//     let countOdds = 0
//     for (var i = 0; i <= num; i++) {
//         if (i % 2 == 0) {
//             countEvens += 1
//         }
//         else {
//             countOdds += 1
//         }
//     }
//     console.log(`The number of odds are ${countOdds}.`)
//     console.log(`The number of evens are ${countEvens}.`)
// }

// console.log(randNum)
// evensAndOdds(randNum)

//Cau 14:
// function sumOfArguments() {
//     let sum = 0
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }

// function randNum() {
//     return Math.round(Math.random() * 100)
// }

// console.log(sumOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// console.log(sumOfArguments(randNum(), randNum(), randNum(), randNum(), randNum()))
// console.log(sumOfArguments(randNum(), randNum(), randNum(), randNum(), randNum(), randNum()))

//Cau 15:
// function randomUserIp() {
//     return Math.round(Math.random() * 255)
// }

// console.log(`${randomUserIp()}.${randomUserIp()}.${randomUserIp()}.${randomUserIp()}`)

//Cau 16:
// function randomMacAddress() {
//     let address = '0123456789ABCDEF'
//     let random = ''
//     let dot = ':'
//     for (var j = 0; j < 6; j++) {
//         for (var i = 0; i < 2; i++) {
//             random += address.charAt(Math.round(Math.random() * address.length - 1))
//         }
//         if (j == 5) {
//             break
//         }
//         random += dot
//     }
//     return random
// }

// console.log(randomMacAddress())

//Cau 17:
// function randomHexaNumberGenerator() {
//     let hexa = '0123456789abcdef'
//     let random = '#'
//     for (var i = 0; i < 6; i++) {
//         random += hexa.charAt(Math.round(Math.random() * hexa.length - 1))
//     }
//     return random
// }

// console.log(randomHexaNumberGenerator())

//Cau 18:
// function userIdGenerator() {
//     let id = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM'
//     let random = ''
//     for (var i = 0; i < 7; i++) {
//         random += id.charAt(Math.round(Math.random() * id.length - 1))
//     }
//     return random
// }

// console.log(userIdGenerator())
