// //Cau 1:
// const sentence: string = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// const cleanText = (str: string): string => {
//     const parrtern1: RegExp = /[^a-zA-Z ]/g
//     const sentenceClean: string = str.replace(parrtern1, '')
//     return sentenceClean
// }

// console.log(cleanText(sentence))
// console.log(`-----------------------------------------------------------`)
// //Cau 2:
// const mostFrequenWords = (str: string): { word: string, count: number }[] => {
//     const cleanString: string = cleanText(str)
//     const wordArray: string[] = cleanString.split(' ')
//     const wordSet: Set<string> = new Set(wordArray)
//     const array1: { word: string, count: number }[] = []
//     const array2: { word: string, count: number }[] = []
//     for (let i of wordSet) {
//         const temp: string[] = wordArray.filter((e: string) => i === e)
//         array1.push({ word: i, count: temp.length })
//     }
//     array1.sort((e1: { word: string, count: number }, e2: { word: string, count: number }) => e2.count - e1.count)
//     for (let i: number = 0; i < 3; i++)array2.push(array1[i])
//     return array2
// }

// console.log(mostFrequenWords(sentence))