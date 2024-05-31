//Cau 1:
// var base = prompt('Enter base')
// var height = prompt('Enter height')

// if (typeof base == 'number' && typeof height == 'number') {
//     console.log(`Enter base: ${base}`)
//     console.log(`Enter height: ${height}`)
//     console.log(`The area of the triangle is ${base * height * 0.5}`)
// }
// else {
//     console.log('Error')
// }

//Cau 2:
// var side_a = prompt('Enter side a')
// var side_b = prompt('Enter side b')
// var side_c = prompt('Enter side c')

// var sum: number = 0

// if (typeof side_a == 'number' && typeof side_b == 'number' && typeof side_c == 'number') {
//     sum = +side_a + +side_b + +side_c
//     console.log(`Enter side a: ${side_a}`)
//     console.log(`Enter side b: ${side_b}`)
//     console.log(`Enter side c: ${side_c}`)
//     console.log(`The perimeter of the triangle is ${sum}`)
// }
// else {
//     console.log('Error')
// }

//Cau 3:
// var side_a = prompt('Enter side a')
// var side_b = prompt('Enter side b')

// if (typeof side_a == 'number' && typeof side_b == 'number') {
//     console.log(`Enter side a: ${side_a}`)
//     console.log(`Enter side b: ${side_b}`)
//     console.log(`The area of the rectangle is ${side_a * side_b}`)
//     console.log(`The perimeter of the rectangle is ${(+side_a + +side_b) * 2}`)
// }
// else {
//     console.log('Error')
// }

//Cau 4:
// var r = prompt('Enter radius')
// const pi: number = 3.14

// if (typeof r == 'number') {
//     console.log(`Enter radius ${r}`)
//     console.log(`The area of the circle is ${Math.round(pi * r * r)}`)
//     console.log(`The perimeter of the circle is ${Math.round(2 * pi * r)}`)
// }
// else {
//     console.log('Error')
// }

//Cau 5:
// var x = prompt('Enter x-intercept')
// var y = prompt('Enter y-intercept')

// if (typeof x == 'number' && typeof y == 'number') {
//     console.log(`Enter x-intercept: ${x}`)
//     console.log(`Enter y-intercept: ${y}`)
//     console.log('y = 2x -2')
//     console.log(`x: ${x} => y = ${2 * x - 2}`)
//     console.log(`y: ${y} => x = ${(+y + 2) / 2}`)
// }
// else {
//     console.log('Error')
// }

//Cau 6:
// var x1 = prompt('Enter x1')
// var y1 = prompt('Enter y1')
// var x2 = prompt('Enter x2')
// var y2 = prompt('Enter y2')

// if (typeof x1 == 'number' && typeof x2 == 'number' && typeof y1 == 'number' && typeof y2 == 'number') {
//     console.log(`Enter point 1: (${x1}, ${y1})`)
//     console.log(`Enter point 2: (${x2}, ${y2})`)
//     console.log(`Slope is m = (y2-y1)/(x2-x1) = ${(+y2 - +y1) / (+x2 - +x1)}`)
// }
// else {
//     console.log('Error')
// }

//Cau 8:
// var x = prompt('Enter x')

// if (typeof x == 'number') {
//     console.log(`Enter x: ${x}`)
//     console.log('\ty = x^2 + 6x + 9')
//     console.log(` => y = ${x * x + 6 * x + 9}`)
// }
// else {
//     console.log('Error')
// }

//Cau 9:
// var hours = prompt('Enter hours')
// var ratePH = prompt('Enter rate per hours')

// if (typeof hours == 'number' && typeof ratePH == 'number') {
//     console.log(`Enter hours: ${hours}`)
//     console.log(`Enter rate per hours: ${ratePH}`)
//     console.log(`Your weekly earnings is ${hours * ratePH}`)
// }
// else {
//     console.log('Error')
// }

//Cau 10:
// var fullName = prompt('Enter your full name')

// if (typeof fullName == 'string') {
//     if (fullName.length > 7) {
//         console.log('Your name is long')
//     }
//     else {
//         console.log('Your name is short')
//     }
// }
// else {
//     console.log('Error')
// }

//Cau 11:
// let firstName: string = 'Einstein'
// let lastName: string = 'Albert'

// if (firstName.length > lastName.length) {
//     console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// }
// else if (firstName.length == lastName.length) {
//     console.log(`Your first name, ${firstName} and your family name, ${lastName} are the same length`)
// }
// else {
//     console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
// }

//Cau 12:
// let myAge: number = 22
// let yourAge: number = 30

// if (myAge > yourAge) {
//     console.log(`I am ${myAge} years older than you`)
// }
// else if (myAge == yourAge) {
//     console.log(`We are the same age`)
// }
// else {
//     console.log(`I am ${myAge} years younger than you`)
// }

//Cau 13:
// var year: any = prompt('Enter birth year')
// let now: any = new Date()
// var yourAge = now.getFullYear() - year

// console.log(`Enter birth year: ${year}`)

// if (yourAge >= 18) {
//     console.log(`You are ${yourAge}. You are old enough to drive`)
// }
// else {
//     console.log(`You are ${year}. You will be allowed to drive after ${18 - yourAge} years`)
// }

//Cau 14:
// var timeForLive: any = prompt('Enter number of years you live')
// var secondForLive: number = timeForLive * 365 * 24 * 60 * 60

// console.log(`Enter number of years you live: ${timeForLive}`)
// console.log(`You lived ${secondForLive} seconds.`)

//Cau 15-i:
// let now: any = new Date()

// console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}: ${now.getMinutes()}`)

//Cau 15-ii:
// let now: any = new Date()

// console.log(`${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}: ${now.getMinutes()}`)

//Cau 15-iii:
// let now: any = new Date()

// console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}: ${now.getMinutes()}`)
