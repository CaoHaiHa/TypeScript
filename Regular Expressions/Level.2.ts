// //Cau 1:
// const paragraph: string = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
// const tenMostFrequentWords = (str: string, num: number): { word: string, count: number }[] => {
//     const newParagraph: string = paragraph.replace(/[.]/g, '')
//     const wordArray: string[] = newParagraph.split(' ')
//     const wordSet: Set<string> = new Set(wordArray)
//     const wordArrayAndLength: { word: string, count: number }[] = []
//     const tenWordArrayAndLength: { word: string, count: number }[] = []
//     for (let i of wordSet) {
//         const temp: string[] = wordArray.filter((e) => i === e)
//         wordArrayAndLength.push({ word: i, count: temp.length })
//     }
//     wordArrayAndLength.sort((e1, e2) => e2.count - e1.count)
//     for (let i: number = 0; i < num; i++) tenWordArrayAndLength.push(wordArrayAndLength[i])
//     return tenWordArrayAndLength
// }

// console.log(tenMostFrequentWords(paragraph, 10))