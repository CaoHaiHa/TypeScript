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

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt: '08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt: '08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];
//Find
const newfind = jsonarr.find(element => {
    return element.id > 0
})
console.log(newfind) //Kết quả trả về là một element đầu tiên thỏa điều kiện

const userFind = users.find(element => {
    return element.isLoggedIn === true
})
console.log(userFind) //In ra kết quả là element đầu tiên thỏa điều kiện isLoggedIn === true

const userFindAStart = users.find(element => {
    return element.username.startsWith('A')
})
console.log(userFindAStart) //In ra kết quả là element đầu tiên thỏa điều kiện startsWith('A')

//Filter
const newFilter = jsonarr.filter(element => {
    return element.id > 0
})
console.log(newFilter) //Kết quả trả về một mảng bao gồm các element thỏa điều kiện

const userFilter = users.filter(element => {
    return element.isLoggedIn === true
})
console.log(userFilter) //Kết quả trả về là một mảng bao gồm các element thỏa điều kiện isLoggedIn === true

const userFilterAStart = users.filter(element => {
    return element.username.startsWith(`A`)
})
console.log(userFilterAStart) //Kết quả trả về là một mảng bao gồm các element thỏa điều kiện startsWith('A')

//Kết luận: cả 2 đều là phương thức của mảng.
//Khi cần tìm kiếm phần tử đầu tiên của mảng thỏa điều kiện thì sử dụng find.
//Khi cần tìm kiếm tất cả phần tử thỏa điều kiện thì sử dụng filter.