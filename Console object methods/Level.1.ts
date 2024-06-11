// //Array
// const countries: string[] = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombi', 'Comoros', 'Congo (Brazzaville)', 'Congo', 'Costa Rica', "Cote d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor (Timor Timur)', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia, The', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia and Montenegro', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']
// interface Country {
//     name: string,
//     capital: string,
//     languages: string[],
//     population: number,
//     flag: string,
//     region: string,
//     area: number
// }
// const countries_data: Country[] = [
//     {
//         "name": "Afghanistan",
//         "capital": "Kabul",
//         "languages": [
//             "Pashto",
//             "Uzbek",
//             "Turkmen"
//         ],
//         "population": 40218234,
//         "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
//         "region": "Asia",
//         "area": 652230
//     },
//     {
//         "name": "Åland Islands",
//         "capital": "Mariehamn",
//         "languages": [
//             "Swedish"
//         ],
//         "population": 28875,
//         "flag": "https://flagcdn.com/ax.svg",
//         "region": "Europe",
//         "area": 1580
//     },
//     {
//         "name": "Albania",
//         "capital": "Tirana",
//         "languages": [
//             "Albanian"
//         ],
//         "population": 2837743,
//         "flag": "https://flagcdn.com/al.svg",
//         "region": "Europe",
//         "area": 28748
//     },
//     {
//         "name": "Algeria",
//         "capital": "Algiers",
//         "languages": [
//             "Arabic"
//         ],
//         "population": 43851043,
//         "flag": "https://flagcdn.com/dz.svg",
//         "region": "Africa",
//         "area": 2381741
//     },
//     {
//         "name": "American Samoa",
//         "capital": "Pago Pago",
//         "languages": [
//             "English",
//             "Samoan"
//         ],
//         "population": 55197,
//         "flag": "https://flagcdn.com/as.svg",
//         "region": "Oceania",
//         "area": 199
//     },
//     {
//         "name": "Andorra",
//         "capital": "Andorra la Vella",
//         "languages": [
//             "Catalan"
//         ],
//         "population": 77265,
//         "flag": "https://flagcdn.com/ad.svg",
//         "region": "Europe",
//         "area": 468
//     },
//     {
//         "name": "Angola",
//         "capital": "Luanda",
//         "languages": [
//             "Portuguese"
//         ],
//         "population": 32866268,
//         "flag": "https://flagcdn.com/ao.svg",
//         "region": "Africa",
//         "area": 1246700
//     },
//     {
//         "name": "Anguilla",
//         "capital": "The Valley",
//         "languages": [
//             "English"
//         ],
//         "population": 13452,
//         "flag": "https://flagcdn.com/ai.svg",
//         "region": "Americas",
//         "area": 91
//     },
//     {
//         "name": "Antarctica",
//         capital: "",
//         "languages": [
//             "English",
//             "Russian"
//         ],
//         "population": 1000,
//         "flag": "https://flagcdn.com/aq.svg",
//         "region": "Polar",
//         "area": 14000000
//     },
//     {
//         "name": "Antigua and Barbuda",
//         "capital": "Saint John's",
//         "languages": [
//             "English"
//         ],
//         "population": 97928,
//         "flag": "https://flagcdn.com/ag.svg",
//         "region": "Americas",
//         "area": 442
//     },
//     {
//         "name": "Argentina",
//         "capital": "Buenos Aires",
//         "languages": [
//             "Spanish",
//             "Guaraní"
//         ],
//         "population": 45376763,
//         "flag": "https://flagcdn.com/ar.svg",
//         "region": "Americas",
//         "area": 2780400
//     },
//     {
//         "name": "Armenia",
//         "capital": "Yerevan",
//         "languages": [
//             "Armenian"
//         ],
//         "population": 2963234,
//         "flag": "https://flagcdn.com/am.svg",
//         "region": "Asia",
//         "area": 29743
//     },
//     {
//         "name": "Aruba",
//         "capital": "Oranjestad",
//         "languages": [
//             "Dutch",
//             "(Eastern) Punjabi"
//         ],
//         "population": 106766,
//         "flag": "https://flagcdn.com/aw.svg",
//         "region": "Americas",
//         "area": 180
//     },
//     {
//         "name": "Australia",
//         "capital": "Canberra",
//         "languages": [
//             "English"
//         ],
//         "population": 25687041,
//         "flag": "https://flagcdn.com/au.svg",
//         "region": "Oceania",
//         "area": 7692024
//     }
// ]

// //Cau 1:
// console.log(`%cTable countries array:`, 'color:blue')
// console.table(countries)
// console.log(`-------------------------------------------------------`)

// //Cau 2:
// console.log(`%cTable countries object:`, 'color:blue')
// console.table(countries_data)
// console.log(`-------------------------------------------------------`)

// //Cau 3:
// console.group(`Test`)
// console.log(`%cHello World`, 'color:purple')
// console.groupEnd()