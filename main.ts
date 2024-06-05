//Level 1
//Cau 1:
type Dog = {
    [key: string]: any
}

const dog: Dog = {}

//Cau 2:
console.log(dog)

//Cau 3:
dog.name = 'white'
dog.legs = 4
dog.color = 'black'
dog.age = 5
dog.bark = function () { return 'woof woof' }

console.log(dog)

//Cau 4:
let values: any[] = Object.values(dog)

console.log(values)

//Cau 5:
dog.breed = 'Bulldog'
dog.getInfo = function () {
    return `The dog's name is ${this.name}.\nHe has ${this.legs} legs.\nHe's ${this.color}.\nHe's ${this.age} years old.\nHe's ${this.breed}.\nAnd he ${this.bark()}.`
}

console.log(dog.getInfo())