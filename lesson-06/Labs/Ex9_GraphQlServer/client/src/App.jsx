import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [students, setStudents] = useState([])
  const [studIdInput, setStudIdInput] = useState(0)
  const [facultyInput, setFacultyInput] = useState("")
  const [studentsGradesAvg, setStudentsGradesAvg] = useState(0)

  const [newStudentData, setNewStudentData] = useState({id: 0, name: "", faculty: ""})
  const [newGrade, setNewGrade] = useState({ proffesion: "", score: 0 })

  const [updateStudentData, setUpdateStudentData] = useState({id: 0, name: "", faculty: ""})

  const ENDPOINT_STUDENTS = 'http://localhost:3030/students';

  const getStudents = async () => {
    const students = await axios.post(ENDPOINT_STUDENTS, {
      query: 'query { getAllStudents { id name faculty grades { proffesion score } } }'
    });
    console.log("Students: ", students.data.data.getAllStudents);
    setStudents(students.data.data.getAllStudents);
  }

  const getStudentById = async () => {
    const student = await axios.post(ENDPOINT_STUDENTS, {
      query: `query { getStudentById(id: ${studIdInput}) { id name faculty grades { proffesion score } } }`
    });
    console.log("Student: ", student.data.data.getStudentById);
    setStudents([student.data.data.getStudentById]);
  }

  const getStudentsByFacultyName = async () => {
    const studentsByFaculty = await axios.post(ENDPOINT_STUDENTS, {
      query: `query { getStudentsByFaculty(faculty: "${facultyInput}") { id name faculty grades { proffesion score } } }`
    })
    debugger;
    console.log("studentsByFaculty: ", studentsByFaculty.data.data.getStudentsByFaculty);
    setStudents(studentsByFaculty.data.data.getStudentsByFaculty);
  }

  const getGradesAvgByStudentId = async () => {
    const gradesAvg = await axios.post(ENDPOINT_STUDENTS, {
      query: `query { getGradesAvgByStudentId(id: ${studIdInput}) }`
    })
    console.log("StudentsAvg: ", gradesAvg.data.data.getGradesAvgByStudentId);
    setStudentsGradesAvg(gradesAvg.data.data.getGradesAvgByStudentId);
  }

  const addNewStudent = async() => {
    if (!newStudentData.id && newStudentData.id > 0) {
      const result = await axios.post(ENDPOINT_STUDENTS, {
        query: `mutation {addStudent(stud: {id: ${newStudentData.id}, name: "${newStudentData.name}", faculty: "${newStudentData.faculty}"}) { id name faculty grades { proffesion score } } }`
      })
      console.log("students", result.data.data.addStudent);
      setStudents(result.data.data.addStudent);
    }
  }

  const addNewGrade = async() => {
    if (!newGrade.id && newGrade.id > 0) {
      const result = await axios.post(ENDPOINT_STUDENTS, {
        query: `mutation {addGradeToStudent(id: ${newGrade.id}, gradeObj: {proffesion: "${newGrade.proffesion}", score: ${newGrade.score}}) { id name faculty grades { proffesion score } } }`
      })
      console.log("newGradeResult:", result.data.data.addGradeToStudent);
      setStudents([result.data.data.addGradeToStudent]);
    }
  }

  const updateStudentInfo = async() => {
    if (updateStudentData.id && updateStudentData.id > 0) {
      const result = await axios.post(ENDPOINT_STUDENTS, {
        query: `mutation {updateStudentsPersonalInfo(studentObj: {
        id: ${updateStudentData.id}, 
        ${(updateStudentData.name !== "" ? `name: "${updateStudentData.name}",` : "")}
        ${(updateStudentData.faculty !== "" ? `faculty: "${updateStudentData.faculty}"` : "")}
      }) { id name faculty grades { proffesion score } } }`
      })
      console.log("updatedStudentInfo:", result.data.data.updateStudentsPersonalInfo);
      setStudents([result.data.data.updateStudentsPersonalInfo]);
    }
  }

  const removeStudent = async(id) => {
    const result = await axios.post(ENDPOINT_STUDENTS, {
      query: `mutation {removeStudent(id: ${id}) {id name faculty grades {proffesion score}}}`
    })
    console.log("afterRemoveStudents:", result.data.data.removeStudent);
    setStudents(result.data.data.removeStudent);
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudentData({ ...newStudentData, [name]: value })
  }

  const handleChangeGrade = (e) => {
    const { name, value } = e.target;
    setNewGrade({ ...newGrade, [name]: value })
  }

  const handleChangeStudent = (e) => {
    const { name, value } = e.target;
    setUpdateStudentData({ ...updateStudentData, [name]: value });
  }

  return (
    <div className="main-content">
      <h1 style={{color: '#2d3748', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: '700'}}>
        🎓 Student Management System
      </h1>
      
      <div className="forms-container">
        <div className='leftSide'>
          <h3>➕ Add New Student</h3>
          <input onChange={handleChange} placeholder='Enter new student ID' type="number" name="id" />
          <input onChange={handleChange} placeholder='Enter new student name' type="text" name="name" />
          <input onChange={handleChange} placeholder='Enter new student faculty' type="text" name="faculty" />
          <button onClick={addNewStudent}>Add New Student</button>
        </div>
        <div className='rightSide'>
          <h3>📊 Add Grade to Student</h3>
          <input onChange={handleChangeGrade} placeholder='Enter student ID' type="number" name="id" />
          <input onChange={handleChangeGrade} placeholder='Enter profession' type="text" name="proffesion" />
          <input onChange={handleChangeGrade} placeholder='Enter score' type="number" name="score" />
          <button onClick={addNewGrade}>Add Grade</button>
        </div>
        <div className='leftSide'>
          <h3>Update student info</h3>
          <input onChange={handleChangeStudent} placeholder='Enter student ID' type="number" name="id" />
          <input onChange={handleChangeStudent} placeholder='Enter name' type="text" name="name" />
          <input onChange={handleChangeStudent} placeholder='Enter faculty' type="text" name="faculty" />
          <button onClick={updateStudentInfo}>Update Info</button>
        </div>
      </div>
      <div className="actions-section">
        <h2>🔍 Student Operations</h2>
        
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <button className="action-button" onClick={getStudents}>
            📋 Get All Students
          </button>
        </div>

        <div className="input-group">
          <label>Student ID:</label>
          <input 
            type="number" 
            onChange={e => setStudIdInput(+e.target.value)} 
            name="studentId"
            placeholder="Enter student ID"
          />
          <button className="action-button" onClick={getStudentById}>
            👤 Get Student
          </button>
          <button className="action-button" onClick={getGradesAvgByStudentId}>
            📊 Get Average
          </button>
        </div>

        <div className="input-group">
          <label>Faculty Name:</label>
          <input 
            type="text" 
            onChange={e => setFacultyInput(e.target.value)} 
            name="facultyInput"
            placeholder="Enter faculty name"
          />
          <button className="action-button" onClick={getStudentsByFacultyName}>
            🏫 Get by Faculty
          </button>
        </div>
      </div>

      {students && students.length > 0 && (
        <div className="students-table-container">
          <div className="table-header">
            <h2>📚 Students Information</h2>
          </div>
          <table className="students-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Faculty</th>
                <th>Grades</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id} className="student-row">
                  <td>{student.id}</td>
                  <td className="student-name">{student.name}</td>
                  <td className="student-faculty">{student.faculty}</td>
                  <td className="grades-cell">
                    {student.grades && student.grades.length > 0 ? (
                      student.grades.map(grade => (
                        <span key={grade.proffesion} className="grade-item">
                          {grade.proffesion}: {grade.score}
                        </span>
                      ))
                    ) : (
                      <span className="no-grades">No grades yet</span>
                    )}
                  </td>
                  <td>
                    <button 
                      className="delete-button"
                      onClick={() => removeStudent(student.id)}
                    >
                      🗑️ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {studentsGradesAvg > 0 && (
        <div className="grades-average-section">
          <h3>🎯 Grade Average</h3>
          <div className="average-score">{studentsGradesAvg}</div>
          <p>Student ID: {studIdInput}</p>
        </div>
      )}
    </div>
  )
}

export default App
