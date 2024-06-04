//Cau 1:
// const arr1 = []
// const arr2 = Array()

//Cau 2:
// const arr1 = Array(10)
// const arr2 = [, , , , , , , , , , , , , , , , ,]

//Cau 3:
// const arr = [, , , , , , , , , , , , , , , , , , , ,]

// console.log(arr.length)

//Cau 4:
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(arr.slice(0, 1))
// console.log(arr.slice(Math.floor(arr.length / 2) - 1, Math.floor(arr.length / 2)))
// console.log(arr.slice(arr.length - 1, arr.length))

//Cau 5:
// const mixedDataTypes = [22, 'JavaScript', false, 10, undefined, null, '2']

// console.log(mixedDataTypes.length)

//Cau 6:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

//Cau 7:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies)

//Cau 8:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.length)

//Cau 9:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies[0])
// console.log(itCompanies[Math.round(itCompanies.length / 2 - 1)])
// console.log(itCompanies[itCompanies.length - 1])

//Cau 10:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// for (var i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i])
// }

//Cau 11:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// toUpper = function (x) {
//     return x.toUpperCase()
// }

// for (var i = 0; i < itCompanies.length; i++) {
//     console.log(toUpper(itCompanies[i]))
// }

//Cau 12:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.join(', ').toString().concat(' are big IT companies.'))

//Cau 13:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
// var company = prompt(`Enter a company`)

// company = company.toLowerCase()
// company = company.charAt(0).toUpperCase() + company.slice(1)

// if (itCompanies.includes(company)) {
//     console.log(company)
// }
// else {
//     console.log(`Not found.`)
// }

//Cau 14:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.forEach(function (x) {
//     var y = x.toString().split('')
//     var count = 0
//     for (var i = 0; i < y.length; i++) {
//         if (y[i] == 'o') {
//             count += 1
//         }
//     }
//     if (count != 2) {
//         console.log(x)
//     }
// })

// //Cau 15:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.sort())

//Cau 16:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.reverse())

//Cau 17:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.slice(3))

//Cau 18:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.slice(0, itCompanies.length - 3))

//Cau 19:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
// var l = itCompanies.length

// console.log(itCompanies.slice(0, Math.round(l / 2) - 1).concat(itCompanies.slice(Math.round(l / 2))))

//Cau 20:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.shift()
// console.log(itCompanies)

//Cau 21:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
// var l = itCompanies.length

// itCompanies.splice(Math.round(l / 2) - 1, 1)
// console.log(itCompanies)

//Cau 22:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.pop()
// console.log(itCompanies)

//Cau 23:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.splice(0)
// console.log(itCompanies)
