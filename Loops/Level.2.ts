//Cau 1:
// var randNum: number = Math.round(Math.random() * 50)

// function generateRandomString(a: number) {
//     let str: string = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789'
//     let result: string = ' '
//     let l: number = str.length
//     for (var i: number = 0; i < a; i++) {
//         result += str.charAt(Math.round(Math.random() * l))
//     }
//     return result
// }

// console.log(generateRandomString(randNum))

//Cau 2:
// function randomHexadecimal(a: number) {
//     let str: string = '0123456789abcdef'
//     let result: string = '#'
//     let l: number = str.length
//     for (var i: number = 0; i < a; i++) {
//         result += str.charAt(Math.round(Math.random() * l))
//     }
//     return result
// }

// console.log(randomHexadecimal(6))

//Cau 3:
// function randomNumber() {
//     return Math.round(Math.random() * 255)
// }

// console.log(`rgb(${randomNumber()},${randomNumber()},${randomNumber()})`)

//Cau 4:
// const countries: string[] = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// function arrayUpper(arr: string[]) {
//     let newcountries: string[] = []
//     for (var i: number = 0; i < arr.length; i++) {
//         newcountries.push(arr[i].toUpperCase())
//     }
//     return newcountries
// }

// console.log(arrayUpper(countries))

//Cau 5:
// const countries: string[] = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// function arrayCountriesLength(arr: string[]) {
//     let newarr: number[] = []
//     for (var i: number = 0; i < arr.length; i++) {
//         newarr.push(arr[i].length)
//     }
//     return newarr
// }

// console.log(arrayCountriesLength(countries))

//Cau 6:
// const countries: string[] = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// function arrayOfArray(arr: string[]) {
//     let arrOfArr: object[] = []
//     for (var i: number = 0; i < arr.length; i++) {
//         var newarr: any[] = []
//         var str: string = ''
//         str += arr[i].charAt(0) + arr[i].charAt(1) + arr[i].charAt(2)
//         str.toUpperCase()
//         newarr.push(arr[i])
//         newarr.push(str)
//         newarr.push(arr[i].length)
//         arrOfArr.push(newarr)
//     }
//     return arrOfArr
// }

// console.log(arrayOfArray(countries))

//Cau 7:
// const countries: string[] = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// function landCountry(arr: string[]) {
//     let newarr: string[] = []
//     for (var i: number = 0; i < arr.length; i++) {
//         if (arr[i].includes('land')) {
//             newarr.push(arr[i])
//         }
//     }
//     if (newarr.length != 0) {
//         return console.log(newarr)
//     }
//     else {
//         return console.log(`All these countries are without land`)
//     }
// }

// landCountry(countries)

//Cau 8:
// const countries: string[] = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// function iaCountries(arr: string[]) {
//     let newarr: string[] = []
//     for (var i: number = 0; i < arr.length; i++) {
//         if (arr[i].endsWith('ia')) {
//             newarr.push(arr[i])
//         }
//     }
//     if (newarr.length != 0) {
//         return console.log(newarr)
//     }
//     else {
//         console.log(`These are countries ends without ia.`)
//     }
// }

// iaCountries(countries)

//Cau 9:
// const countries: string[] = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// function bigNumCha(arr: string[]) {
//     let max: string = arr[0]
//     for (var i = 0; i < arr.length; i++) {
//         if (max.length <= arr[i].length) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// console.log(bigNumCha(countries))

//Cau 10:
// const countries: string[] = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// function only5(arr: string[]) {
//     let newarr: string[] = []
//     for (var i: number = 0; i < arr.length; i++) {
//         if (arr[i].length == 5) {
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// }

// console.log(only5(countries))

//Cau 11:
// const webTechs: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// function longest(arr: string[]) {
//     let long: string = arr[0]
//     for (var i: number = 0; i < arr.length; i++) {
//         if (long.length <= arr[i].length) {
//             long = arr[i]
//         }
//     }
//     return long
// }

// console.log(longest(webTechs))

//Cau 12:
// const webTechs: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// function superArr(arr: string[]) {
//     let arrOfArr: object[] = []
//     for (var i: number = 0; i < arr.length; i++) {
//         let newarr: any[] = []
//         newarr.push(arr[i])
//         newarr.push(arr[i].length)
//         arrOfArr.push(newarr)
//     }
//     return arrOfArr
// }

// console.log(superArr(webTechs))

//Cau 13:
// const webTechs: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// console.log(`The for loop:`)
// for (var i: number = 0; i < webTechs.length; i++) {
//     console.log(webTechs[i])
// }

// console.log(`The for of loop:`)

// for (var value of webTechs) {
//     console.log(i)
// }

//Cau 15:
// const fruit: string[] = ['banana', 'orange', 'mango', 'lemon']
// let reverseFruit: string[] = []

// for (var i: number = fruit.length - 1; i >= 0; i--) {
//     reverseFruit.push(fruit[i])
// }

// console.log(fruit)
// console.log(reverseFruit)

//Cau 16:
// const fullStack: object[] = [['HTML', 'CSS', 'JS', 'React'], ['Node', 'Express', 'MongoDB']]

// function superArrayUpper(arr: object[]) {
//     let newarr: any[] = []
//     let newarrupper: string[] = []
//     for (var i: number = 0; i < arr.length; i++) {
//         newarr = newarr.concat(arr[i])
//     }
//     for (var i: number = 0; i < newarr.length; i++) {
//         newarrupper.push(newarr[i])
//     }
//     return newarrupper
// }

// function printArr(arr: any[]) {
//     for (var i: number = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// printArr(superArrayUpper(fullStack))
