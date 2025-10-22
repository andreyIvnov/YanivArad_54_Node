const express = require('express');
const cors = require('cors');

const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');

const stuServ = require('./services/studentsService')

const schema = buildSchema
(`
    input StudentInput {
        id: Int
        name: String
        faculty: String
    }

    input StudentPersonalInfoInput {
        id: Int
        name: String
        faculty: String
    }

    input GradeInput {
        proffesion: String
        score: Int
    }

    type Student {
        id: Int
        name: String
        faculty: String
        grades: [Grade]
    }

    type Grade {
        proffesion: String
        score: Int
    }

    type Query {
        getAllStudents: [Student]
        getStudentById(id: Int): Student
        getStudentsByFaculty(faculty: String): [Student]
        getGradesAvgByStudentId(id: Int): Float
    }

    type Mutation {
        addStudent(stud: StudentInput): [Student]
        addGradeToStudent(id: Int, gradeObj: GradeInput): Student 
        updateStudentsPersonalInfo(studentObj: StudentPersonalInfoInput): Student
        removeStudent(id: Int): [Student]
    }
`)

const root = {
    getAllStudents: stuServ.getAllStudents,
    getStudentById: stuServ.getStudentById,
    getStudentsByFaculty: stuServ.getStudentsByFaculty,
    getGradesAvgByStudentId: stuServ.getGradesAvgByStudentId,
    addStudent: stuServ.addStudent,
    addGradeToStudent: stuServ.addGradeToStudent,
    updateStudentsPersonalInfo: stuServ.updateStudentsPersonalInfo,
    removeStudent: stuServ.removeStudent
}

const app = express();
const PORT = 3030;

app.use(cors());

app.use('/students', 
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(PORT, () => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
