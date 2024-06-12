// //Level 1:
// const randNum = (): number => {
//     return Math.floor(Math.random() * 20)
// }
// const randNumArray = (): number[] => {
//     let n: number = randNum()
//     let arr: number[] = []
//     for (let i: number = 0; i < n; i++)arr.push(randNum())
//     return arr
// }
// const calculator1 = (): number => {
//     let arr: number[] = randNumArray()
//     let s: number = 0
//     const sum = (): number => {
//         for (let i of arr) s += i
//         return s
//     }
//     console.log(arr)
//     return sum()
// }

// console.log(`%cSum:`, `color:blue`)
// console.log(calculator1())
// console.log(`%c-----------------------------------------------------------------------`, `color:pink`)

// //Level 2:
// const calculator2 = (): { sum: number, square: number[], average: number } => {
//     let arr: number[] = randNumArray()
//     let s: number = 0
//     arr.sort((e1: number, e2: number) => e1 - e2)
//     const sum = (): number => {
//         for (let i of arr) s += i
//         return s
//     }
//     const square = (): number[] => {
//         const newArr: number[] = arr.map((e: number) => e * e)
//         return newArr
//     }
//     const average = (): number => +(sum() / arr.length).toFixed(2)
//     console.log(arr)
//     return {
//         sum: sum(),
//         square: square(),
//         average: average()
//     }
// }

// console.log(`%cSum:`, `color:blue`)
// console.log(calculator2().sum)
// console.log(`%cSquare:`, `color:blue`)
// console.log(calculator2().square)
// console.log(`%cAverage:`, `color:blue`)
// console.log(calculator2().average)
// console.log(`%c-----------------------------------------------------------------------`, `color:pink`)

// //Level 3:
// const incomeAndExpense = (): number => {
//     return Math.floor(Math.random() * 800) + 200
// }
// const personAccount = (): {
//     totalIncome: number,
//     totalExpense: number,
//     accountInfo: string,
//     addIncome: (obj: { income: string, value: number }) => { income: string, value: number }[],
//     addExpense: (obj: { expense: string, value: number }) => { expense: string, value: number }[],
//     accountBalance: number
// } => {
//     let firstName: string = 'Ha'
//     let lastName: string = 'Cao'
//     let incomes: { income: string, value: number }[] = [
//         { income: `salary`, value: incomeAndExpense() },
//         { income: `bonus`, value: incomeAndExpense() },
//         { income: `overtime`, value: incomeAndExpense() },
//         { income: `others`, value: incomeAndExpense() }
//     ]
//     let expenses: { expense: string, value: number }[] = [
//         { expense: `living`, value: incomeAndExpense() },
//         { expense: `travel`, value: incomeAndExpense() },
//         { expense: `rent`, value: incomeAndExpense() },
//         { expense: `others`, value: incomeAndExpense() }
//     ]
//     const totalIncome = (): number => {
//         let s: number = 0
//         for (let i of incomes) s += i.value
//         return s
//     }
//     const totalExpense = (): number => {
//         let s: number = 0
//         for (let i of expenses) s += i.value
//         return s
//     }
//     const accountInfo = (): string => {
//         return `My name is ${firstName + ' ' + lastName}.`
//     }
//     const addIncome = (obj: { income: string, value: number }): { income: string, value: number }[] => {
//         console.log('Before: ', incomes)
//         incomes.push(obj)
//         return incomes
//     }
//     const addExpense = (obj: { expense: string, value: number }): { expense: string, value: number }[] => {
//         console.log('Before: ', expenses)
//         expenses.push(obj)
//         return expenses
//     }
//     const accountBalance = (): number => totalIncome() - totalExpense()
//     return {
//         totalIncome: totalIncome(),
//         totalExpense: totalExpense(),
//         accountInfo: accountInfo(),
//         addIncome: addIncome,
//         addExpense: addExpense,
//         accountBalance: accountBalance()
//     }
// }

// console.log(personAccount().totalIncome)
// console.log(personAccount().totalExpense)
// console.log(personAccount().accountInfo)
// console.log('After: ', personAccount().addIncome({ income: `other`, value: incomeAndExpense() }))
// console.log('After: ', personAccount().addExpense({ expense: `other`, value: incomeAndExpense() }))
// console.log(personAccount().accountBalance)