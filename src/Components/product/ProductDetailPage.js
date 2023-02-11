import { useParams, Link } from "react-router-dom"

const ProductDetailPage = () => {
  const { productId } = useParams()
  const params = useParams()
  console.log(params)

  return (
    <>
      <h1 className="text-7xl">this is a test page </h1>
      <div>{productId} Detail Page</div>
      <img
        src="https://media.istockphoto.com/id/1186065957/vector/phone-call-sound-and-camera-ban-sign.jpg?s=1024x1024&w=is&k=20&c=PGvZJubb6-1KtrNbeB-3OXX35WaAiECjl8jUow01-Ng="
        alt=""
        className="w-64 object-cover"
      />
      <Link to="/" className="text-red-600">
        continue shopping
      </Link>
    </>
  )
}
export default ProductDetailPage
