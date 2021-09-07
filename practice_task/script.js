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

// a. for & forEach to get all company names
for(let i = 0; i < companies.length; i++){
        // console.log(companies[i].name);
};
    
companies.forEach(function(company){
        // console.log(company.name);
});

// companies.forEach(company => console.log(company.name))


// b. Get all ages above or equal to 21 in a different array(for & filter, long and short).
    let agesCanDrink = [];
    for(let i = 0; i < ages.length; i++){
        if(ages[i] >= 21){
            agesCanDrink.push(ages[i])
        }
        agesCanDrink.sort();
    };
        // console.log(agesCanDrink)

    let filterAgesCanDrink = ages.filter(function(age){
            if(age >= 21){
                return true;
            }
            
        });
        filterAgesCanDrink.sort();
        // console.log(filterAgesCanDrink)

    let canDrink = ages.filter(age => age >= 21);
       // console.log(canDrink)

// c. Get all companies with the category of retail(filter, long & short). 
    let retailCompanies = companies.filter(function(company){
        if(company.category == 'Retail'){
            return true;
        }
    });

    let retailCompaniesII = companies.filter(company => company.category == 'Retail');
        // console.log(retailCompaniesII);


// d. Get all 80s companies (filter, short)
    let eightiesCompanies = companies.filter(
        company => company.start >= 1980 && company.start < 1990
    );
        // console.log(eightiesCompanies);


 // e. Get all companies 10 years old or more (filter, short)
        let lastedTenYears = companies.filter(
            company => (company.end - company.start) >= 10
        )
        // console.log(lastedTenYears);


// f. Get all company names (map, long & short)
let companyNamesMap = companies.map(function(company){
    // console.log(company.name)
});

// let companyNamesII = companies.map(company => console.log(company.name))


// g. Get all company names with their start and end date(map, long & short).
let companyDetails = companies.map(function(company){
        return `${company.name} [${company.start},${company.end}]
        `
});

let companyDetailsII = companies.map(company => `${company.name} [${company.start} - ${company.end}]
`);
// console.log(companyDetailsII);


// h, i, j. Get the squareroot of all ages, multiply by 2(map, short)
let agesSqrt = ages
.map(age => Math.sqrt(age))
.map(age => age * 2);
// console.log(agesSqrt)


// k. Sort companies by their start year - earliest to latest (sort, tip: pass two parameters and compare, long and short, tip: use ternary operator for short)
let sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;
    } else {
        return -1;
    }
}
);

let sortedCompaniesII = companies.sort((c1, c2) => c1.start > c2.start ? 1 : -1)
    // console.log(sortedCompaniesII)


// l. Sort ages from lowest to highest (sort, short)
ages.sort((a, b) => a - b);
    // console.log(ages);


// m. Get total of all ages (reduce, long & short)
let ageSum = 0;
for(i = 0; i < ages.length; i++ ){
    ageSum += ages[i];
}

let ageSumII = ages.reduce(function(total, age){
    return total + age;
}, 0); 

let ageSumIII = ages.reduce((total, age) => total + age, 0);
    // console.log(ageSumIII);

// n. Get total of all company years (reduce, short)
let totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0
);
    // console.log(totalYears);


// o. Combine all methods (multiply age by 2, filter ages > 40, sort them, add them. Tip: always remember the total parameter and the 0 for reduce.)
let combinedMethods = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((total, age) => total + age, 0);
    console.log(combinedMethods);


// YAYYYYYYYYYYYY!!!!!!!!!!!!!!!!!!!!!!!