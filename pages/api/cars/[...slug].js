// http://localhost:3000/api/cars/1/2/3
// { "slug": ["a", "b"] }

export default (req, res) => {
    const {
      query: { slug },
    } = req
  
    res.end(`Slugs: ${slug.join(', ')}`)
  }