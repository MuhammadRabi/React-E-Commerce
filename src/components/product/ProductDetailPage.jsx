import { useEffect, useState } from "react"
import { FaCartPlus } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { addProduct } from "../../Features/cartSlice"
import ProductImages from "./ProductImages"
import ProductRating from "./ProductRating"

const ProductDetailPage = () => {
  const single_product_url =
    "https://course-api.com/react-store-single-product?id="
  const { id } = useParams()
  const [singleProduct, setSingleProduct] = useState([])
  const dispatch = useDispatch()

  const fetchSingleProduct = async (id) => {
    try {
      const res = await fetch(`${single_product_url}${id}`)
      const data = await res.json()
      setSingleProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSingleProduct(id)
  }, [setSingleProduct, id])

  const {
    name,
    images,
    category,
    description: desc,
    price,
    stock,
    company,
    rating,
  } = singleProduct

  return (
    <>
      <Link to="/" className="text-white bg-red-700 ml-8 px-4 py-2 rounded-md">
        continue shopping
      </Link>
      <article className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-6">
        <ProductImages images={images} />
        <div className="flex flex-col justify-center space-y-4 h-full px-12 my-4">
          <h1 className="text-4xl font-semibold capitalize">{name} </h1>
          <ProductRating rating={rating} />
          <p className="text-red-700 text-2xl font-bold">
            ${(price / 100).toFixed(2)}
          </p>
          <p>{desc}</p>
          <div className="flex flex-col space-y-2">
            <p>
              <span className="font-bold">Category : </span>
              {category}
            </p>
            <p>
              <span className="font-bold">Brand : </span>
              {company}
            </p>
            <p>
              <span className="font-bold">Available : </span>{" "}
              {stock ? "In Stock" : "Out of Stock"}
            </p>
          </div>
          <hr />
          {stock > 0 && (
            <button
              className="py-2 px-6 rounded-md text-white bg-green-500 flex items-center space-x-4 w-fit cursor-pointer outline-none hover:bg-green-700 duration-300"
              onClick={() => {
                dispatch(addProduct({ id, name, price, images }))
              }}
            >
              <span>Add to cart</span>
              <FaCartPlus className="text-2xl"></FaCartPlus>
            </button>
          )}
        </div>
      </article>
    </>
  )
}
export default ProductDetailPage
