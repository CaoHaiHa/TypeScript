// //Array
// const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombi', 'Comoros', 'Congo (Brazzaville)', 'Congo', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor Timur)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia, The', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']
// const products = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
// ]

// //Cau 1:
// const sum1 = products.filter((e) => typeof e.price === 'number').reduce((total, e) => {
//     return total + e.price
// }, 0)

// console.log(sum1)
// console.log(`-------------------------------------------------------------`)

// //Cau 2:
// const sum2 = products.reduce((total, e) => {
//     if (typeof e.price === 'number') return total + e.price
//     else return total
// }, 0)

// console.log(sum2)
// console.log(`-------------------------------------------------------------`)

// //Cau 3:
// const categorizeCountries = (countries, pattern) => {
//     let newCoutries = countries.filter((e) => {
//         e = e.toLowerCase()
//         return e.includes(pattern)
//     })
//     return newCoutries
// }

// console.log(categorizeCountries(countries, 'land'))
// console.log(categorizeCountries(countries, 'ia'))
// console.log(categorizeCountries(countries, 'island'))
// console.log(categorizeCountries(countries, 'stan'))
// console.log(`-------------------------------------------------------------`)

// //Cau 4:
// const boring = (countries) => {
//     let alpha = 'qwertyuiopasdfghjklzxcvbnm'.split('').sort()
//     let bor = alpha.map((e1) => {
//         let count = 0
//         countries.forEach((e2) => {
//             e2 = e2.toLowerCase()
//             if (e2.startsWith(e1)) count++
//             return count
//         });
//         return { Character: e1, Count: count }
//     })
//     return bor
// }

// console.log(boring(countries))
// console.log(`-------------------------------------------------------------`)

// //Cau 5:
// const getFirstTenCountries = (countries) => {
//     let newCountries = countries.filter((e, index) => {
//         if (index < 10) return e
//     })
//     return newCountries
// }

// console.log(getFirstTenCountries(countries))
// console.log(`-------------------------------------------------------------`)

// //Cau 6:
// const getLastTenCountries = (countries) => {
//     let newCountries = countries.filter((e, index, arr) => {
//         if (index > arr.length - 11) return e
//     })
//     return newCountries
// }

// console.log(getLastTenCountries(countries))
// console.log(`-------------------------------------------------------------`)

// //Cau 7:
// const letterUsedManyTime = boring(countries).sort((e1, e2) => {
//     if (e2.Count < e1.Count) return -1
//     else return 0
// })

// console.log(letterUsedManyTime.find((e) => e))