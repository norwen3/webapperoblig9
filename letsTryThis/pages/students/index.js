import { useReducer } from "react"
import useSWR from "swr"
import Link from 'next/link'
import axios from "axios"
import Student from "./[id]"
import StudentComponent from "../../components/StudentComponent"

const fetcher = (url) => fetch(url).then((res) => res.json())
const {items} = async () => await axios.get("/api/students").then(res => res.data)

export default function Index() {


    //const {data, error} = useSWR("/api/students", fetcher)

    

    //typeof items.data;
    
    return(
        <StudentComponent/>
    )
}