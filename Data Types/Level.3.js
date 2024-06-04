//Cau 1:
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

//Cau 2:
// var long = 'You cannot end a tensence with because because because is a conjunction'
// var pattern = /because/gi
// var longArray = long.match(pattern)

// console.log(longArray.length)

//Cau 3:
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

//Cau 4:
// var salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// var a = /\d+/g
// var numbers = salary.match(a).map(Number);

// console.log(numbers[0] * 12 + numbers[1] + numbers[2] * 12)

//Ngay 3 - Cap do 1 - Cau 1:
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
