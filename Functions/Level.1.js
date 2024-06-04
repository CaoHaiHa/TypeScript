//Cau 1:
// function fullName() {
//     let name = 'Cao' + ' Hai' + ' Ha'
//     console.log(name)
// }

// fullName()

//Cau 2:
// function fullName(firstName, lastName) {
//     let space = ' '
//     return firstName + space + lastName
// }

// console.log(fullName('Ha', 'Cao'))

//Cau 3:
// function addNumbers(a, b) {
//     let sum = a + b
//     return sum
// }

// console.log(addNumbers(10, 2))

//Cau 4:
// function areaOfRectangle(length, width) {
//     let area = length * width
//     return area
// }

// console.log(`Area of rectangle is: ${areaOfRectangle(3, 5)}`)

//Cau 5:
// function perimeterOfRectangle(length, width) {
//     let perimeter = 2 * (length + width)
//     return perimeter
// }

// console.log(`Perimeter of rectangle is: ${perimeterOfRectangle(3, 5)}`)

//Cau 6:
// function volumeOfRectPrism(length, width, height) {
//     let volume = length * width * height
//     return volume
// }

// console.log(`Volume of rectangular prism is: ${volumeOfRectPrism(5, 3, 5)}`)

//Cau 7:
// const pi = Math.PI

// function areaOfCircle(radius) {
//     let area = radius * radius * pi
//     return area.toFixed(2)
// }

// console.log(`Area of circle is: ${areaOfCircle(5)}`)

//Cau 8:
// const pi = Math.PI

// function circumOfCircle(radius) {
//     let circumference = 2 * radius * pi
//     return circumference.toFixed(2)
// }

// console.log(`Circumference of circle is: ${circumOfCircle(5)}`)

//Cau 9:
// const density = (mass, volume) => mass / volume

// console.log(`Density of a substance is: ${density(107, 10)}`)

//Cau 10:
// const speed = (totalDistance, totalTime) => (totalDistance / totalTime).toFixed(2)

// console.log(`Speed is: ${speed(100, 2.5)}`)

//Cau 11:
// const weight = (mass, gravity) => mass * gravity

// console.log(`Weight of a substance is: ${weight(10, 10)}`)

//Cau 12:
// function convertCelsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9 / 5) + 32
//     return fahrenheit.toFixed(2)
// }

// console.log(`Convert oC to oF: ${convertCelsiusToFahrenheit(40)}`)

//Cau 13:
// function bmiCalculate(weight, height) {
//     let bmi = (weight / (height * height)).toFixed(2)
//     if (bmi < 18.5) {
//         console.log(`Underweight: BMI is less than 18.5, BMI: ${bmi}`)
//     }
//     else if (bmi >= 18.5 && bmi <= 24.9) {
//         console.log(`Normal weight: BMI is 18.5 to 24.9, BMI: ${bmi}`)
//     }
//     else if (bmi >= 25 && bmi <= 29.9) {
//         console.log(`Overweight: BMI is 25 to 29.9, BMI: ${bmi}`)
//     }
//     else {
//         console.log(`Obese: BMI is 30 or more, BMI: ${bmi}`)
//     }
// }

// bmiCalculate(80, 1.7)

//Cau 14:
// let month = prompt(`Enter a month`)

// function checkSeason(m) {
//     m = m.toLowerCase()
//     if (m == `march` || m == `april` || m == `may`) {
//         return `Spring`
//     }
//     else if (m == `june` || m == `july` || m == `august`) {
//         return `Summer`
//     }
//     else if (m == `september` || m == `october` || m == `november`) {
//         return `Autumn`
//     }
//     else if (m == `december` || m == `january` || m == `february`) {
//         return `Winter`
//     }
//     else {
//         return `Entered value was not a month`
//     }
// }

// console.log(checkSeason(month))

//Cau 15:
// let a = Math.round(Math.random() * 10)
// let b = Math.round(Math.random() * 10)
// let c = Math.round(Math.random() * 10)

// function findMax(a, b, c) {
//     if (a >= b && a >= c) {
//         return a
//     }
//     else if (b >= a && b >= c) {
//         return b
//     }
//     else {
//         return c
//     }
// }

// console.log(`${a}\t${b}\t${c}`)
// console.log(findMax(a, b, c))
