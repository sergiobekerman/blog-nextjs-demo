//http://localhost:3000/api/cars/4
export default (req, res) => {
    res.status(200).json(
            {id: req.query.id, Model: 'Falcon'}
        )
}