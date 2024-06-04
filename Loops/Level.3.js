//Cap do 3:
// const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombi', 'Comoros', 'Congo (Brazzaville)', 'Congo', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor Timur)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia, The', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']
// const sortedCountries = countries.sort()
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
// const sortedWebTechs = webTechs.sort()

// function landCountries(arr) {
//     let newlandContries = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].includes('land')) {
//             newlandContries.push(arr[i])
//         }
//     }
//     return newlandContries
// }

// function longestCountry(arr) {
//     let newlongestCountry = arr[0]
//     for (var i = 0; i < arr.length; i++) {
//         if (newlongestCountry.length <= arr[i].length) {
//             newlongestCountry = arr[i]
//         }
//     }
//     return newlongestCountry
// }

// function only4Countries(arr) {
//     let newonly4Countries = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].length == 4) {
//             newonly4Countries.push(arr[i])
//         }
//     }
//     return newonly4Countries
// }

// function twoWordOrMoreCountries(arr) {
//     let newtwoWordOrMoreCountries = []
//     for (var i = 0; i < arr.length; i++) {
//         let newarr = arr[i].split(' ')
//         if (newarr.length >= 2) {
//             newtwoWordOrMoreCountries.push(arr[i])
//         }
//     }
//     return newtwoWordOrMoreCountries
// }

// function arrayUpper(arr) {
//     var newArrayUpper = []
//     for (var i = 0; i < arr.length; i++) {
//         newArrayUpper.push(arr[i].toUpperCase())
//     }
//     return newArrayUpper
// }

// console.log(landCountries(countries))
// console.log(`${longestCountry(countries)} (${longestCountry(countries).length})`)
// console.log(only4Countries(countries))
// console.log(twoWordOrMoreCountries(countries))
// console.log(arrayUpper(sortedCountries.reverse()))
