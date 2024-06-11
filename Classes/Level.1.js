// //Cau 1:
// class Animal {
//     constructor(name, age, color, legs) {
//         this.name = name
//         this.age = age
//         this.color = color
//         this.legs = legs
//     }
//     getInfo = () => {
//         return `\t\tName: ${this.name}
//         Age: ${this.age}
//         Color: ${this.color}
//         Legs: ${this.legs}`
//     }
//     changeColor = (Newcolor) => {
//         this.color = Newcolor
//     }
//     changeAge = (newAge) => {
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

// //Cau 2:
// class Dog extends Animal {
//     constructor(name, age, color, legs, size, hobby) {
//         super(name, age, color, legs)
//         this.size = size
//         this.foods = []
//         this.bark = `Woof woof`
//         this.hobby = hobby
//     }
//     getInfo = () => {
//         return `\t\tName: ${this.name}
//         Age: ${this.age}
//         Color: ${this.color}
//         Legs: ${this.legs}
//         Size: ${this.size}
//         Food: ${this.foods}
//         Bark: ${this.bark}
//         Hobby: ${this.hobby}`
//     }
//     get getFood() {
//         return this.foods
//     }
//     set setFood(food) {
//         this.foods.push(food)
//     }
// }
// class Cat extends Animal {
//     constructor(name, age, color, legs) {
//         super(name, age, color, legs)
//         this.foods = []
//         this.hobby = []
//         this.bark = `meow meow`
//     }
//     getInfo = () => {
//         return `\t\tName: ${this.name}
//         Age: ${this.age}
//         Color: ${this.color}
//         Legs: ${this.legs}
//         Food: ${this.foods}
//         Bark: ${this.bark}
//         Hobby: ${this.hobby}`
//     }
//     get getFood() {
//         return this.foods
//     }
//     set setFood(food) {
//         this.foods.push(food)
//     }
//     get getHooby() {
//         return this.hobby
//     }
//     set setHobby(hobby) {
//         this.hobby.push(hobby)
//     }
// }

// const s2 = new Dog(`Coco`, 4, `Yellow`, 4, 100, `play with ball`)
// const s3 = new Cat(`Oggy`, 20, `Blue`, 2)

// console.log(s2)
// console.log(s2.getInfo())
// s2.setFood = `meat`
// s2.setFood = `bone`
// console.log(s2.getInfo())
// console.log(s3.getInfo())
// s3.setFood = `Fish`
// s3.setFood = `Pate`
// s3.setHobby = `watch tv`
// console.log(s3.getInfo())