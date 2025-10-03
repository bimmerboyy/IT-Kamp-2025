const companies = [
  {name: "TechCorp",category: "Technology",start: 2005,end: 2021},
  {name: "HealthPlus",category: "Healthcare",start: 2010,end: 2024},
  {name: "EduSmart",category: "Education",start: 2012,end: 2020},
  {name: "GreenEnergy",category: "Energy",start: 2008,end: 2023},
  {name: "FinTrust",category: "Finance",start: 2015,end: 2025}
];

const ages = [12, 25, 32, 45, 19, 67, 34, 23, 18, 29, 41, 55, 60, 15, 38, 27, 22, 31, 49, 53, 16];


//forEach -> vrsi iteracije kroz niz kao for petlja,ne menja niz

companies.forEach(function (company){
    console.log(company);
});

//map -> menja niz,vraca novi niz

let companyNames = companies.map(function (company){
    return company.name;
});

//Bez filtera
let novi_niz = [];
for(let i = 0;i <= ages.length;i++){
    if(ages[i] > 18){
        novi_niz.push(ages[i]);
        
    }
}
//Sa filterom

const adoults = ages.filter(function (age){
    if(age >= 18){
        return true;
    }
});

console.log(adoults);

console.log(novi_niz);

//reduce

const ageSume = ages.reduce(function (total,age){
    return total + age;
});

console.log(ageSume);