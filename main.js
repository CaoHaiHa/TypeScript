//Array and Sets
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const setA = new Set(a)
const setB = new Set(b)

//Cau 1:
const c = [...a, ...b]
const setC = new Set(c)

console.log(setC)
console.log(`-------------------------------------------------------------`)

//Cau 2:
const d = a.filter((e) => setB.has(e))
const setD = new Set(d)

console.log(setD)
console.log(`-------------------------------------------------------------`)

//Cau 3:
const e = a.filter((e) => !setB.has(e))
const setE = new Set(e)
const f = b.filter((e) => !setA.has(e))
const setF = new Set(f)

console.log(setE)
console.log(setF)