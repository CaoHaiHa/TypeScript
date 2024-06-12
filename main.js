//Level 1:
const randNum = () => {
    return Math.floor(Math.random() * 20)
}
const randNumArray = () => {
    let n = randNum()
    let arr = []
    for (let i = 0; i < n; i++)arr.push(randNum())
    return arr
}
const calculator1 = () => {
    let arr = randNumArray()
    let s = 0
    const sum = () => {
        for (let i of arr) s += i
        return s
    }
    console.log(arr)
    return sum()
}

console.log(`%cSum:`, `color:blue`)
console.log(calculator1())
console.log(`%c-----------------------------------------------------------------------`, `color:pink`)

//Level 2:
const calculator2 = () => {
    let arr = randNumArray()
    let s = 0
    arr.sort((e1, e2) => e1 - e2)
    const sum = () => {
        for (let i of arr) s += i
        return s
    }
    const square = () => {
        const newArr = arr.map((e) => e * e)
        return newArr
    }
    const average = () => (sum() / arr.length).toFixed(2)
    console.log(arr)
    return {
        sum: sum(),
        square: square(),
        average: average()
    }
}

console.log(`%cSum:`, `color:blue`)
console.log(calculator2().sum)
console.log(`%cSquare:`, `color:blue`)
console.log(calculator2().square)
console.log(`%cAverage:`, `color:blue`)
console.log(calculator2().average)
console.log(`%c-----------------------------------------------------------------------`, `color:pink`)

//Level 3:
const incomeAndExpense = () => {
    return Math.floor(Math.random() * 800) + 200
}
const personAccount = () => {
    let firstName = 'Ha'
    let lastName = 'Cao'
    let incomes = [
        { income: `salary`, value: incomeAndExpense() },
        { income: `bonus`, value: incomeAndExpense() },
        { income: `overtime`, value: incomeAndExpense() },
        { income: `others`, value: incomeAndExpense() }
    ]
    let expenses = [
        { expense: `living`, value: incomeAndExpense() },
        { expense: `travel`, value: incomeAndExpense() },
        { expense: `rent`, value: incomeAndExpense() },
        { expense: `others`, value: incomeAndExpense() }
    ]
    const totalIncome = () => {
        let s = 0
        for (let i of incomes) s += i.value
        return s
    }
    const totalExpense = () => {
        let s = 0
        for (let i of expenses) s += i.value
        return s
    }
    const accountInfo = () => {
        return `My name is ${firstName + ' ' + lastName}.`
    }
    const addIncome = (obj) => {
        console.log('Before: ', incomes)
        incomes.push(obj)
        return incomes
    }
    const addExpense = (obj) => {
        console.log('Before: ', expenses)
        expenses.push(obj)
        return expenses
    }
    const accountBalance = () => totalIncome() - totalExpense()
    return {
        totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        accountInfo: accountInfo(),
        addIncome: addIncome,
        addExpense: addExpense,
        accountBalance: accountBalance()
    }
}

console.log(personAccount().totalIncome)
console.log(personAccount().totalExpense)
console.log(personAccount().accountInfo)
console.log('After: ', personAccount().addIncome({ income: `other`, value: incomeAndExpense() }))
console.log('After: ', personAccount().addExpense({ expense: `other`, value: incomeAndExpense() }))
console.log(personAccount().accountBalance)