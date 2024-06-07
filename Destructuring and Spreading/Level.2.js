// //Array:
// const users = [
//     {
//         name: 'Brook',
//         scores: 75,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 16
//     },
//     {
//         name: 'Alex',
//         scores: 80,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 18
//     },
//     {
//         name: 'David',
//         scores: 75,
//         skills: ['HTM', 'CSS'],
//         age: 22
//     },
//     {
//         name: 'John',
//         scores: 85,
//         skills: ['HTML'],
//         age: 25
//     },
//     {
//         name: 'Sara',
//         scores: 95,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 26
//     },
//     {
//         name: 'Martha',
//         scores: 80,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 18
//     },
//     {
//         name: 'Thomas',
//         scores: 90,
//         skills: ['HTM', 'CSS', 'JS'],
//         age: 20
//     }
// ]

// //Cau 1:
// for (let i in users) {
//     let { name, scores, skills, age } = users[i]
//     console.log(name, scores, skills, age)
// }

// console.log(`------------------------------------------------------------`)

// //Cau 2:
// for (let i in users) {
//     let { skills } = users[i]
//     if (skills.length > 2) continue
//     else console.log(users[i])
// }