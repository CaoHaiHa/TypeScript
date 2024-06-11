// //Cau 1:
// class Animal {
//     name: string
//     age: number
//     color: string
//     legs: number

//     constructor(name: string, age: number, color: string, legs: number) {
//         this.name = name
//         this.age = age
//         this.color = color
//         this.legs = legs
//     }
//     getInfo = (): string => {
//         return `\t\tName: ${this.name}
//         Age: ${this.age}
//         Color: ${this.color}
//         Legs: ${this.legs}`
//     }
//     changeColor = (Newcolor: string): void => {
//         this.color = Newcolor
//     }
//     changeAge = (newAge: number): void => {
//         this.age = newAge
//     }
// }

// const s1 = new Animal(`Doraemon`, 3, `White`, 4)

// console.log(s1)
// console.log(s1.getInfo())
// s1.changeColor(`Black`)
// console.log(s1)
// console.log(s1.getInfo())
// s1.changeAge(5)
// console.log(s1)
// console.log(s1.getInfo())
// console.log(`---------------------------------------------------------`)

// class Cat extends Animal {
//     foods: string[]
//     hobby: string[]
//     bark: string

//     constructor(name: string, age: number, color: string, legs: number) {
//         super(name, age, color, legs)
//         this.foods = []
//         this.hobby = []
//         this.bark = `meow meow`
//     }
//     getInfo = (): string => {
//         return `\t\tName: ${this.name}
//         Age: ${this.age}
//         Color: ${this.color}
//         Legs: ${this.legs}
//         Food: ${this.foods}
//         Bark: ${this.bark}
//         Hobby: ${this.hobby}`
//     }
//     get getFood(): string[] {
//         return this.foods
//     }
//     set setFood(food: string) {
//         this.foods.push(food)
//     }
//     get getHooby(): string[] {
//         return this.hobby
//     }
//     set setHobby(hobby: string) {
//         this.hobby.push(hobby)
//     }
// }

// const s3 = new Cat(`Oggy`, 20, `Blue`, 2)

// console.log(s3.getInfo())
// s3.setFood = `Fish`
// s3.setFood = `Pate`
// s3.setHobby = `watch tv`
// console.log(s3.getInfo())