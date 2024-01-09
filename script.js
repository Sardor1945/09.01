let persons = [
    { name: "John", age: 25, city: "NewYork" },
    { name: "Alice", age: 30, city: "London" },
    { name: "Bob", age: 22, city: "Paris" },
    { name: "Alex", age: 19, city: "London" },
    { name: "Tyler", age: 24, city: "NewYork" },
    { name: "Constantine", age: 31, city: "Paris" },
    { name: "Cole", age: 21, city: "London" },
];  
function findPersonsByCity(city) { let result = [];

    for (let i = 0; i < persons.length; i++) { if (persons[i].city === city) { result.push(persons[i]); } }
    
    return result; }
    
    let cityName = prompt("Введите название города:"); let cityPersons = findPersonsByCity(cityName); console.log(cityPersons);

function calculateAverageAge(persons) { let totalAge = 0;

    for (let i = 0; i < persons.length; i++) { totalAge += persons[i].age; }
        
    let averageAge = totalAge / persons.length; return averageAge; }
        
    let averageAge = calculateAverageAge(persons); console.log(averageAge);





