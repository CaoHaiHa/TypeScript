//Array:
const countries: string[] = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names: string[] = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

interface Product {
    product: string,
    price: any
}

const products: Product[] = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
const arr1: any[] = ['Finland', 100, 'Mathias', 'IceLand', 11]

//Cau 3:
const copyCountries: string[] = countries

copyCountries.forEach((e: string) => console.log(e))
console.log(`-------------------------------------------------------------`)

//Cau 4:
const copyNames: string[] = names

copyNames.forEach((e: string) => console.log(e))
console.log(`-------------------------------------------------------------`)

//Cau 5:
const copyNumbers: number[] = numbers

copyNumbers.forEach((e: number) => console.log(e))
console.log(`-------------------------------------------------------------`)

//Cau 6:
const newCountries: string[] = countries.map((e: string) => e.toUpperCase())

console.log(newCountries)
console.log(`-------------------------------------------------------------`)

//Cau 7:
const newCountries2: number[] = countries.map((e: string) => e.length)

console.log(newCountries2)
console.log(`-------------------------------------------------------------`)

//Cau 8:
const newNumbers: number[] = numbers.map((e: number) => e * e)

console.log(newNumbers)
console.log(`-------------------------------------------------------------`)

//Cau 9:
let newNames: string[] = names

console.log(names)

newNames = newNames.map((e: string) => e.toUpperCase())

console.log(newNames)
console.log(`-------------------------------------------------------------`)

//Cau 10:
const newProducts: any[] = products.map((e: any) => console.log(e))

console.log(`-------------------------------------------------------------`)

//Cau 11:
const landCountries: string[] = countries.filter((e: string) => {
    e = e.toLowerCase()
    return e.includes('land')
})

console.log(landCountries)
console.log(`-------------------------------------------------------------`)

//Cau 12:
const countries6Character: string[] = countries.filter((e: string) => {
    if (e.length == 6) return e
})

console.log(countries6Character)
console.log(`-------------------------------------------------------------`)

//Cau 13:
const countries6AndMore: string[] = countries.filter((e: string) => {
    if (e.length >= 6) return e
})

console.log(countries6AndMore)
console.log(`-------------------------------------------------------------`)

//Cau 14:
const countriesStartsWithE: string[] = countries.filter((e: string) => e.startsWith('E'))

console.log(countriesStartsWithE)
console.log(`-------------------------------------------------------------`)

//Cau 15:
const productPriceValue: any = products.filter((e: Product) => {
    console.log(e.price)
    return 0
})

console.log(`------------------------------------------------------------`)

//Cau 16:
const getStringLists = (arr: any[]) => {
    let newarr: string[] = arr.filter((e: any) => typeof e === "string")
    return newarr
}

console.log(getStringLists(arr1))
console.log(`------------------------------------------------------------`)

//Cau 17:
let sum: number = numbers.reduce((total: number, e: number) => total + e, 0)

console.log(sum)
console.log(`------------------------------------------------------------`)

//Cau 18:
const newstring1: string = countries.reduce((total: string, e: string, index: number, arr: string[]) => {
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
let someEx: boolean = countries.some((e: string) => e.length == 6)

console.log(someEx) //In ra kết quả là true
//Every:
let everyEx: boolean = countries.every((e: string) => e.length == 6)

console.log(everyEx) //In ra kết quả là false
console.log(`------------------------------------------------------------`)

//Kết luận:
//Some sẽ kiểm tra từng phần tử của mảng và chỉ cần một phần tử của mảng thỏa điều kiện thì sẽ trả về true. Ngược lại trả về false.
//Every sẽ kiểm tra từng phần tử của mảng. Nếu tất cả phần tử của mảng đều thỏa điều kiện thì sẽ trả về true. Ngược lại trả về false.

//Cau 20:
const isSomeCountries7More: boolean = countries.some((e: string) => e.length > 7)

console.log(isSomeCountries7More)
console.log(`------------------------------------------------------------`)

//Cau 21:
const isAllLandCountries: boolean = countries.every((e: string) => {
    e = e.toLowerCase()
    return e.includes('land')
})

console.log(isAllLandCountries)
console.log(`------------------------------------------------------------`)

//Cau 22:
//Find:
const findEx: string | undefined = countries.find((e: string) => e.length == 6)

console.log(findEx) //In ra kết quả là 'Sweden'

//FindIndex:
const findIndexEx: number = countries.findIndex((e: string) => e.length == 6)

console.log(findIndexEx) //In ra kết quả là 1
console.log(`------------------------------------------------------------`)

//Kết luận:
//Find trả về kết quả là phần tử đầu tiên thỏa điều kiện.
//FindIndex trả về kết quả là chỉ mục của phần tử đầu tiên thỏa điều kiện.

//Cau 23:
const findFirstCountry6Letters: string | undefined = countries.find((e: string) => e.length == 6)

console.log(findFirstCountry6Letters)
console.log(`------------------------------------------------------------`)

//Cau 24:
const findPositionFirstCountry6Letters: number = countries.findIndex((e: string) => e.length == 6)

console.log(findPositionFirstCountry6Letters)
console.log(`------------------------------------------------------------`)

//Cau 25:
const findPositionNorway: number = countries.findIndex((e: string) => e.includes('Norway'))

console.log(findPositionNorway)
console.log(`------------------------------------------------------------`)

//Cau 26:
const findPositionRussia: number = countries.findIndex((e: string) => e.includes('Russia'))

console.log(findPositionRussia)