// Learning High Order Arrays and Functions 
// FOREACH, MAP, FILTER, SORT, REDUCE.

const companies = [
    {name: "Company One", 
    category: "Finance", 
    start: 1981, 
    end: 2003},
    {name: "Company Two", 
    category: "Retail", 
    start: 1992, 
    end: 2008},
    {name: "Company Three", 
    category: "Auto", 
    start: 1999, 
    end: 2007},
    {name: "Company Four", 
    category: "Retail", 
    start: 1989, 
    end: 2010},
    {name: "Company Five", 
    category: "Technology", 
    start: 2009, 
    end: 2014},
    {name: "Company Six", 
    category: "Finance", 
    start: 1987, 
    end: 2010},
    {name: "Company Seven", 
    category: "Auto", 
    start: 1986, 
    end: 1996},
    {name: "Company Eight", 
    category: "Technology", 
    start: 2011, 
    end: 2016},
    {name: "Company Nine", 
    category: "Retail", 
    start: 1981, 
    end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32 ];

// for(let i = 0; i < companies.length; i++){
//     // console.log(companies[i])
// }
// // Does it only work for arrays?


// // forEach
// A better way to loop through an array
// // companies.forEach(function(company, index, companies )) Showing the three things that can be passed in. 
// companies.forEach(function(company){
//     // console.log(company.name);
// });


// // filter 
// Allows you filter things from the array 
// // for example (get 21 and above)
// let canDrink = []
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// };

// // 1 filter version of for
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//     return true;
// }});

// // filter version using the arrow function
// const canDrink = ages.filter(age => age >= 21);

// // console.log(canDrink);

// // 2 Filter retail companies 
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === retail){
//             return true;
//     }
// });

// // using arrow function
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// The reason why the company isn't enclosed in parenthesis is because the parameter is just one. It's avisable to use the parenthesis when the parameter is more than one.

// Get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

// console.log(eightiesCompanies);

// Companies up to 10 years old or more

// const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// console.log(lastedTenYears)


// map
// Creates new arrays of anything from the current array
// Create array of company names
// const companyNames = companies.map(function(company){
//     return company.name
// });

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

// const testMap = companies.map(company =>
//     `${company.name} [${company.start} - ${company.end}]`);

// Getting the squareroot
// const agesSquare = ages.map( age => Math.sqrt(age));

// // Multiplying each age by 2
// const agesTimesTwo = ages.map( age => age * 2
// );

// Using two maps(get the squareroot and mulitiply by 2)
// const twoMaps = ages 
// .map(age => Math.sqrt(age))
// .map(age => age * 2);
// // console.log(agesSquare);
// console.log(twoMaps);


// sort
// sorting companies by start year (earliest to latest)
// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     } else {
//         return -1;
//     }

// });

// shorter form using arrow function and ternary operator
const sortedCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1)
// console.log(sortedCompanies)

// Sort from lowest to highest
const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges)
// I DON'T UNDERSTAND 

// reduce
// can be used to do a lot of things and can get quite complicated 
// Add all ages together 

// with a for loop
// let ageSum = 0;
// for(i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

const ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0)

// Get total years for all companies
const totalYears = companies.reduce((total, company) => total +( company.end - company.start), 0);
console.log(totalYears);
// So reduce gets the total of arrays? 
// Combine Methods

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0);
// always remember the total parameter,and the 0


console.log(combined)