//Cau 2:
// let text: string = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// var words: string[] = text.split('.').toString().split(' ').toString().split(',')

// for (var i: number = 0; i < words.length; i++) {
//     if (words[i] == '') {
//         words.splice(i, 1)
//     }
// }

// console.log(words)
// console.log(words.length)

//Cau 3:
// const shoppingCart: string[] = ['Milk', 'Coffee', 'Tea', 'Honey']
// var allergic: any = prompt('Are you allergic to honey? Please anwser yes or no.')

// function meatCheck(a: string[]) {
//     for (var i: number = 0; i < a.length; i++) {
//         if (a[i] == 'Meat') {
//             return a
//         }
//     }
//     return a.unshift('Meat')
// }

// function sugarCheck(a: string[]) {
//     for (var i: number = 0; i < a.length; i++) {
//         if (a[i] == 'Sugar') {
//             return a
//         }
//     }
//     return a.push('Sugar')
// }

// allergic.toLowerCase()
// function allergicHoney(a: any, b: string[]) {
//     if (a == 'yes') {
//         for (var i: number = 0; i < b.length; i++) {
//             if (b[i] == 'Honey') {
//                 b.splice(i, 1)
//                 return b
//             }
//         }
//     }
//     else {
//         return b
//     }
// }

// function greenTea(a: string[]) {
//     for (var i: number = 0; i < a.length; i++) {
//         if (a[i] == 'Tea') {
//             a.splice(i, 1, 'Green Tea')
//             return a
//         }
//     }
// }

// meatCheck(shoppingCart)
// sugarCheck(shoppingCart)
// allergicHoney(allergic, shoppingCart)
// greenTea(shoppingCart)

// console.log(shoppingCart)

//Cau 4:
// const countries: string[] = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

// function ethiopiaCheck(a: string[]) {
//     for (var i: number = 0; i < a.length; i++) {
//         if (a[i] == 'Ethiopia') {
//             return console.log(a[i].toUpperCase())
//         }
//     }
//     a.push('Ethiopia')
//     return console.log(a)
// }

// ethiopiaCheck(countries)

//Cau 5:
// const webTechs: string[] = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
// ]

// function sassCheck(a: string[]) {
//     for (var i: number = 0; i < a.length; i++) {
//         if (a[i] == 'Sass') {
//             return console.log(`Sass is a CSS preprocess`)
//         }
//     }
//     a.push('Sass')
//     return console.log(a)
// }

// sassCheck(webTechs)

//Cau 6:
// const frontEnd: string[] = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd: string[] = ['Node', 'Express', 'MongoDB']
// var fullStack: string[] = frontEnd.concat(backEnd)

// console.log(fullStack)
