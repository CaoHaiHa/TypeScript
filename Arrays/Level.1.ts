//Cau 1:
// const arr1: null[] = []
// const arr2: null[] = Array()

//Cau 2:
// const arr1: undefined[] = [, , , , , , , , , , , ,]
// const arr2: undefined[] = Array(10)

//Cau 3:
// const arr: undefined[] = [, , , , , , , , , , , , , , , , , ,]

// console.log(arr.length)

//Cau 4:
// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(arr.slice(0, 1))
// console.log(arr.slice(Math.floor(arr.length / 2 - 1), Math.floor(arr.length)))
// console.log(arr.slice(arr.length - 1, arr.length))

//Cau 5:
// const mixedDataTypes: any[] = [22, 'JavaScript', false, 10, undefined, null, '2']

// console.log(mixedDataTypes.length)

//Cau 6:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

//Cau 7:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies)

//Cau 8:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.length)

//Cau 9:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies[0])
// console.log(itCompanies[Math.round(itCompanies.length / 2 + 1)])
// console.log(itCompanies[itCompanies.length - 1])

//Cau 10:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// for (var i: number = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i])
// }

//Cau 11:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// var toUpper: Function = function (x: string) {
//     return x.toUpperCase()
// }

// for (var i: number = 0; i < itCompanies.length; i++) {
//     console.log(toUpper(itCompanies[i]))
// }

//Cau 12:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.join(', ').toString().concat(' are big IT companies.'))

// //Cau 13:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
// var company: any = prompt(`Enter a company`)

// company = company.toLowerCase()
// company = company.charAt(0).toUpperCase() + company.slice(1)

// if (itCompanies.includes(company)) {
//     console.log(company)
// }
// else {
//     console.log(`Not found.`)
// }

//Cau 14:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.forEach(function (x: string) {
//     var y: string[] = x.toString().split('')
//     var count: number = 0;
//     for (var i: number = 0; i < y.length; i++) {
//         if (y[i] == 'o') {
//             count += 1
//         }
//     }
//     if (count != 2) {
//         console.log(x)
//     }
// })

//Cau 15:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.sort())

//Cau 16:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.sort())

//Cau 17:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.slice(3))

//Cau 18:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.slice(0, itCompanies.length - 3))

//Cau 19:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
// var l: number = itCompanies.length

// console.log(itCompanies.slice(0, Math.round(l / 2) - 1).concat(itCompanies.slice(Math.round(l / 2))))

//Cau 20:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.shift()
// console.log(itCompanies)

//Cau 21:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
// var l: number = itCompanies.length

// itCompanies.splice(Math.round(l / 2) - 1, 1)
// console.log(itCompanies)

//Cau 22:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.pop()
// console.log(itCompanies)

//Cau 23:
// const itCompanies: string[] = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.splice(0)
// console.log(itCompanies)
