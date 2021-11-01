import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
const StudentComponent =  () => {
    const [students, setStudents] = useState([])
    const [currentStudent, setCurrentStudent] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(-1)
    const [searchName, setSearchName] = useState("")

    useEffect(() => {
        retrieveStudents()
    }, [])

    const onChangeSearchName = e => {
        const searchName = e.target.value
        setSearchName(searchName)
    }

    const retrieveStudents = async () => {
        await axios.get("/api/students").then(response => {
            setStudents(response.data)
            console.log(response.data)
        }).catch(e => {
            console.log(e)
        })
    }

    const refreshList = () => {
        retrieveStudents()
        setCurrentStudent(null);
        setCurrentIndex(-1);
    }

    const setActiveStudent = (student, index) => {
        setCurrentStudent(student)
        setCurrentIndex(index)
    }

    const removeAllStudents = async () => {
        await axios.delete("/api/students").then(response => {
            console.log(response.data)
            refreshList()
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <>
        <ul>
            {students && students.map( (items) => (
                <li
                key = {items.name}>
                    <Link href="students/[id]" as={`/students/${items.name}`}>
                        <a>{`Student ${items.name}`}</a>
                    </Link>
                </li>
            ))}
        </ul>
        <button 
        className="m-3 btn btn-sm btn-danger"
        onClick={removeAllStudents}>
            Remove All
        </button>
        </>
    )
}

export default StudentComponent