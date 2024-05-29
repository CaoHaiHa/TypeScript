//Ngay 1 - Cau 1:
//  Nhan xet co the lam cho ma co the doc duoc

//Ngay 1 - Cau 2:
//  Chao mung ban den voi 30DaysOfJavaScript

//Ngay 1 - Cau 3:
//  Nhan xet co the lam cho ma de doc, de su dung lai va nhieu thong tin

//Ngay 1 - cau 4:
// var a = ''
// var b = true
// var c = undefined
// var d = null

//Ngay 1 - Cau 5:
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)

//Ngay 1 - Cau 6:
// var a
// var b
// var c
// var d

//Ngay 1 - Cau 7:
// var a = 1
// var b = 2
// var c = 3
// var d = 4

//Ngay 1 - Cau 8:
// var fullName = 'Cao Hai Ha'
// var marry = 'doc than'
// var country = 'Viet Nam'
// var age = 22

//Ngay 1 - Cau 9:
// var fullName = 'Cao Hai Ha'; var marry = 'docthan'; var country = 'Viet Nam'; var age = 22

//Ngay 1 - Cau 10:
// var myAge = 22
// var yourAge = 30

// console.log(`I am ${myAge} years old.`)
// console.log(`You are ${yourAge} years old.`)

//Ngay 2 - Cap do 1 - Cau 1:
// var challenge = '30DaysOfJavaScript'

//Ngay 2 - Cap do 1 - Cau 2:
// var challenge = '30DaysOfJavaScript'

// console.log(challenge)

//Ngay 2 - Cap do 1 - Cau 3:
// var challenge = '30DaysOfJavaScript'

// console.log(challenge.length)

//Ngay 2 - Cap do 1 - Cau 4:
// var challenge = '30DaysOfJavaScript'

// console.log(challenge.toUpperCase())

//Ngay 2 - Cap do 1 - Cau 5:
// var challenge = '30DaysOfJavaScript'

// console.log(challenge.toLowerCase())

//Ngay 2 - Cap do 1 - Cau 6:
// var challenge = '30DaysOfJavaScript'

// console.log(challenge.substring(2, 18))

//Ngay 2 - Cap do 1 - Cau 7:
// var challenge = '30DaysOfJavaScript'

// console.log(challenge.substring(0, 6))

//Ngay 2 - Cap do 1 - Cau 8:
// var challenge = '30DaysOfJavaScript'

// console.log(challenge.includes('Script'))

//Ngay 2 - Cap do 1 - Cau 9:
// var challenge = '30DaysOfJavaScript'

// console.log(challenge.split(''))

//Ngay 2 - Cap do 1 - Cau 10:
// var challenge = '30 Days Of JavaScript'

// console.log(challenge.split(' '))

//Ngay 2 - Cap do 1 - Cau 11:
// var softWare = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

// console.log(softWare.split(','))

//Ngay 2 - Cap do 1 - Cau 12:
// var challenge = '30 Days Of JavaScript'

// console.log(challenge.replace('JavaScript', 'Python'))

//Ngay 2 - Cap do 1 - Cau 13:
// var challenge = '30 Days Of JavaScript'

// console.log(challenge.charAt(14))

//Ngay 2 - Cap do 1 - Cau 14:
// var challenge = '30 Days Of JavaScript'

// console.log(challenge.charCodeAt(11))

//Ngay 2 - Cap do 1 - Cau 15:
// var challenge = '30 Days Of JavaScript'

// console.log(challenge.indexOf('a'))

//Ngay 2 - Cap do 1 - Cau 16:
// var challenge = '30 Days Of JavaScript'

// console.log(challenge.lastIndexOf('a'))

//Ngay 2 - Cap do 1 - Cau 17:
// var long = 'You cannot end a sentence with because because because is a conjunction'

// console.log(long.indexOf('because'))

//Ngay 2 - Cap do 1 - Cau 18:
// var long = 'You cannot end a tensence with because because because is a conjunction'

// console.log(long.lastIndexOf('because'))

//Ngay 2 - Cap do 1 - Cau 19:
// var long = 'You cannot end a tensence with because because because is a conjunction'

// console.log(long.search('because'))

//Ngay 2 - Cap do 1 - Cau 20:
// var challenge = ' 30 Days Of JavaScript '

// console.log(challenge.trim())

//Ngay 2 - Cap do 1 - Cau 21:
// var challenge = '30 Days Of JavaScript'

// console.log(challenge.startsWith('30'))

//Ngay 2 - Cap do 1 - Cau 22:
// var challenge = '30 Days Of JavaScript'

// console.log(challenge.endsWith('Script'))

//Ngay 2 - Cap do  1 - Cau 23:
// var challenge = '30 Days Of JavaScript'

// console.log(challenge.match('a'))

//Ngay 2 - Cap do 1 - Cau 24:
// var challenge_1 = '30 Days Of'
// var challenge_2 = 'JavaScript'

// console.log(challenge_1.concat(' ', challenge_2))

//Ngay 2 - Cap do  1 - Cau 25:
// var challenge = '30 Days Of JavaScript '

// console.log(challenge.repeat(2))

//Ngay 2 - Cap do 2 - Cau 1:
// console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another')

//Ngay 2 - Cap do 2 - Cau 2:
// console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')

//Ngay 2 - Cap do 2 - Cau 3:
// function equal(a, b) {
//     if (typeof a == typeof b) {
//         return true
//     }
//     else {
//         return `typeof ${+a}: ${typeof +a}`
//     }
// }

// console.log(equal('10', 10))

// //Ngay 2 - Cap do 2 - Cau 4:
// function equal(a, b) {
//     if (parseFloat(a) == b) {
//         return true
//     }
//     else {
//         return Math.ceil(parseFloat(a))
//     }
// }

// console.log(equal('9.8', 10))

//Ngay 2 - Cap do 2 - Cau 5:
// var short_1 = 'python'
// var short_2 = 'jargon'

// function findOn(a, b) {
//     if (a.search('on' >= 0 && b.search('on') >= 0)) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(findOn(short_1, short_2))

// //Ngay 2 - Cap do 2 - Cau 6:
// var course = 'I hope this course is not full jargon'

// function findJargon(a) {
//     if (a.search('jargon') >= 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// console.log(findJargon(course))

//Ngay 2 - Cap do 2 - Cau 7:
// var randNum = Math.random() * 100

// console.log(Math.round(randNum))

// //Ngay 2 - Cap do 2 - Cau 8:
// var randNum = (Math.random() + 1) * 50

// console.log(Math.round(randNum))

//Ngay 2 - Cap do 2 - Cau 9:
// var randNum = Math.random() * 255

// console.log(Math.round(randNum))

//Ngay 2 - Cap do 2 - Cau 10:
// var language = 'JavaScript'
// var randNum = Math.random() * (language.length - 1)

// console.log(language.charAt(Math.round(randNum)))

//Ngay 2 - Cap do 2 - Cau 11:
// console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`)

//Ngay 2 - Cap do 2 - Cau 12:
// var long = 'You cannot end a sentence with because because because is a conjunction'

// console.log(long.substring(31, 54))

//Ngay 2 - Cap do 3 - Cau 1:
// var long = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// var count = 0

// function countLove(a, b) {
//     while (a.includes('love') == true) {
//         b += 1
//         a = a.replace('love', 'l')
//     }
//     return b
// }

// console.log(countLove(long, count))

//Ngay 2 - Cap do 3 - Cau 2:
// var long = 'You cannot end a tensence with because because because is a conjunction'
// var pattern = /because/gi
// var longArray = long.match(pattern)

// console.log(longArray.length)

//Ngay 2 - Cap do 3 - Cau 3:
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// var str = sentence

// str = str.replace(/!/g, '')
// str = str.replace(/@/g, '')
// str = str.replace(/#/g, '')
// str = str.replace(/\$/g, '')
// str = str.replace(/%/g, '')
// str = str.replace(/&/g, '')
// str = str.replace(/;/g, '')

// console.log(str)

//Ngay 2 - Cap do 3 - Cau 4:
// var salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// var a = /\d+/g
// var numbers = salary.match(a).map(Number);

// console.log(numbers[0] * 12 + numbers[1] + numbers[2] * 12)

//Ngay 3 - Cap do 1 - Cau 5:
// var firstName = 'Cao'
// var lastName = 'Ha'
// var country = 'Viet Nam'
// var city = 'Tp.HCM'
// var age = 22
// var isMarried = false
// var year = 2002

// console.log(typeof firstName)
// console.log(typeof lastName)
// console.log(typeof country)
// console.log(typeof city)
// console.log(typeof age)
// console.log(typeof isMarried)
// console.log(typeof year)

//Ngay 3 - Cap do 1 - Cau 2:
// var str = '10'
// var num = 10

// console.log(str == num)

//Ngau 3 - Cap do 1 - Cau 3:
// console.log(parseInt('9.8') == 10)

//Ngay 3 - Cap do 1 - Cau 4-i:
// if (10) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// if ('JavaScript') {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// if (true) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

//Ngay 3 - Cap do 1 - Cau 4-ii:
// if (undefined) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// if (null) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// if (NaN) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

//Ngay 3 - Cap do 1 - Cau 5-i:
// console.log(true)
// console.log(4 > 3)

//Ngay 3 - Cap do 1 - Cau 5-ii:
// console.log(true)
// console.log(4 >= 3)

//Ngay 3 - Cap do 1 - Cau 5-iii:
// console.log(false)
// console.log(4 < 3)

//Ngay 3 - Cap do 1 - Cau 5-iv:
// console.log(false)
// console.log(4 <= 3)

//Ngay 3 - Cap do 1 - Cau 5-v:
// console.log(true)
// console.log(4 == 4)

//Ngay 3 - Cap do 1 - Cau 5-vi:
// console.log(true)
// console.log(4 === 4)

//Ngay 3 - Cap do 1 - Cau 5-vii:
// console.log(false)
// console.log(4 != 4)

//Ngay 3 - Cap do 1 - Cau 5-viii:
// console.log(false)
// console.log(4 !== 4)

//Ngay 3 - Cap do 1 - Cau 5-ix:
// console.log(false)
// console.log(4 != '4')

//Ngay 3 - Cap do 1 - Cau 5-x:
// console.log(true)
// console.log(4 == '4')

//Ngay 3 - Cap do 1 - Cau 5-xi:
// console.log(false)
// console.log(4 === '4')

//Ngay 3 - Cap do 1 - Cau 5-xii:
// var language_1 = 'python'
// var language_2 = 'jargon'

// console.log(language_1.length != language_2.length)

//Ngay 3 - Cap do 1 - Cau 6-i:
// console.log(true)
// console.log(4 > 3 && 10 < 12)

//Ngay 3 - Cap do 1 - Cau 6-ii:
// console.log(false)
// console.log(4 > 3 && 10 > 12)

//Ngay 3 - Cap do 1 - Cau 6-iii:
// console.log(true)
// console.log(4 > 3 || 10 < 12)

//Ngay 3 - Cap do 1 - Cau 6-iv:
// console.log(true)
// console.log(4 > 3 || 10 > 12)

//Ngay 3 - Cap do 1 - Cau 6-v:
// console.log(false)
// console.log(!(4 > 3))

//Ngay 3 - Cap do 1 - Cau 6-vi:
// console.log(true)
// console.log(!(4 < 3))

//Ngay 3 - Cap do 1 - Cau 6-vii:
// console.log(true)
// console.log(!false)

//Ngay 3 - Cap do 1 - Cau 6-viii:
// console.log(false)
// console.log(!(4 > 3 && 10 < 12))

//Ngay 3 - Cap do 1 - Cau 6-ix:
// console.log(true)
// console.log(!(4 > 3 && 10 > 12))

//Ngay 3 - Cap do 1 - Cau 6-x:
// console.log(true)
// console.log(!(4 === '4'))

//Ngay 3 - Cap do 1 - Cau 6-xi:
// var language = 'python'
// var legend = 'dragon'

// console.log(!language.includes('on'))
// console.log(!legend.includes('on'))

//Ngay 3 - Cap do 1 - Cau 7-i:
// const now = new Date()

// console.log(now.getFullYear())

//Ngay 3 - Cap do 1 - Cau 7-ii:
// const now = new Date()

// console.log(now.getMonth() + 1)

//Ngay 3 - Cap do 1 - Cau 7-iii:
// const now = new Date()

// console.log(now.getDay())

//Ngay 3 - Cap do 1 - Cau 7-iv:
// const now = new Date()

// console.log(now.getDate())

//Ngay 3 - Cap do 1 - Cau 7-v:
// const now = new Date()

// console.log(now.getHours())

// //Ngay 3 - Cap do 1 - Cau 7-vi:
// const now = new Date()

// console.log(now.getMinutes())

//Ngay 3 - Cap do 1 - Cau 7-vii:
// const allSeconds = Date.now()

// console.log(allSeconds)

//Ngay 3 - Cap do 2 - Cau 1:
// var base = prompt('Enter base')
// var height = prompt('Enter height')

// console.log(`Enter base: ${base}`)
// console.log(`Enter height: ${height}`)
// console.log(`The area of the triangle is ${base * height * 0.5}`)

//Ngay 3 - Cap do 2 - Cau 2:
// var side_a = prompt('Enter side a')
// var side_b = prompt('Enter side b')
// var side_c = prompt('Enter side c')

// var sum = +side_a + +side_b + +side_c

// console.log(`Enter side a: ${side_a}`)
// console.log(`Enter side b: ${side_b}`)
// console.log(`Enter side c: ${side_c}`)
// console.log(`The perimeter of the triangle is ${sum}`)

//Ngay 3 - Cap do 2 - Cau 3:
// var side_a = prompt('Enter side a')
// var side_b = prompt('Enter side b')

// console.log(`Enter side a: ${side_a}`)
// console.log(`Enter side b: ${side_b}`)
// console.log(`The area of the rectangle is ${side_a * side_b}`)
// console.log(`The perimeter of the rectangle is ${(+side_a + +side_b) * 2}`)

//Ngay 3 - Cap do 2 - Cau 4:
// var r = prompt('Enter radius')
// const pi = 3.14

// console.log(`Enter radius: ${r}`)
// console.log(`The area of the circle is ${Math.round(pi * r * r)}`)
// console.log(`The perimeter of the circle is ${Math.round(2 * pi * r)}`)

//Ngay 3 - Cap do 2 - Cau 5: