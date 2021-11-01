import http from "../http-common"

const dataService = () => {
    const getAll = () => {
        return http.get("/students");
    }
    
    const get = (id) => {
        return http.get(`/students/${id}`)
    }
    
    const create = (data) => {
        return http.post("/students", data)
    }
    
    const update = (id, data) => {
        return http.put(`/students/${id}`, data)
    }
    
}



export default dataService 