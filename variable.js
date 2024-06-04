//Var
var a //Có thể khai báo mà không cần gán giá trị.

console.log(a) //Trả về undefined
console.log(typeof a) //Kiểu dữ liệu trả về undefined

var a = 10 //Có thể khai báo lại trong cùng phạm vi

console.log(a) //Trả về 10
console.log(typeof a) //Kiểu dữ liệu trả về number

a = 'name' //Có thể cập nhật giá trị

console.log(a) //Trả về 'name'
console.log(typeof a) //Kiểu dữ liệu trả về string
//Kết luận: var khá linh hoạt vì có thể khai báo và cập nhật.
console.log('------------------------------------------------------------')

//Let
let b //Có thể khai báo mà không cần gán giá trị

console.log(b) //Cũng trả về kết quả undefined
console.log(typeof b) //Kiểu dữ liệu trả về undefined

// let b = 10 //Không thể khai báo lại trong cùng phạm vi

let c = 10

console.log(c) //Trả về 10
console.log(typeof c) //Kiểu dữ liệu trả về number

c = 'name' //Có thể cập nhật giá trị

console.log(c) //Trả về 'name'
console.log(typeof c) //Kiểu dữ liệu trả về string
//Kết luận: let linh hoạt nhưng không linh hoạt bằng var vì không thể khai báo lại.
console.log('------------------------------------------------------------')

//Const

// const d //Không thể khai báo mà không gán giá trị

const d = 10 //Có thể khai báo và gán giá trị

console.log(d) //Trả về 10
console.log(typeof d) //Kiểu dữ liệu trả về number

// const d = 15 //Không thể khai báo lại. Báo lỗi: SyntaxError: Identifier 'd' has already been declared

// d = 'name' //Không thể cập nhật giá trị. Báo lỗi: TypeError: Assignment to constant variable