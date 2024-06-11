//Cau 1:
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
const tenMostFrequentWords = (str, num) => {
    const newParagraph = paragraph.replace(/[.]/g, '')
    const wordArray = newParagraph.split(' ')
    const wordSet = new Set(wordArray)
    const wordArrayAndLength = []
    const tenWordArrayAndLength = []
    for (let i of wordSet) {
        const temp = wordArray.filter((e) => i === e)
        wordArrayAndLength.push({ word: i, count: temp.length })
    }
    wordArrayAndLength.sort((e1, e2) => e2.count - e1.count)
    for (let i = 0; i < num; i++) tenWordArrayAndLength.push(wordArrayAndLength[i])
    return tenWordArrayAndLength
}

console.log(tenMostFrequentWords(paragraph, 10))