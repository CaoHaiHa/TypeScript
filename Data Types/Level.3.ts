//Cau 1:
// let long: string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let count: number = 0

// function countLove(a: string, b: number) {
//     while (a.includes('love') == true) {
//         b += 1
//         a.replace('love', 'l')
//     }
//     return b
// }

// console.log(countLove(long, count))

//Cau 2:
// let long: string = 'You cannot end a sentence with because because because is a conjunction'
// let pattern = /because/gi
// let longArray = long.match(pattern)

// console.log(longArray?.length)

//Cau 3:
// const sentence: string = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// let str: string = sentence

// str = str.replace(/!/g, '')
// str = str.replace(/@/g, '')
// str = str.replace(/#/g, '')
// str = str.replace(/\$/g, '')
// str = str.replace(/%/g, '')
// str = str.replace(/&/g, '')
// str = str.replace(/;/g, '')

// console.log(str)

//Cau 4:
// const salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// const regex = /\d+/g;
// const numbers = salary.match(regex)?.map(Number);

// if (numbers) {
//     const monthlySalary = numbers[0];
//     const annualBonus = numbers[1];
//     const onlineCourses = numbers[2];

//     const totalAnnualIncome = monthlySalary * 12 + annualBonus + onlineCourses * 12;
//     console.log(totalAnnualIncome);
// } else {
//     console.log('Không tìm thấy số lương trong chuỗi.');
// }
