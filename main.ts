//Ngay 7 - Cap do 3 - Cau 1:
// var input1: any = prompt(`Enter the numbers of characters`)
// var input2: any = prompt(`Enter the numbers of ids`)

// function userIdGeneratedByUser() {
//     let id: string = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM'
//     let list: string[] = []
//     for (var i: number = 0; i < input2; i++) {
//         let random: string = ''
//         for (var j: number = 0; j < input1; j++) {
//             random += id.charAt(Math.round(Math.random() * id.length - 1))
//         }
//         list.push(random)
//     }
//     return list
// }

// console.log(userIdGeneratedByUser())

//Ngay 7 - Cap do 3 - Cau 2:
// let [rgb1, rgb2, rgb3]: number[] = rgbColorGenerator()

// function rgbColorGenerator(): number[] {
//     return [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)]
// }

// console.log(`rgb(${rgb1},${rgb2},${rgb3})`)

//Ngay 7 - Cap do 3 - Cau 3:
// const hexaColor: string[] = arrayOfHexaColors10000()
// const randNum: number = Math.round(Math.random() * 10000)

// function arrayOfHexaColors10000(): string[] {
//     let hexa: string = '0123456789ABCDEF'
//     let list: string[] = []
//     for (var i: number = 0; i < 10000; i++) {
//         let random: string = '#'
//         let count: number = 0
//         for (var j: number = 0; j < 6; j++) {
//             random += hexa.charAt(Math.round(Math.random() * hexa.length - 1))
//         }
//         for (var t: number = 0; t < list.length; t++) {
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

// function arrayOfHexaColors(): string[] {
//     let list: string[] = []
//     for (var i: number = 0; i < randNum; i++) {
//         list.push(hexaColor[Math.round(Math.random() * 10000)])
//     }
//     return list
// }

// console.log(hexaColor.length)
// console.log(arrayOfHexaColors())

//Ngay 7 - Cap do 3 - Cau 5:
// function hexaColorRandom(): string {
//     let hexa: string = '0123456789ABCDEF'
//     let random: string = '#'
//     for (var i: number = 0; i < 6; i++) {
//         random += hexa.charAt(Math.round(Math.random() * hexa.length - 1))
//     }
//     return random
// }

// function convertHexaToRgb(a: string): string {
//     let hexa: string = '0123456789ABCDEF'
//     let rgb: string = '('
//     a = a.slice(1, a.length)
//     let x: number = 0
//     let y: number = 1
//     for (var i: number = 0; i < 3; i++) {
//         let temp: number = 0
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