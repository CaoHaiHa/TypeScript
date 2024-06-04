//Cau 1:
// let a: number = Math.round(Math.random() * 20) - 10
// let b: number = Math.round(Math.random() * 20) - 10
// let c: number = Math.round(Math.random() * 20) - 10

// function solveLinEquation(a: number, b: number, c: number): any {
//     let x: any = (-c / a).toFixed(2)
//     let y: any = (-c / b).toFixed(2)
//     return console.log(`x is: ${x}\t\ty is: ${y}`)
// }

// console.log(`${a}x + ${b}y + ${c} = 0`)
// solveLinEquation(a, b, c)

//Cau 2:
// let a: number = Math.round(Math.random() * 20) - 10
// let b: number = Math.round(Math.random() * 20) - 10
// let c: number = Math.round(Math.random() * 20) - 10

// function solveQuadEquation(a: number, b: number, c: number): any {
//     let d: number = b * b - (4 * a * c)
//     let x1: any = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2)
//     let x2: any = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2)
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
// const arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function printArray(arr: any[]) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// printArray(arr)

//Cau 4:
// function showDateTime() {
//     let now: any = new Date()
//     let d: string = String(now.getDate()).padStart(2, '0')
//     let m: string = String((now.getMonth() + 1)).padStart(2, '0')
//     let y: string = now.getFullYear()
//     let h: string = String(now.getHours()).padStart(2, '0')
//     let min: string = String(now.getMinutes()).padStart(2, '0')
//     console.log(`${m}/${d}/${y} ${h}:${min}`)
// }

// showDateTime()

//Cau 5:
// var x: number = Math.round(Math.random() * 10)
// var y: number = Math.round(Math.random() * 10)
// const [newx, newy]: number[] = swapValues(x, y)

// function swapValues(a: number, b: number): number[] {
//     return [b, a]
// }

// console.log(`Before swap:
// x = ${x}\ty = ${y}`)

// console.log(`After swap:
// x = ${newx}\ty = ${newy}`)

//Cau 6:
// const webTechs: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
// const randomNumArray: number[] = [Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100), Math.round(Math.random() * 100)]
// const sortedRandomNumArray: number[] = randomNumArray.sort()

// function reverseArray(arr: any[]): any[] {
//     let reverse: any[] = []
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
// const webTechs: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// function capitalizeArray(arr: string[]): string[] {
//     let capitalize: string[] = []
//     for (var i: number = 0; i < arr.length; i++) {
//         capitalize.push(arr[i].toUpperCase())
//     }
//     return capitalize
// }

// console.log(capitalizeArray(webTechs))

//Cau 8:
// const webTechs: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// function addItem(a: any, arr: any[]): any[] {
//     let item: any[] = arr
//     item.push(a)
//     return item
// }

// console.log(addItem('C++', webTechs))

//Cau 9:
// const webTechs: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// function removeItem(a: number, arr: any[]): any[] {
//     let remove: any[] = arr.slice(0, a).concat(arr.slice(a + 1, arr.length))
//     return remove
// }

// console.log(removeItem(3, webTechs))

//Cau 10:
// const randNum: number = Math.round(Math.random() * 100)

// function sumOfNumbers(num: number): number {
//     let sum: number = 0
//     for (var i: number = 0; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }

// console.log(randNum)
// console.log(sumOfNumbers(randNum))

//Cau 11:
// const randNum: number = Math.round(Math.random() * 100)

// function sumOfOdds(num: number): number {
//     let sum: number = 0
//     for (var i: number = 0; i <= num; i++) {
//         if (i % 2 != 0) {
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(randNum)
// console.log(sumOfOdds(randNum))

//Cau 12:
// const randNum: number = Math.round(Math.random() * 100)

// function sumOfEvens(num: number): number {
//     let sum: number = 0
//     for (var i: number = 0; i <= num; i++) {
//         if (i % 2 == 0) {
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(randNum)
// console.log(sumOfEvens(randNum))

//Cau 13:
// const randNum: number = Math.round(Math.random() * 100)

// function evensAndOdds(num: number) {
//     let countEvens: number = 0
//     let countOdds: number = 0
//     for (var i: number = 0; i <= num; i++) {
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
// function sumOfArguments(...number: number[]): number {
//     let sum: number = 0
//     for (var i: number = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }

// function randNum(): number {
//     return Math.round(Math.random() * 100)
// }

// console.log(sumOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// console.log(sumOfArguments(randNum(), randNum(), randNum(), randNum(), randNum()))
// console.log(sumOfArguments(randNum(), randNum(), randNum(), randNum(), randNum(), randNum()))

//Cau 15:
// function randomUserIp(): number {
//     return Math.round(Math.random() * 255)
// }

// console.log(`${randomUserIp()}.${randomUserIp()}.${randomUserIp()}.${randomUserIp()}`)

//Cau 16:
// function randomMacAddress() {
//     let address: string = '0123456789ABCDEF'
//     let random: string = ''
//     let dot: string = ':'
//     for (var j: number = 0; j < 6; j++) {
//         for (var i: number = 0; i < 2; i++) {
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
//     let hexa: string = '0123456789abcdef'
//     let random: string = '#'
//     for (var i: number = 0; i < 6; i++) {
//         random += hexa.charAt(Math.round(Math.random() * hexa.length - 1))
//     }
//     return random
// }

// console.log(randomHexaNumberGenerator())

//Cau 18:
// function userIdGenerator() {
//     let id: string = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM'
//     let random: string = ''
//     for (var i: number = 0; i < 7; i++) {
//         random += id.charAt(Math.round(Math.random() * id.length - 1))
//     }
//     return random
// }

// console.log(userIdGenerator())
