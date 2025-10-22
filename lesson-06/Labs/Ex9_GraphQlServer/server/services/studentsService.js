const students = [
    {
        id: 1, name: 'Andrey', faculty: "Psycology", grades: [
            { proffesion: "Psychologist", score: 95 },
            { proffesion: "Psychologist", score: 95 },
            { proffesion: "Psychologist", score: 78 }
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
    },
    {
        id: 5, name: 'Konstantin', faculty: "IT", grades: [
            { proffesion: "Developer", score: 35 },
            { proffesion: "Developer", score: 57}
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
    const { grades } = students.find(s => s.id === id);
    const gradesAvg =  grades.reduce((acc, grade) => acc + grade.score, 0) / grades.length;
    console.log("Avg type: ", typeof(gradesAvg));
    console.log("student's grades", grades);
    console.log("Average: ", gradesAvg);
    return gradesAvg;
}

const addStudent = (graphqlArgs) => {
    const { stud } = graphqlArgs;
    students.push(stud);
    return students;
}

const addGradeToStudent = (graphqlArgs) => {
    const { id, gradeObj } = graphqlArgs;
    const index = students.findIndex(s => s.id === id);

    if(index !== -1){
        students[index].grades = students[index].grades ? [...students[index].grades, gradeObj] : [gradeObj];
        return students[index];
    }

    return "Incurrect ID."
}

const updateStudentsPersonalInfo = (graphqlArgs) => {
    const { studentObj } = graphqlArgs;
    const index = students.findIndex(s => s.id === studentObj.id);

    if (index !== -1) {
        students[index] = { ...students[index], ...studentObj }
        return students[index];
    }

    return "Incurrect ID"
}

const removeStudent = (graphqlArgs) => {
    const { id } = graphqlArgs;
    const index = students.findIndex(s => s.id === id);

    if (index !== -1) {
        students.splice(index, 1);
        return students;
    }

    return "Incurrect ID"
}

module.exports = {
    //Query
    getAllStudents,
    getStudentById,
    getStudentsByFaculty,
    getGradesAvgByStudentId,
    //Mutation
    addStudent,
    addGradeToStudent,
    updateStudentsPersonalInfo,
    removeStudent
}