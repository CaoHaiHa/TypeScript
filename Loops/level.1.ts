//Cau 1:
// console.log(`The for loop:`)
// for (var i = 10; i >= 0; i--) {
//     console.log(i)
// }

// console.log(`The while loop:`)
// let j = 10
// while (j >= 0) {
//     console.log(j)
//     j--
// }

// console.log(`The do while loop:`)
// let t = 10
// do {
//     console.log(t)
//     t--
// } while (t >= 0)

//Cau 2:
// console.log(`The for loop:`)
// for (var i: number = 10; i >= 0; i--) {
//     console.log(i)
// }

// console.log(`The while loop:`)
// let j: number = 10
// while (j >= 0) {
//     console.log(j)
//     j--
// }

// console.log(`The do while loop:`)
// let t: number = 10
// do {
//     console.log(t)
//     t--
// } while (t >= 0)

//Cau 3:
// var n: any = prompt(`Enter number n`)

// for (var i: number = 0; i <= n; i++) {
//     console.log(i)
// }


//Cau 4:
// var a: string = '#'

// for (var i: number = 1; i <= 7; i++) {
//     console.log(a)
//     a = a.concat('#')
// }

//Cau 5:
// for (var i: number = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`)
// }

//Cau 6:
// console.log(`i\t\ti^2\t\ti^3`)
// for (var i: number = 0; i <= 10; i++) {
//     console.log(`${i}\t\t${i * i}\t\t${i * i * i}`)
// }

//Cau 7:
// for (var i: number = 0; i <= 100; i++) {
//     if (i % 2 == 0 && i != 0) {
//         console.log(i)
//     }
// }

//Cau 8:
// for (var i: number = 1; i <= 100; i++) {
//     if (i % 2 != 0) {
//         console.log(i)
//     }
// }

//Cau 9:
// for (var i: number = 0; i <= 100; i++) {
//     var count: number = 0;
//     if (i >= 2) {
//         for (var j: number = 1; j <= i; j++) {
//             if (i % j == 0) {
//                 count += 1
//             }
//         }
//     }
//     if (count == 2) {
//         console.log(i)
//     }
// }

//Cau 10:
// var sum: number = 0;

// for (var i: number = 0; i <= 100; i++) {
//     sum += i
// }

// console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

//Cau 11:
// var sumEven: number = 0
// var sumOdd: number = 0

// for (var i: number = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sumEven += i
//     }
//     else {
//         sumOdd += i
//     }
// }

// console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`)

//Cau 12:
// var sumEven: number = 0
// var sumOdd: number = 0
// var arr: number[] = []

// for (var i: number = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sumEven += i
//     }
//     else {
//         sumOdd += i
//     }
// }
// arr.push(sumEven)
// arr.push(sumOdd)
// console.log(arr)

//Cau 13:
// var arr: number[] = []

// for (var i: number = 0; arr.length < 5; i++) {
//     var randNum: number = Math.round(Math.random() * 100)
//     arr.push(randNum)
// }

// console.log(arr)

//Cau 14:
// var arr: number[] = []

// for (var i: number = 0; arr.length < 5; i++) {
//     var randNum: number = Math.round(Math.random() * 100)
//     var count: number = 0;
//     for (var j: number = 0; j <= arr.length; j++) {
//         if (arr[j] == randNum) {
//             count += 1
//         }
//     }
//     if (count != 0) {
//         continue
//     }
//     else {
//         arr.push(randNum)
//     }
// }

// console.log(arr)

//Cau 15:
// function generateRandomString(a: number) {
//     let str: string = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789'
//     let result: string = ' '
//     let l: number = str.length
//     for (var i: number = 0; i < a; i++) {
//         result += str.charAt(Math.round(Math.random() * l))
//     }
//     return result
// }

// console.log(generateRandomString(6))
