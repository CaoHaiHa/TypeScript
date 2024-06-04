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