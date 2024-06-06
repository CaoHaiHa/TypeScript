const jsonarr = [
    {
        id: 1,
        name: "joe"
    },
    {
        id: -19,
        name: "john"
    },
    {
        id: 20,
        name: "james"
    },
    {
        id: 25,
        name: "jack"
    },
    {
        id: -10,
        name: "joseph"
    },
    {
        id: "not a number",
        name: "jimmy"
    },
    {
        id: null,
        name: "jeff"
    },
]

//Foreach
jsonarr.forEach(element => {
    if (typeof element.id != "number") {
        return element.id = Math.floor(Math.random() * 30) //Thay đổi các thuộc tính id của element không phải số thành số nguyên ngẫu nhiên trong phạm vi 0-30
    }
    else if (element.id < 0) {
        return element.id = Math.abs(element.id) //Thay đổi các thuộc tính id của từng element âm thành dương
    }
});
console.log(jsonarr) //In ra kết quả là mảng ban đầu được sửa đổi theo điều kiện của function

//Map
const newJsonarr = jsonarr.map(element => {
    if (element.name.startsWith('j')) {
        return element.name = element.name.replace('j', 'S') //Thay đổi các thuộc tính name của element bắt đầu 'j' thành 'S'
    }
}) // Trả về một mảng mới thỏa các điều kiện của hàm dựa trên dữ liệu của mảng ban đầu
console.log(newJsonarr) //In ra kết quả là một mảng bao gồm các tên đã được sửa đổi

//Kết luận:
//Khi cần sửa đổi dữ liệu thì sử dụng foreach.
//Khi cần lấy dữ liệu ra sử dụng thì sử dụng map.
