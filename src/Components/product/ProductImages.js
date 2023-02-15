import { useState } from "react"
const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0])
  console.log(mainImage)

  return (
    <div className="p-2">
      <img
        src={mainImage}
        alt=""
        className="mx-auto object-cover max-w-full h-[400px]"
      />
      <div className="gallery mt-4 flex space-x-2 justify-center overflow-hidden">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt=""
              className={`cursor-pointer w-24 object-cover h-24 ${
                mainImage === image ? `border-2 border-red-700` : null
              }`}
              onClick={() => setMainImage(images[index])}
            />
          )
        })}
      </div>
    </div>
  )
}
export default ProductImages
