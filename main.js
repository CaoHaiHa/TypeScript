//Ngay 7 - Cap do 3 - Cau 1:
// var input1 = prompt(`Enter the numbers of characters`)
// var input2 = prompt(`Enter the numbers of ids`)

// function userIdGeneratedByUser() {
//     let id = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM'
//     let list = []
//     for (var i = 0; i < input2; i++) {
//         let random = ''
//         for (var j = 0; j < input1; j++) {
//             random += id.charAt(Math.round(Math.random() * id.length - 1))
//         }
//         list.push(random)
//     }
//     return list
// }

// console.log(userIdGeneratedByUser())

//Ngay 7 - Cap do 3 - Cau 2:
// let [rgb1, rgb2, rgb3] = rgbColorGenerator()

// function rgbColorGenerator() {
//     return [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)]
// }

// console.log(`rgb(${rgb1},${rgb2},${rgb3})`)

//Ngay 7 - Cap do 3 - Cau 3:
// const hexaColor = arrayOfHexaColors10000()
// const randNum = Math.round(Math.random() * 10000)

// function arrayOfHexaColors10000() {
//     let hexa = '0123456789ABCDEF'
//     let list = []
//     for (var i = 0; i < 10000; i++) {
//         let random = '#'
//         let count = 0
//         for (var j = 0; j < 6; j++) {
//             random += hexa.charAt(Math.round(Math.random() * hexa.length - 1))
//         }
//         for (var t = 0; t < list.length; t++) {
//             if (list[t] == random) {
//                 count++
//             }
//         }
//         if (count == 0) {
//             list.push(random)
//         }
//     }
//     return list
// }

// function arrayOfHexaColors() {
//     let list = []
//     for (var i = 0; i < randNum; i++) {
//         list.push(hexaColor[Math.round(Math.random() * 10000)])
//     }
//     return list
// }

// console.log(hexaColor.length)
// console.log(arrayOfHexaColors())

//Ngay 7 - Cap do 3 - Cau 4:
// const rgbColors = arrayOfRgbColors1000()

// function randomRgbColor() {
//     let random = '('
//     for (var i = 0; i < 3; i++) {
//         let randNum = Math.round(Math.random() * 255)
//         random += randNum
//         if (i == 2) {
//             break
//         }
//         random += ','
//     }
//     random += ')'
//     return random
// }

// function arrayOfRgbColors1000() {
//     let list = []
//     for (var i = 0; i < 1000; i++) {
//         let count = 0;
//         for (var j = 0; j < list.length; j++) {
//             if (list[j] == randomRgbColor()) {
//                 count++
//             }
//         }
//         if (count == 0) {
//             list.push(randomRgbColor())
//         }
//     }
//     return list
// }

// function arrayOfRgbColors() {
//     let list = []
//     let randNum = Math.round(Math.random() * 1000)
//     for (var i = 0; i < randNum; i++) {
//         list.push(rgbColors[Math.round(Math.random() * 990)])
//     }
//     return list
// }

// console.log(arrayOfRgbColors())

//Ngay 7 - Cap do 3 - Cau 5:
// function hexaColorRandom() {
//     let hexa = '0123456789ABCDEF'
//     let random = '#'
//     for (var i = 0; i < 6; i++) {
//         random += hexa.charAt(Math.round(Math.random() * hexa.length - 1))
//     }
//     return random
// }

// function convertHexaToRgb(a) {
//     let hexa = '0123456789ABCDEF'
//     let rgb = '('
//     a = a.slice(1, a.length)
//     let x = 0
//     let y = 1
//     for (var i = 0; i < 3; i++) {
//         let temp = 0
//         temp = hexa.indexOf(a.charAt(x)) + hexa.indexOf(a.charAt(y)) * 16
//         rgb += temp
//         x += 2
//         y += 2
//         if (i == 2) {
//             break
//         }
//         rgb += ','
//     }
//     rgb += ')'
//     return rgb
// }
// console.log(hexaColorRandom())
// console.log(convertHexaToRgb(hexaColorRandom()))

//Ngay 7 - Cap do 3 - Cau 6:
// const reverseString = (str) => str.split('').reverse().join('')
// const rgbTest = rgbColorRandom()

// function convertRgbToHexa(str) {
//     let hexa = '0123456789ABCDEF'
//     let rgb = ''
//     var temp = str.split('(').toString().split(')').toString().split(',')
//     for (var i = 0; i < temp.length; i++) {
//         if (temp[i] == '') {
//             temp.splice(i, 1)
//         }
//     }
//     for (var i = 0; i < temp.length; i++) {
//         let rgbTemp = ''
//         for (; temp[i] > 0;) {
//             var div = 0
//             if (temp[i] > 16) {
//                 div = temp[i] % 16
//                 rgbTemp += hexa.charAt(div)
//             }
//             else {
//                 rgbTemp += hexa.charAt(temp[i])
//                 break
//             }
//             temp[i] = temp[i] / 16
//         }
//         rgb += reverseString(rgbTemp)

//     }
//     return '#' + rgb
// }

// function rgbColorRandom() {
//     let rgbRandom = '('
//     for (var i = 0; i < 3; i++) {
//         let randNum = Math.round(Math.random() * 255)
//         rgbRandom += randNum
//         if (i == 2) {
//             break
//         }
//         rgbRandom += ','
//     }
//     return rgbRandom + ')'
// }

// console.log(rgbTest)
// console.log(convertRgbToHexa(rgbTest))

//Ngay 7 - Cap do 3 - Cau 7:
// function hexaColorRandom() {
//     let hexa = '0123456789ABCDEF'
//     let random = '#'
//     for (var i = 0; i < 6; i++) {
//         random += hexa.charAt(Math.round(Math.random() * hexa.length - 1))
//     }
//     if (random.length < 7) {
//         for (var i = random.length - 1; i < 7; i++) {
//             random += hexa.charAt(Math.round(Math.random() * hexa.length - 1))
//         }
//     }
//     if (random.length == 8) {
//         random = random.slice(0, 7)
//     }
//     return random
// }

// function rgbColorRandom() {
//     let rgbRandom = 'rgb('
//     for (var i = 0; i < 3; i++) {
//         let randNum = Math.round(Math.random() * 255)
//         rgbRandom += randNum
//         if (i == 2) {
//             break
//         }
//         rgbRandom += ','
//     }
//     return rgbRandom + ')'
// }

// function generateColers(str, num) {
//     const arr = []
//     if (str == 'hexa' && num == 1) {
//         return hexaColorRandom()
//     }
//     else if (str == 'hexa' && num != 1) {
//         for (var i = 0; i < num; i++) {
//             arr.push(hexaColorRandom())
//         }
//         return arr
//     }
//     else if (str == 'rgb' && num == 1) {
//         return rgbColorRandom()
//     }
//     else if (str == 'rgb' && num != 1) {
//         for (var i = 0; i < num; i++) {
//             arr.push(rgbColorRandom())
//         }
//         return arr
//     }
//     else {
//         return 'Error'
//     }
// }

// console.log(generateColers('hexa', 1))
// console.log(generateColers('hexa', 3))
// console.log(generateColers('rgb', 1))
// console.log(generateColers('rgb', 3))

// //Ngay 7 - Cap do 3 - Cau 8:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`, 'Samsung']

// function shuffleArray(arr) {
//     let shuffleArr = []
//     for (var i = 0; i < arr.length; i++) {
//         let randNum = Math.round(Math.random() * arr.length - 1)
//         let count = 0
//         for (var j = 0; j < shuffleArr.length; j++) {
//             if (shuffleArr[j] == arr[randNum] || arr[randNum] == undefined) {
//                 count++;
//             }
//         }
//         if (count == 0 && arr[randNum] != undefined) {
//             shuffleArr.unshift(arr[randNum])
//         }
//         else {
//             i--
//         }
//     }
//     return shuffleArr
// }

// console.log(shuffleArray(itCompanies))

//Ngay 7 - Cap do 3 - Cau 9:
// const randNum = Math.floor(Math.random() * 15)

// const factorial = (num) => {
//     let result = 1
//     for (let i = num; i > 0; i--) {
//         result *= i
//     }
//     return result
// }

// console.log(randNum)
// console.log(factorial(randNum))

//Ngay 7 - Cap do 3 - Cau 10:
// const isEmpty = (any) => {
//     if (any === '') {
//         return console.log(`Empty.`)
//     }
//     else if (any == undefined) { return console.log(`Empty.`) }
//     else if (any == null) { return console.log(`Empty.`) }
//     else { return console.log(`Not empty.`) }
// }

// isEmpty('')

//Ngay 7 - Cap do 3 - Cau 11:
// const sum = (...arguments) => {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }

// const randNum = () => {
//     return Math.floor(Math.random() * 100)
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
// console.log(sum(randNum(), randNum(), randNum(), randNum(), randNum()))
// console.log(sum(randNum(), randNum(), randNum(), randNum(), randNum(), randNum()))

//Ngay 7 - Cap do 3 - Cau 12:
// const sumOfArrayItems = (arr) => {
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] != "number") {
//             return `reasonable feedback`
//         }
//         result += arr[i]
//     }
//     return result
// }

// console.log(sumOfArrayItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(sumOfArrayItems([1, 2, 3, 4, '5', 6, 7, 8, 9, 10]))
// console.log(sumOfArrayItems([1, 2, 3, 4, 'name', 6, 7, 8, 9, 10]))

//Ngay 7 - Cap do 3 - Cau 13:
// const average = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] != "number") {
//             return `reasonable feedback`
//         }
//         sum += arr[i]
//     }
//     sum = (sum / (arr.length)).toFixed(2)
//     return sum
// }

// console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(average([1, 2, 3, 4, '5', 6, 7, 8, 9, 10]))
// console.log(average([1, 2, 3, 4, `name`, 6, 7, 8, 9, 10]))

//Ngay 7 - Cap do 3 - Cau 14:
// const modifyArray = (arr) => {
//     if (arr.length < 5) { return `item not found` }
//     arr[4] = arr[4].toUpperCase()
//     return arr
// }

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
// console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']))
// console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']))

//Ngay 7 - Cap do 3 - Cau 15:
// const randNum = Math.floor(Math.random() * 100)

// const isPrime = (num) => {
//     let count = 0
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) { count++ }
//     }
//     if (count != 0) { return false }
//     else { return true }
// }

// console.log(randNum)
// console.log(isPrime(randNum))

//Ngay 7 - Cap do 3 - Cau 16:
// const isUnique = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] == arr[j]) { count++ }
//         }
//         if (count != 0) { return false }
//     }
//     return true
// }

// console.log(isUnique([1, '2', 3]))
// console.log(isUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(isUnique([1, 2, 3, 4, 5, 1, 6, 7, 8, 9]))
// console.log(isUnique(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
// console.log(isUnique(['Google', 'Facebook', 'Apple', 'Amazon', 'Apple', 'IBM']))

//Ngay 7 - Cap do 3 - Cau 17:
// const isSameDataType = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (typeof arr[i] != typeof arr[j]) { return false }
//         }
//     }
//     return true
// }

// console.log(isSameDataType([1, '2', 3, [1, 2, 3, 4]]))
// console.log(isSameDataType([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(isSameDataType(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']))
// console.log(isSameDataType(['Google', 'Facebook', 'Apple', 'Amazon', undefined, 'IBM']))

//Ngay 7 - Cap do 3 - Cau 18:
// const isValidVariable = (str) => {
//     let javascript = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM$_'
//     for (let i = 0; i < str.length; i++) {
//         let count = 0
//         for (let j = 0; j < javascript.length; j++) {
//             if (str.charAt(i) != javascript.charAt(j)) { count++ }
//         }
//         if (count != javascript.length - 1) { return false }
//     }
//     return true
// }

// console.log(isValidVariable(`tiktok`))
// console.log(isValidVariable(`YouTuBe`))
// console.log(isValidVariable(`_Fac$book_`))
// console.log(isValidVariable(`Z@lo`))
// console.log(isValidVariable(`Inst^gr^m`))
// console.log(isValidVariable(`#-^-Super-^-#`))

//Ngay 7 - Cap do 3 - Cau 19:
// const sevenRandomNumbers = () => {
//     let seven = []
//     for (let i = 0; i < 7; i++) {
//         let randNum = Math.floor(Math.random() * 9)
//         let count = 0;
//         for (let j = 0; j < seven.length; j++) {
//             if (seven[j] == randNum) { count++ }
//         }
//         if (count != 0) {
//             i--
//             continue
//         }
//         else { seven.push(randNum) }
//     }
//     return seven
// }

// console.log(sevenRandomNumbers())

//Ngay 7 - Cap do 3 - Cau 20:
// const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']

// const reverseCountries = (arr) => {
//     let reverse = []
//     let copy = arr
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reverse.push(arr[i])
//     }
//     return reverse
// }

// console.log(countries)
// console.log(reverseCountries(countries))