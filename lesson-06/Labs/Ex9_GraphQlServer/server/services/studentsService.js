const students = [
    {
        id: 1, name: 'Andrey', faculty: "Psycology", grades: [
            { proffesion: "Psychologist", score: 95 },
            { proffesion: "Psychologist", score: 95 }
        ]
    },
    {
        id: 2, name: 'Dmitry', faculty: "IT", grades: [
            { proffesion: "Developer", score: 85 },
            { proffesion: "Developer", score: 90 }
        ]
    },
    {
        id: 3, name: 'Olga', faculty: "Finance", grades: [
            { proffesion: "Accountant", score: 88 },
        ]
    },
    {
        id: 4, name: 'Ivan', faculty: "Engineering", grades: [
            { proffesion: "Engineer", score: 92 },
            { proffesion: "Engineer", score: 89 }
        ]
    }
]


const getAllStudents = () => {
    return students;
}

const getStudentById = (graphqlArgs) => {
    const { id } = graphqlArgs;
    return students.find(s => s.id === id);
}

const getStudentsByFaculty = (graphqlArgs) => {
    const { faculty } = graphqlArgs;
    return students.filter(s => s.faculty === faculty);
}

const getGradesAvgByStudentId = (graphqlArgs) => {
    const { id } = graphqlArgs;
    
}