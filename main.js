//Array:
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
const arr1 = ['Finland', 100, 'Mathias', 'IceLand', 11]

//Cau 3:
const copyCountries = countries

copyCountries.forEach(e => console.log(e))
console.log(`-------------------------------------------------------------`)

//Cau 4:
const copyNames = names

copyNames.forEach(e => console.log(e))
console.log(`-------------------------------------------------------------`)

//Cau 5:
const copyNumbers = numbers

copyNumbers.forEach(e => console.log(e))
console.log(`-------------------------------------------------------------`)

//Cau 6:
const newCountries = countries.map(e => e.toUpperCase())

console.log(newCountries)
console.log(`-------------------------------------------------------------`)

//Cau 7:
const newCountries2 = countries.map(e => e.length)

console.log(newCountries2)
console.log(`-------------------------------------------------------------`)

//Cau 8:
const newNumbers = numbers.map(e => e * e)

console.log(newNumbers)
console.log(`-------------------------------------------------------------`)

//Cau 9:
let newNames = names

console.log(names)

newNames = newNames.map(e => e.toUpperCase())

console.log(newNames)
console.log(`-------------------------------------------------------------`)

//Cau 10:
const newProducts = products.map(e => console.log(e))

console.log(`-------------------------------------------------------------`)

//Cau 11:
const landCountries = countries.filter(e => {
    e = e.toLowerCase()
    return e.includes('land')
})

console.log(landCountries)
console.log(`-------------------------------------------------------------`)

//Cau 12:
const countries6Character = countries.filter(e => {
    if (e.length == 6) return e
})

console.log(countries6Character)
console.log(`-------------------------------------------------------------`)

//Cau 13:
const countries6AndMore = countries.filter(e => {
    if (e.length >= 6) return e
})

console.log(countries6AndMore)
console.log(`-------------------------------------------------------------`)

//Cau 14:
const countriesStartsWithE = countries.filter(e => e.startsWith('E'))

console.log(countriesStartsWithE)
console.log(`-------------------------------------------------------------`)

//Cau 15:
const productPriceValue = products.filter((e, index) => {
    console.log(e.price)
    return 0
})

console.log(`------------------------------------------------------------`)

//Cau 16:
const getStringLists = (arr) => {
    let newarr = arr.filter(e => typeof e === "string")
    return newarr
}

console.log(getStringLists(arr1))
console.log(`------------------------------------------------------------`)

//Cau 17:
let sum = numbers.reduce((total, e) => total + e, 0)

console.log(sum)
console.log(`------------------------------------------------------------`)

//Cau 18:
const newstring1 = countries.reduce((total, e, index, arr) => {
    if (total == '') {
        total += 'Estonia, '
    }
    if (index < arr.length - 1) {
        total += e + ', '
    }
    else {
        total += 'and ' + e + ' are north European countries'
    }
    return total
}, '')

console.log(newstring1)
console.log(`------------------------------------------------------------`)

//Cau 19:
//Some:
let someEx = countries.some(e => e.length == 6)

console.log(someEx) //In ra kết quả là true
//Every:
let everyEx = countries.every(e => e.length == 6)

console.log(everyEx) //In ra kết quả là false
console.log(`------------------------------------------------------------`)

//Kết luận:
//Some sẽ kiểm tra từng phần tử của mảng và chỉ cần một phần tử của mảng thỏa điều kiện thì sẽ trả về true. Ngược lại trả về false.
//Every sẽ kiểm tra từng phần tử của mảng. Nếu tất cả phần tử của mảng đều thỏa điều kiện thì sẽ trả về true. Ngược lại trả về false.

//Cau 20:
const isSomeCountries7More = countries.some(e => e.length > 7)

console.log(isSomeCountries7More)
console.log(`------------------------------------------------------------`)

//Cau 21:
const isAllLandCountries = countries.every(e => {
    e = e.toLowerCase()
    return e.includes('land')
})

console.log(isAllLandCountries)
console.log(`------------------------------------------------------------`)

//Cau 22:
//Find:
const findEx = countries.find(e => e.length == 6)

console.log(findEx) //In ra kết quả là 'Sweden'

//FindIndex:
const findIndexEx = countries.findIndex(e => e.length == 6)

console.log(findIndexEx) //In ra kết quả là 1
console.log(`------------------------------------------------------------`)

//Kết luận:
//Find trả về kết quả là phần tử đầu tiên thỏa điều kiện.
//FindIndex trả về kết quả là chỉ mục của phần tử đầu tiên thỏa điều kiện.

//Cau 23:
const findFirstCountry6Letters = countries.find(e => e.length == 6)

console.log(findFirstCountry6Letters)
console.log(`------------------------------------------------------------`)

//Cau 24:
const findPositionFirstCountry6Letters = countries.findIndex(e => e.length == 6)

console.log(findPositionFirstCountry6Letters)
console.log(`------------------------------------------------------------`)

//Cau 25:
const findPositionNorway = countries.findIndex(e => e.includes('Norway'))

console.log(findPositionNorway)
console.log(`------------------------------------------------------------`)

//Cau 26:
const findPositionRussia = countries.findIndex(e => e.includes('Russia'))

console.log(findPositionRussia)