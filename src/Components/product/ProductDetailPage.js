import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const ProductDetailPage = () => {
  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState([])

  const fetchSingleProduct = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      setSingleProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSingleProduct(id)
  }, [id])
  const { title, images, category, description: desc, price } = singleProduct

  return (
    <>
      <article className="text-center">
        <h1 className="text-7xl">{title} </h1>
        <div> {title} Detail Page</div>
        <img
          src="https://media.istockphoto.com/id/1186065957/vector/phone-call-sound-and-camera-ban-sign.jpg?s=1024x1024&w=is&k=20&c=PGvZJubb6-1KtrNbeB-3OXX35WaAiECjl8jUow01-Ng="
          alt=""
          className="mx-auto w-64 object-cover"
        />
        <p>{desc}</p>
        <p>${price}</p>
        <Link to="/" className="text-red-600">
          continue shopping
        </Link>
      </article>
    </>
  )
}
export default ProductDetailPage
