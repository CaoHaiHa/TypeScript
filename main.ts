//Array and Object:
const constants: number[] = [2.72, 3.14, 9.81, 37, 100]
const countries: string[] = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
interface Rectangle {
    width: number,
    height: number,
    area: number,
    perimeter: number
}
const rectangle: Rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

//Cau 1:
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp]: number[] = constants

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)
console.log(`------------------------------------------------------------`)

//Cau 2:
let [fin, est, sw, den, nor]: string[] = countries
console.log(fin, est, sw, den, nor)
console.log(`------------------------------------------------------------`)

//Cau 3:
let { area, perimeter, width, height }: Rectangle = rectangle

console.log(area, perimeter, width, height)