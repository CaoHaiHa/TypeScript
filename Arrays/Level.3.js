//Cau 1:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// var l = ages.length

// ages.sort()
// var min = ages[0]
// var max = ages[l - 1]

// console.log(ages)
// console.log(`The max age: ${max}
// The min age: ${min}`)

// function findMiddle(a) {
//     var ll = a.length
//     if (ll % 2 == 0) {
//         return console.log(`The median age: ${a.slice(ll / 2 - 1, ll / 2 + 1)}`)
//     }
//     else {
//         return console.log(`The median age: ${a.slice(Math.round(ll / 2) - 1), Math.round(ll / 2)}`)
//     }
// }

// findMiddle(ages)

// function averageAge(a) {
//     var sum = 0
//     for (var i = 0; i < a.length; i++) {
//         sum += a[i]
//     }
//     return sum / a.length
// }

// console.log(`The average age: ${averageAge(ages)}`)

// console.log(`Range of the ages: ${max - min}`)

// console.log(`min - average: ${Math.abs(min - averageAge(ages)).toFixed(2)}
// max - average: ${Math.abs(max - averageAge(ages)).toFixed(2)}`)

//Cau 2:
// const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombi', 'Comoros', 'Congo (Brazzaville)', 'Congo', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor Timur)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia, The', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']
// var l = countries.length
// var countries1 = []
// var countries2 = []

// console.log(countries.slice(0, 10))

// function findMiddle(a) {
//     return a.slice(Math.round(l / 2 - 1), Math.round(l / 2))
// }

// console.log(findMiddle(countries))

// function divide(a, b, c) {
//     if (a.length % 2 == 0) {
//         b = a.slice(0, a.length / 2)
//         c = a.slice(a.length / 2, a.length)
//         console.log(`Countries array 1:
//         ${b}`)
//         console.log(`Countries array 2:
//         ${c}`)
//     }
//     else {
//         b = a.slice(0, Math.round(a.length / 2) - 1)
//         c = a.slice(Math.round(a.length / 2) - 1, a.length)
//         b.push('Vietnamese')
//         console.log(`Countries array 1:
//         ${b}`)
//         console.log(`Countries array 2:
//         ${c}`)
//     }
// }

// divide(countries, countries1, countries2)
