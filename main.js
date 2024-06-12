const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const weightMetric = (metric) => {
    const pattern = /\d/g
    const metricArray = metric.match(pattern)
    return metricArray
}
const fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const data = await response.json()
        const catTable = []
        const catNameTable = []
        let a = 0
        let b = 0
        for (let i of data) {
            let temp = []
            let temp2 = weightMetric(i.weight.metric)
            a += +temp2[0]
            b += +temp2[1]
            temp.push(i.name)
            temp.push(i.id)
            temp.push(i.weight)
            catTable.push(temp)
            catNameTable.push(i.name)

        }
        a /= data.length
        b /= data.length
        console.log(`%cCat Table:`, 'color:blue')
        console.table(catTable)
        console.log(`%cCat Name Table:`, `color:blue`)
        console.table(catNameTable)
        console.log(`%cThe average weight of cat in metric unit: (${Math.round(a)}-${Math.round(b)})`, 'color:blue')
    } catch (err) {
        console.error(err)
    }
}
fetchData()