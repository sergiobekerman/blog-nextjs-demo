//http://localhost:3000/api/cars
export default (req, res) => {
    res.status(200).json({ cars: 
        [ 
            {id: 1, Model: 'Falcon'}, 
            {id: 2, Model: 'Palio'} 
        ]})
}