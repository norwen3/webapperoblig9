const students = [{id: 1, name: "Cat"}, 
{id: 2, name: "John"}]

export default function handler(req, res) {
    
    const {
        query: {id, name},
        method,
    } = req

    const {student} = req.body

    switch(method) {
        case "GET":
            res.status(200).json(students)
            break
        case "POST":
            students.push( req.body )
            res.status(201).json(req.body)
            break
        default:
            res.setHeader("Allow", ["GET", "POST"])
            res.status(405).end(`Method ${method} Not Allowed`)

    }
    /*
    if(req.method === "POST"){
        
    
        students.push(student)
        
        res.status(201).json({ student })
      } else {
        res.status(200).json(students)
      }
      */
}