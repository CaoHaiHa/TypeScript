// //Array
// const numArray: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //Cau 1:
// console.time(`While loop`)
// let i: number = 0
// while (i < numArray.length) {
//     console.log(numArray[i])
//     i++
// }
// console.timeEnd(`While loop`)

// console.time(`For loop`)
// for (let j: number = 0; j < numArray.length; j++) console.log(numArray[j])
// console.timeEnd(`For loop`)

// console.time(`For of loop`)
// for (let j of numArray) console.log(j)
// console.timeEnd(`For of loop`)

// console.time(`ForEach loop`)
// numArray.forEach((e: number): void => console.log(e))
// console.timeEnd(`ForEach loop`)