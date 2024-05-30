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
// var x = prompt('Enter x-intercept')
// var y = prompt('Enter y-intercept')

// console.log(`Enter x-intercept: ${x}`)
// console.log(`Enter y-intercept: ${y}`)
// console.log('y = 2x -2')
// console.log(`x: ${x} => y = ${2 * x - 2}`)
// console.log(`y: ${y} => x = ${(+y + 2) / 2}`)

// //Ngay 3 - Cap do 2 - Cau 6:
// var x1 = prompt('Enter x1')
// var y1 = prompt('Enter y1')
// var x2 = prompt('Enter x2')
// var y2 = prompt('Enter y2')

// console.log(`Enter point 1: (${x1}, ${y1})`)
// console.log(`Enter point 2: (${x2}, ${y2})`)
// console.log(`Slope is m = (y2-y1)/(x2-x1) = ${(+y2 - +y1) / (+x2 - +x1)}`)

//Ngay 3 - Cap do 2 - Cau 8:
// var x = prompt('Enter x')

// console.log(`Enter x: ${x}`)
// console.log(`\ty = x^2 + 6x +9`)
// console.log(` => y = ${x * x + 6 * x + 9}`)

//Ngay 3 - Cap do 2 - Cau 9:
// var hours = prompt('Enter hours')
// var ratePH = prompt('Enter rate per hours')

// console.log(`Enter hours: ${hours}`)
// console.log(`Enter rate per hours: ${ratePH}`)
// console.log(`Your weekly earning is ${hours * ratePH}`)

//Ngay 3 - Cap do 2 - Cau 10:
// var fullName = prompt('Enter your full name')

// if (fullName.length > 7) {
//     console.log('Your name is long')
// }
// else {
//     console.log('Your name is short')
// }

//Ngay 3 - Cap do 2 - Cau 11:
// let firstName = 'Einstein'
// let lastName = 'Albert'

// if (firstName.length > lastName.length) {
//     console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// }
// else if (firstName.length == lastName.length) {
//     console.log(`Your first name, ${firstName} and family name, ${lastName} are the same length`)
// }
// else {
//     console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
// }

//Ngay 3 - Cap do 2 - Cau 12:
// let myAge = 22
// let yourAge = 30

// if (myAge > yourAge) {
//     console.log(`I am ${myAge} years older than you`)
// }
// else if (myAge == yourAge) {
//     console.log(`We are the same age`)
// }
// else {
//     console.log(`I am ${myAge} years younger than you`)
// }

//Ngay 3 - Cap do 2 - Cau 13:
// var year = prompt('Enter birth year')
// let now = new Date()
// var yourAge = now.getFullYear() - year

// console.log(`Enter birth year: ${year}`)

// if (yourAge >= 18) {
//     console.log(`You are ${yourAge}. You are old enough to drive`)
// }
// else {
//     console.log(`You are ${yourAge}. You will be allowed to drive after ${18 - yourAge} years.`)
// }

//Ngay 3 - Cap do 2 - Cau 14:
// var timeForLive = prompt('Enter number of years you live')
// var secondForLive = timeForLive * 365 * 24 * 60 * 60

// console.log(`Enter number of years you live: ${timeForLive}`)
// console.log(`You lived ${secondForLive} seconds.`)

//Ngay 3 - Cap do 2 - Cau 15-i:
// let now = new Date()

// console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}: ${now.getMinutes()}`)

//Ngay 3 - Cap do 2 - Cau 15-ii:
// let now = new Date()

// console.log(`${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}: ${now.getMinutes()}`)

//Ngay 3 - Cap do 2 - Cau 15-iii:
// let now = new Date()

// console.log(`${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}: ${now.getMinutes()}`)

// //Ngay 3 - Cap do 3 - Cau 1:
// let now = new Date()
// var y = now.getFullYear()
// var m = String(now.getMonth() + 1).padStart(2, '0')
// var d = String(now.getDate()).padStart(2, '0')
// var h = String(now.getHours()).padStart(2, '0')
// var min = String(now.getMinutes()).padStart(2, '0')

// console.log(`${y}-${m}-${d} ${h}: ${min}`)

// //Ngay 4 - Cap do 1 - Cau 1:
// var yourAge = prompt('Enter your age')

// console.log(`Enter your age: ${yourAge}`)
// if (+yourAge >= 18) {
//     console.log(`You are old enough to drive.`)
// }
// else {
//     console.log(`You are left with ${18 - +yourAge} years to drive.`)
// }

//Ngay 4 - Cap do 1 - Cau 2:
// let myAge = 22
// var yourAge = prompt('Enter your age')

// console.log(`Enter your age: ${yourAge}`)
// if (myAge > +yourAge) {
//     console.log(`You are ${myAge - +yourAge} years younger than me.`)
// }
// else if (myAge == yourAge) {
//     console.log('We are the same age.')
// }
// else {
//     console.log(`You are ${+yourAge - myAge} years older than me.`)
// }

// //Ngay 4 - Cap do 1 - Cau 3:
// let a = 4
// let b = 3
// let equal = a > b

// if (a > b) {
//     console.log('a is greater than b')
// }
// else {
//     console.log('a is less than b')
// }

// equal
//     ? console.log('a is greater than b')
//     : console.log('a is less than b')

//Ngay 4 - Cap do 1 - Cau 4:
// var num = prompt('Enter a number')

// console.log(`Enter a number: ${num}`)
// if (num % 2 == 0) {
//     console.log(`${num} is an even number.`)
// }
// else {
//     console.log(`${num} is an odd number.`)
// }

//Ngay 4 - Cap do 2 - Cau 1:
// var score = prompt('Enter your score')

// console.log(`Enter your score: ${score}`)
// if (score <= 100 && score >= 80) {
//     console.log('Your grade is: A')
// }
// else if (score <= 79 && score >= 70) {
//     console.log('Your grade is: B')
// }
// else if (score <= 69 && score >= 60) {
//     console.log('Your grade is: C')
// }
// else if (score <= 59 && score >= 50) {
//     console.log('Your grade is: D')
// }
// else {
//     console.log('Your grade is: F')
// }

//Ngay 4 - Cap do 2 - Cau 2:
// var m = prompt('Enter a month')

// m = m.toLowerCase()
// console.log(`Enter a month: ${m}`)

// if (m == 'september' || m == 'october' || m == 'november') {
//     console.log('The season is Autumn.')
// }
// else if (m == 'december' || m == 'january' || m == 'february') {
//     console.log('The season is Winter.')
// }
// else if (m == 'march' || m == 'april' || m == 'may') {
//     console.log('The season is Spring.')
// }
// else if (m == 'june' || m == 'july' || m == 'august') {
//     console.log('The season is Summer.')
// }
// else {
//     console.log('Entered value war not a month')
// }

//Ngay 4 - Cap do 2 - Cau 3:
// var d = prompt(`Enter a day`)

// console.log(`What is the day today? ${d}`)
// d = d.toLowerCase()

// if (d == 'monday' || d == 'tuesday' || d == `wednesday` || d == `thursday` || d == `friday`) {
//     d = d.charAt(0).toUpperCase() + d.slice(1)
//     console.log(`${d} is a working day.`)
// }
// else if (d == `saturday` || d == `sunday`) {
//     d = d.charAt(0).toUpperCase() + d.slice(1)
//     console.log(`${d} is a weekend.`)
// }
// else {
//     console.log(`Entered value was not a day`)
// }

// //Ngay 4 - Cap do 3 - Cau 1:
// var m = prompt(`Enter a month`)

// console.log(`Enter the month: ${m}`)
// m = m.toLowerCase()

// if (m == `january` || m == `march` || m == `may` || m == `july` || m == `august` || m == `october` || m == `december`) {
//     m = m.charAt(0).toUpperCase() + m.slice(1)
//     console.log(`${m} has 31 days.`)
// }
// else if (m == `april` || m == `june` || m == `september` || m == `november`) {
//     m = m.charAt(0).toUpperCase() + m.slice(1)
//     console.log(`${m} has 30 days.`)
// }
// else if (m == `february`) {
//     m = m.charAt(0).toUpperCase() + m.slice(1)
//     console.log(`${m} has 28 days.`)
// }
// else {
//     console.log(`Entered value was not a month`)
// }

//Ngay 5 - Cap do 1 - Cau 1:
// const arr1 = []
// const arr2 = Array()

//Ngay 5 - Cap do 1 - Cau 2:
// const arr1 = Array(10)
// const arr2 = [, , , , , , , , , , , , , , , , ,]

//Ngay 5 - Cap do 1 - Cau 3:
// const arr = [, , , , , , , , , , , , , , , , , , , ,]

// console.log(arr.length)

//Ngay 5 - Cap do 1 - Cau 4:
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(arr.slice(0, 1))
// console.log(arr.slice(Math.floor(arr.length / 2) - 1, Math.floor(arr.length / 2)))
// console.log(arr.slice(arr.length - 1, arr.length))

//Ngay 5 - Cap do 1 - Cau 5:
// const mixedDataTypes = [22, 'JavaScript', false, 10, undefined, null, '2']

// console.log(mixedDataTypes.length)

//Ngay 5 - Cap do 1 - Cau 6:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

//Ngay 5 - Cap do 1 - Cau 7:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies)

//Ngay 5 - Cap do 1 - Cau 8:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.length)

//Ngay 5 - Cap do 1 - Cau 9:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies[0])
// console.log(itCompanies[Math.round(itCompanies.length / 2 - 1)])
// console.log(itCompanies[itCompanies.length - 1])

//Ngay 5 - Cap do 1 - Cau 10:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// for (var i = 0; i < itCompanies.length; i++) {
//     console.log(itCompanies[i])
// }

//Ngay 5 - Cap do 1 - Cau 11:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// toUpper = function (x) {
//     return x.toUpperCase()
// }

// for (var i = 0; i < itCompanies.length; i++) {
//     console.log(toUpper(itCompanies[i]))
// }

//Ngay 5 - Cap do 1 - Cau 12:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.join(', ').toString().concat(' are big IT companies.'))

//Ngay 5 - Cap do 1 - Cau 13:
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

//Ngay 5 - Cap do 1 - Cau 14:
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

// //Ngay 5 - Cap do 1 - Cau 15:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.sort())

//Ngay 5 - Cap do 1 - Cau 16:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.reverse())

//Ngay 5 - Cap do 1 - Cau 17:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.slice(3))

//Ngay 5 - Cap do 1 - Cau 18:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// console.log(itCompanies.slice(0, itCompanies.length - 3))

//Ngay 5 - Cap do 1 - Cau 19:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
// var l = itCompanies.length

// console.log(itCompanies.slice(0, Math.round(l / 2) - 1).concat(itCompanies.slice(Math.round(l / 2))))

//Ngay 5 - Cap do 1 - Cau 20:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.shift()
// console.log(itCompanies)

//Ngay 5 - Cap do 1 - Cau 21:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]
// var l = itCompanies.length

// itCompanies.splice(Math.round(l / 2) - 1, 1)
// console.log(itCompanies)

//Ngay 5 - Cap do 1 - Cau 22:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.pop()
// console.log(itCompanies)

//Ngay 5 - Cap do 1 - Cau 23:
// const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`]

// itCompanies.splice(0)
// console.log(itCompanies)

//Ngay 5 - Cap do 2 - Cau 2:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// var words = text.split('.').toString().split(' ').toString().split(',')

// for (var i = 0; i < words.length; i++) {
//     if (words[i] == '') {
//         words.splice(i, 1)
//     }
// }

// console.log(words)
// console.log(words.length)

//Ngay 5 - Cap do 2 - Cau 3:
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// var allergic = prompt('Are you allergic to honey? Please anwser yes or no.')

// function meatCheck(a) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] == 'Meat') {
//             return a
//         }
//     }
//     return a.unshift('Meat')
// }

// function sugarCheck(a) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] == 'Sugar') {
//             return a
//         }
//     }
//     return a.push('Sugar')
// }

// allergic.toLowerCase()
// function allergicHoney(a, b) {
//     if (a == 'yes') {
//         for (var i = 0; i < b.length; i++) {
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

// function greenTea(a) {
//     for (var i = 0; i < a.length; i++) {
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

//Ngay 5 - Cap do 2 - Cau 4:
// const countries = [
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

// function ethiopiaCheck(a) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] == 'Ethiopia') {
//             return console.log(a[i].toUpperCase())
//         }
//     }
//     a.push('Ethiopia')
//     return console.log(a)
// }

// ethiopiaCheck(countries)

//Ngay 5 - Cap do 2 - Cau 5:
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
// ]

// function sassCheck(a) {
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] == 'Sass') {
//             return console.log(`Sass is a CSS preprocess`)
//         }
//     }
//     a.push('Sass')
//     return console.log(a)
// }

// sassCheck(webTechs)

//Ngay 5 - Cap do 2 - Cau 6:
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// var fullStack = frontEnd.concat(backEnd)

// console.log(fullStack)

//Ngay 5 - Cap do 3 - Cau 1:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// var l = ages.length

// ages.sort()
// var min = ages[0]
// var max = ages[l - 1]

// console.log(ages)
// console.log(`The max age: ${max}
// The min age: ${min}`)

// function findMiddle(a) {
//     var ll = a.length
//     if (ll % 2 == 0) {
//         return console.log(`The median age: ${a.slice(ll / 2 - 1, ll / 2 + 1)}`)
//     }
//     else {
//         return console.log(`The median age: ${a.slice(Math.round(ll / 2) - 1), Math.round(ll / 2)}`)
//     }
// }

// findMiddle(ages)

// function averageAge(a) {
//     var sum = 0
//     for (var i = 0; i < a.length; i++) {
//         sum += a[i]
//     }
//     return sum / a.length
// }

// console.log(`The average age: ${averageAge(ages)}`)

// console.log(`Range of the ages: ${max - min}`)

// console.log(`min - average: ${Math.abs(min - averageAge(ages)).toFixed(2)}
// max - average: ${Math.abs(max - averageAge(ages)).toFixed(2)}`)

//Ngay 5 - Cap do 3 - Cau 2:
// const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombi', 'Comoros', 'Congo (Brazzaville)', 'Congo', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor Timur)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia, The', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']
// var l = countries.length
// var countries1 = []
// var countries2 = []

// console.log(countries.slice(0, 10))

// function findMiddle(a) {
//     return a.slice(Math.round(l / 2 - 1), Math.round(l / 2))
// }

// console.log(findMiddle(countries))

// function divide(a, b, c) {
//     if (a.length % 2 == 0) {
//         b = a.slice(0, a.length / 2)
//         c = a.slice(a.length / 2, a.length)
//         console.log(`Countries array 1:
//         ${b}`)
//         console.log(`Countries array 2:
//         ${c}`)
//     }
//     else {
//         b = a.slice(0, Math.round(a.length / 2) - 1)
//         c = a.slice(Math.round(a.length / 2) - 1, a.length)
//         b.push('Vietnamese')
//         console.log(`Countries array 1:
//         ${b}`)
//         console.log(`Countries array 2:
//         ${c}`)
//     }
// }

// divide(countries, countries1, countries2)

//Ngay 6 - Cap do 1 - Cau 1:
// console.log(`The for loop:`)
// for (var i = 0; i <= 10; i++) {
//     console.log(i)
// }

// console.log(`The while loop`)
// let j = 0
// while (j <= 10) {
//     console.log(j)
//     j++
// }

// console.log(`The do while loop`)
// let t = 0
// do {
//     console.log(t)
//     t++
// } while (t <= 10)

//Ngay 6 - Cap do 1 - Cau 2:
// console.log(`The for loop:`)
// for (var i = 10; i >= 0; i--) {
//     console.log(i)
// }

// console.log(`The while loop:`)
// let j = 10
// while (j >= 0) {
//     console.log(j)
//     j--
// }

// console.log(`The do while loop:`)
// let t = 10
// do {
//     console.log(t)
//     t--
// } while (t >= 0)

//Ngay 6 - Cap do 1 - Cau 3:
// var n = prompt(`Enter number n`)

// for (var i = 0; i <= n; i++) {
//     console.log(i)
// }
