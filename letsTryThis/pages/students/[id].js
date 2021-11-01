import {useRouter} from 'next/router'
import useSWR from 'swr'

//const fetcher = (url) => fetch(url).then((res) => res.json())
const fetcher = async(url) => {
    const res = await fetch(url)
    const data = await res.json()

    if(res.status !== 200){
        throw new Error(data.message)
    }
    return data
}

export default function Student() {
    const { query }= useRouter()
    const { data, error } = useSWR(
        () => query.id &&  `/api/student/${query.id}`,
        fetcher
    )

    if(error) return <div>{error.message}</div>
    if(!data) return <div>Loading...</div>

    return <div>{data.name}</div>
}