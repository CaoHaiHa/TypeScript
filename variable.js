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

//Updated

console.log(x) //Trả về undefined vì var được đẩy lên đầu scope(Global scope) và gán giá trị undefined
var x = 'Hello'

if (true) {
    var x = 'Hi'
}
console.log(x) //Trả về 'Hi'. Var có phạm vi trong Global scope và không bị giới hạn trong Block scope({})

//Kết luận: Var hoạt động trong phạm vi Global scope. Có thể khai báo lại và cập nhật. Hosting sẽ đẩy var lên đầu scope được khởi tạo và gán giá trị undefined
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

//Updated

// console.log(y) //Giống var hosting của let đẩy let lên đầu scope và khai báo nhưng không gán giá trị
let y = 'Hello'

if (true) {
    let y = 'Hi'
    console.log(y) //Trả về 'Hi'
}

console.log(y) //Trả về 'Hello'. Vì let chỉ có thể hoạt động trong phạm vi Block scope({})

//Kết luận: Let hoạt động trong phạm vi Block scope. Không thể khai báo lại nhưng có thể cập nhật. Hoisting của let sẽ đẩy let lên đâu scope nhưng không được khởi tạo.
console.log('------------------------------------------------------------')

//Const

// const d //Không thể khai báo mà không gán giá trị

const d = 10 //Có thể khai báo và gán giá trị

console.log(d) //Trả về 10
console.log(typeof d) //Kiểu dữ liệu trả về number

// const d = 15 //Không thể khai báo lại. Báo lỗi: SyntaxError: Identifier 'd' has already been declared

// d = 'name' //Không thể cập nhật giá trị. Báo lỗi: TypeError: Assignment to constant variable

//Updated
// console.log(z) //Giống như let hoitsting của const đẩy nó lên đầu scope nhưng không khởi tạo.
const z = 'Hello'

if (true) {
    const z = 'Hi'
    console.log(z) //Trả về 'Hi'. Giống như let const cũng có phạm vi hoạt động trong Block scope
}
console.log(z) //Trả về 'Hello'

//Kết luận: const hoạt động trong phạm vi Block scope. Const không thể khai báo lại và cập nhật. Hoisting của const sẽ đẩy nó lên đầu scope nhưng không khởi tạo.