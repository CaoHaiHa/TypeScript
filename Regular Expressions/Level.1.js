// //Cau 1:
// const income = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// const pattern1 = /\d+/g
// const incomeArray = income.match(pattern1)
// const result1 = arr => (+arr[0] + +arr[2]) * 12 + +arr[1]

// console.log(`Total annual income of the person: ${result1(incomeArray)} Euro/year.`)
// console.log(`-------------------------------------------------------------`)

// //Cau 2:
// const position = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative derection, 0 ai origin, 4 and 8 in the positive direction.'
// const parttern2 = /[\d-]+/g
// let points = position.match(parttern2)
// points = points.filter((e) => e !== '-')
// const sortedPoints = points.sort((e1, e2) => e1 - e2)
// const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0]

// console.log(points)
// console.log(sortedPoints)
// console.log(distance)
// console.log(`-------------------------------------------------------------`)

// //Cau 3:
// const is_valid_variable = str => {
//     let parrtern1 = /[^A-za-z\d_$]/g
//     let parrtern2 = /\d/
//     if (parrtern2.test(str)) return console.log(false)
//     else if (parrtern1.test(str)) return console.log(false)
//     else return console.log(true)
// }

// is_valid_variable('first_name')
// is_valid_variable('first-name')
// is_valid_variable('1first_name')
// is_valid_variable('firstname') 