// //Array and Sets
// const a: number[] = [4, 5, 8, 9]
// const b: number[] = [3, 4, 5, 7]
// const setA: Set<number> = new Set(a)
// const setB: Set<number> = new Set(b)

// //Cau 1:
// const c: number[] = [...a, ...b]
// const setC: Set<number> = new Set(c)

// console.log(setC)
// console.log(`-------------------------------------------------------------`)

// //Cau 2:
// const d: number[] = a.filter((e: number) => setB.has(e))
// const setD: Set<number> = new Set(d)

// console.log(setD)
// console.log(`-------------------------------------------------------------`)

// //Cau 3:
// const e: number[] = a.filter((e: number) => !setB.has(e))
// const setE: Set<number> = new Set(e)
// const f: number[] = b.filter((e: number) => !setA.has(e))
// const setF: Set<number> = new Set(f)

// console.log(setE)
// console.log(setF)