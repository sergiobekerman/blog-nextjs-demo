export default (req, res) => {
    console.log(req.query)
    const {
        query: { pid },
      } = req
    res.end(`Post: ${req.query.pid}`)
    // res.end(`Post: ${pid}`)
  }