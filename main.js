//Cau 1:
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const cleanText = (str) => {
    const parrtern1 = /[^a-zA-Z ]/g
    const sentenceClean = str.replace(parrtern1, '')
    return sentenceClean
}

console.log(cleanText(sentence))
console.log(`-----------------------------------------------------------`)
//Cau 2:
const mostFrequenWords = (str) => {
    const cleanString = cleanText(str)
    const wordArray = cleanString.split(' ')
    const wordSet = new Set(wordArray)
    const array1 = []
    const array2 = []
    for (let i of wordSet) {
        const temp = wordArray.filter((e) => i === e)
        array1.push({ word: i, count: temp.length })
    }
    array1.sort((e1, e2) => e2.count - e1.count)
    for (let i = 0; i < 3; i++)array2.push(array1[i])
    return array2
}

console.log(mostFrequenWords(sentence))