
export default function studentHandler(req, res){

    const {
        query: {id, name},
        method,
    } = req

    const {student} = req.body
    
    switch(method) {
        case "GET":
            res.status(200).json({id, name: `Student ${id}`})
            break
        case "POST":
            res.status(201).json({id, name: name || `Student ${id}`})
            break
        default:
            res.setHeader("Allow", ["GET", "POST"])
            res.status(405).end(`Method ${method} Not Allowed`)

    }
    
}