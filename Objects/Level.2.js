// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }

// //Cau 1:
// const findPersonMostSkills = (obj) => {
//     let skillMost = 0
//     let userMostSkills = null
//     for (let user in obj) {
//         if (obj[user].hasOwnProperty('skills')) {
//             if (skillMost < obj[user].skills.length) {
//                 skillMost = obj[user].skills.length
//                 userMostSkills = user
//             }
//         }
//     }
//     return { name: userMostSkills, info: obj[userMostSkills] }
// }

// console.log(findPersonMostSkills(users))
// console.log(`-------------------------------------------------------------`)

// //Cau 2:
// const countUserMore50Points = (obj) => {
//     let count = 0;
//     let listUserMore50Points = []
//     for (let user in obj) {
//         let userMore50Points = []
//         if (obj[user].hasOwnProperty('points')) {
//             if (obj[user].points >= 50) {
//                 count++
//                 userMore50Points.push(user)
//                 userMore50Points.push(obj[user])
//                 listUserMore50Points.push(userMore50Points)
//             }
//         }
//     }
//     return { countUser: count, listUser: listUserMore50Points }
// }

// const countLoggedUsers = (obj) => {
//     let count = 0
//     let listLoggedUsers = []
//     for (let user in obj) {
//         let loggedUser = []
//         if (obj[user].hasOwnProperty('isLoggedIn')) {
//             if (obj[user].isLoggedIn) {
//                 count++
//                 loggedUser.push(user)
//                 loggedUser.push(obj[user])
//                 listLoggedUsers.push(loggedUser)
//             }
//         }
//     }
//     return { countUser: count, listUser: listLoggedUsers }
// }

// console.log(countLoggedUsers(users))
// console.log(countUserMore50Points(users))
// console.log(`------------------------------------------------------------`)

// //Cau 3:
// const findMernDev = (obj) => {
//     let listMernDev = []
//     for (let user in obj) {
//         let mernDev = []
//         if (obj[user].hasOwnProperty('skills')) {
//             let count = 0
//             for (let j = 0; j < obj[user].skills.length; j++) {
//                 if (obj[user].skills[j] == 'MongoDB' || obj[user].skills[j] == 'Express' || obj[user].skills[j] == 'React' || obj[user].skills[j] == 'Node') {
//                     count++
//                 }
//             }
//             if (count == 4) {
//                 mernDev.push(user)
//                 mernDev.push(obj[user])
//                 listMernDev.push(mernDev)
//             }
//         }
//     }
//     return listMernDev
// }

// console.log(findMernDev(users))
// console.log(`------------------------------------------------------------`)

// //Cau 4:
// const copyUsers = Object.assign({}, users)

// copyUsers.Ha = {
//     email: 'ha@ha.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
//     age: 22,
//     isLoggedIn: false,
//     points: 10
// }

// console.log(copyUsers)
// console.log(`------------------------------------------------------------`)

// //Cau 5:
// console.log(Object.keys(users))
// console.log(`------------------------------------------------------------`)

// //Cau 6:
// console.log(Object.values(users))
// console.log(`------------------------------------------------------------`)

// //Cau 7:
// countries = {
//     "Vietnam": {
//         "name": "Vietnam",
//         "capital": "Hanoi",
//         "populations": 96483981,
//         "languages": ["Vietnamese"]
//     },
//     "United States": {
//         "name": "United States",
//         "capital": "Washington, D.C.",
//         "populations": 331449281,
//         "languages": ["English"]
//     },
//     "France": {
//         "name": "France",
//         "capital": "Paris",
//         "populations": 67081000,
//         "languages": ["French"]
//     },
//     "Japan": {
//         "name": "Japan",
//         "capital": "Tokyo",
//         "populations": 126476461,
//         "languages": ["Japanese"]
//     },
//     "Germany": {
//         "name": "Germany",
//         "capital": "Berlin",
//         "populations": 83166711,
//         "languages": ["German"]
//     },
//     "Australia": {
//         "name": "Australia",
//         "capital": "Canberra",
//         "populations": 25649909,
//         "languages": ["English"]
//     },
//     "Brazil": {
//         "name": "Brazil",
//         "capital": "Brasília",
//         "populations": 211000000,
//         "languages": ["Portuguese"]
//     }
// }

// const printCountries = (obj) => {
//     for (let country in obj) {
//         console.log(`${country}\nCapital: ${obj[country].capital}\nPopulations: ${obj[country].populations}\nLangues: ${obj[country].languages}`)
//     }
// }

// printCountries(countries)