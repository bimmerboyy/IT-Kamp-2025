



const students = [
    {name: 'Ana',city: 'Novi Pazar',grade:9},
    {name: 'Marko',city: 'Beograd',grade:8},
    {name: 'Emina',city: 'Nis',grade:10},
    {name: 'Jovan',city: 'Beograd',grade:7},
    {name: 'Petar',city: 'Novi Pazar',grade:6},
];

const container = document.getElementById('studentContainer');
const searchInput = document.getElementById('search');
const cityFilter = document.getElementById('cityFilter');
const gradeFilter = document.getElementById('gradeFilter');

gradeFilter.addEventListener('change',(event)=>{
    console.log(event.target.value);
})

console.log(typeof(students[0].grade));


function renderList(list){
    container.innerHTML = '';

    if(list.length === 0){
        container.innerHTML = '<p>Nema rezultata...</p>';
        return;
    }
    list.forEach(s =>{
        const div = document.createElement('div');
        div.className = 'student';

        const info = document.createElement('span');
        info.textContent = `${s.name} - ${s.city} - ${s.grade}`;

        div.appendChild(info);
        container.appendChild(div);
    });
}

function applyFilters(){
    const term = searchInput.value.toLowerCase();
    const city = cityFilter.value;
    const grade = parseInt(gradeFilter.value);

    let filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(term)
    );
    if (city) filteredStudents = filteredStudents.filter(s => s.city === city);

    if (grade) filteredStudents = filteredStudents.filter(s => s.grade === grade);

    renderList(filteredStudents);
}

// renderList(students);

searchInput.addEventListener('input',applyFilters);
cityFilter.addEventListener('change',applyFilters);
gradeFilter.addEventListener('change',applyFilters);


let proveri = document.querySelector('.proveri');


proveri.addEventListener('click',()=>{
    const term = searchInput.value.toLowerCase();
    const city = cityFilter.value;
    const grade = parseInt(gradeFilter.value);

    let filteredStudents = students.filter(s =>
        s.name.toLowerCase().includes(term)
    );
    if (city) filteredStudents = filteredStudents.filter(s => s.city === city);

    if (grade) filteredStudents = filteredStudents.filter(s => s.grade === grade);

    // renderList(filteredStudents);

    console.log(filteredStudents);
});


const addForm = document.querySelector('#addForm');
const newName = document.querySelector('#newName');
const newCity = document.querySelector('#newCity');
const newGrade = document.querySelector('#newGrade');

let currentStudents = [];


addForm.addEventListener('submit',e =>{
    e.preventDefault();

    const student = {
        name: newName.value,
        city: newCity.value,
        grade: newGrade.value,
    }

    students.push(student);
    currentStudents = [...students];
    renderList(currentStudents);

    addForm.reset();
    
});
