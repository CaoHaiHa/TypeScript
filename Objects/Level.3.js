// //Cau 1:
// const personalAccount = {
//     firstName: 'Ha',
//     lastName: 'Cao',
//     incomes: {
//         salary: 860,
//         bonus: 614,
//         overtime: 932,
//         other: 18
//     },
//     expenses: {
//         living: 223,
//         travel: 340,
//         rent: 695,
//         other: 454
//     },
//     totalIncome: function () {
//         return this.incomes.bonus + this.incomes.other + this.incomes.overtime + this.incomes.salary
//     },
//     totalExpense: function () {
//         return this.expenses.living + this.expenses.other + this.expenses.rent + this.expenses.travel
//     },
//     accountInfo: function () {
//         return `I am ${this.firstName} ${this.lastName}.\nIncomes: ${Object.values(this.incomes)}.\nExpenses: ${Object.values(this.expenses)}.\nTotal incomes: ${this.totalIncome()}.\nTotal expenses: ${this.totalExpense()}.\nAccount balance: ${this.accountBalance()}.`
//     },
//     addIncome: function (incomeNumber) {
//         this.incomes.other += incomeNumber
//         return this.incomes
//     },
//     addExpense: function (expenseNumber) {
//         this.expenses.other += expenseNumber
//         return this.expenses
//     },
//     accountBalance: function () {
//         return this.totalIncome() - this.totalExpense()
//     }
// }

// console.log(personalAccount)
// console.log(personalAccount.accountInfo())
// console.log(personalAccount.addIncome(200))
// console.log(personalAccount.addExpense(200))
// console.log(`----------------------------------------------------------------`)

// //Array:
// const users = [
//     {
//         _id: 'ab12ex',
//         username: 'Alex',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt: '08/01/2020 9:00 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'fg12cy',
//         username: 'Asab',
//         email: 'asab@asab.com',
//         password: '123456',
//         createdAt: '08/01/2020 9:30 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'zwf8md',
//         username: 'Brook',
//         email: 'brook@brook.com',
//         password: '123111',
//         createdAt: '08/01/2020 9:45 AM',
//         isLoggedIn: true
//     },
//     {
//         _id: 'eefamr',
//         username: 'Martha',
//         email: 'martha@martha.com',
//         password: '123222',
//         createdAt: '08/01/2020 9:50 AM',
//         isLoggedIn: false
//     },
//     {
//         _id: 'ghderc',
//         username: 'Thomas',
//         email: 'thomas@thomas.com',
//         password: '123333',
//         createdAt: '08/01/2020 10:00 AM',
//         isLoggedIn: false
//     }
// ];

// const products = [
//     {
//         _id: 'eedfcf',
//         name: 'mobile phone',
//         description: 'Huawei Honor',
//         price: 200,
//         ratings: [
//             { userId: 'fg12cy', rate: 5 },
//             { userId: 'zwf8md', rate: 4.5 }
//         ],
//         likes: []
//     },
//     {
//         _id: 'aegfal',
//         name: 'Laptop',
//         description: 'MacPro: System Darwin',
//         price: 2500,
//         ratings: [],
//         likes: ['fg12cy']
//     },
//     {
//         _id: 'hedfcg',
//         name: 'TV',
//         description: 'Smart TV:Procaster',
//         price: 400,
//         ratings: [{ userId: 'fg12cy', rate: 5 }],
//         likes: ['fg12cy']
//     }
// ]
// //Cau 2: //_id, username, email, password, createdAt, isLoggedIn
// //Cau a:
// const signUp = (objUsers, objUser) => {
//     for (let i in objUsers) {
//         if (objUsers[i]._id == objUser._id || objUsers[i].email == objUser.email) {
//             return console.log(`You have already an account.`)
//         }
//     }
//     objUsers.push(objUser)
//     return objUsers
// }
// // { _id: 'fasfds', username: 'linhtalinhtinh', email: 'linhtalinhtinh@mail.com', password: 'fdasfdsa', createdAt: `06/05/2024 3:30 PM`, isLoggedIn: true }

// console.log(signUp(users, { _id: 'fasfds', username: 'linhtalinhtinh', email: 'linhtalinhtinh@mail.com', password: 'fdasfdsa', createdAt: `06/05/2024 3:30 PM`, isLoggedIn: true }))

// //Cau b:
// const signIn = (mail, pass, obj) => {
//     for (let i in obj) {
//         if (obj[i].email == mail && obj[i].password == pass && obj[i].isLoggedIn == true) {
//             return `Account was logged.`
//         }
//         else if (obj[i].email == mail && obj[i].password == pass && obj[i].isLoggedIn == false) {
//             return `Account is logging.`
//         }
//     }
//     return `Your email or password is wrong.Please try again.`
// }

// console.log(signIn('linhtalinhtinh@mail.com', 'fdasfdsa', users))
// console.log(signIn('alex@alex.com', '123123', users))
// console.log(signIn('linhtalinhinh@mail.com', 'fdasfdsa', users))
// console.log(`---------------------------------------------------------------`)

// //Cau 3:
// //Cau a:
// const rateProduct = (obj, rateObject, productName) => {
//     for (let i in obj) {
//         if (obj[i].name == productName) {
//             obj[i].ratings.push(rateObject)
//             return Object.values(obj[i].ratings)
//         }
//     }
//     return `Your product you rating is not exist.`
// }
// const randNum = () => {
//     return (Math.random() * 5).toFixed(1)
// }
// const randId = () => {
//     let rand = 'qwertyuiopasdfghjklzxcvbnm'
//     let id = ''
//     for (let i = 0; i < 6; i++) {
//         id += rand.charAt(Math.floor(Math.random() * rand.length - 1))
//     }
//     return id
// }

// rateProduct(products, { _id: randId(), rate: randNum() }, 'Laptop')
// rateProduct(products, { _id: randId(), rate: randNum() }, 'Laptop')
// rateProduct(products, { _id: randId(), rate: randNum() }, 'Laptop')
// rateProduct(products, { _id: randId(), rate: randNum() }, 'TV')
// rateProduct(products, { _id: randId(), rate: randNum() }, 'TV')
// rateProduct(products, { _id: randId(), rate: randNum() }, 'mobile phone')
// //Cau b:
// const averageRating = (obj) => {
//     let rankRate = []
//     for (let i in obj) {
//         let rate = 0
//         if (obj[i].name == 'TV') {
//             for (let j = 0; j < obj[i].ratings.length; j++) {
//                 rate += +obj[i].ratings[j].rate
//             }
//             rate /= +obj[i].ratings.length
//             rate = rate.toFixed(1)
//             rankRate.push({ '01': 'TV', rate })
//         }
//         else if (obj[i].name == 'Laptop') {
//             for (let j = 0; j < obj[i].ratings.length; j++) {
//                 rate += +obj[i].ratings[j].rate
//             }
//             rate /= +obj[i].ratings.length
//             rate = rate.toFixed(1)
//             rankRate.push({ '01': 'Laptop', rate })
//         }
//         else if (obj[i].name == 'mobile phone') {
//             for (let j = 0; j < obj[i].ratings.length; j++) {
//                 rate += +obj[i].ratings[j].rate
//             }
//             rate /= +obj[i].ratings.length
//             rate = rate.toFixed(1)
//             rankRate.push({ '01': 'mobile phone', rate })
//         }
//     }
//     return rankRate
// }

// console.log(averageRating(products))
// console.log(`---------------------------------------------------------------`)

// //Cau 4:
// const likeProduct = (obj, id, nameProduct) => {
//     for (let i in obj) {
//         if (obj[i].name == nameProduct) {
//             for (let j = 0; j < obj[i].likes.length; j++) {
//                 if (obj[i].likes[j] == id) {
//                     obj[i].likes.splice(j, 1)
//                     return obj
//                 }
//             }
//             obj[i].likes.push(id)
//             return obj
//         }
//     }
//     return obj
// }

// likeProduct(products, randId(), 'Laptop')
// likeProduct(products, randId(), 'Laptop')
// likeProduct(products, randId(), 'mobile phone')
// likeProduct(products, randId(), 'mobile phone')
// likeProduct(products, randId(), 'mobile phone')
// likeProduct(products, randId(), 'TV')
// console.log(likeProduct(products, randId(), 'TV'))