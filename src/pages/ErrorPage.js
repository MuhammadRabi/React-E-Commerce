import { Link } from "react-router-dom"
const ErrorPage = () => {
  return (
    <>
      <article className="flex flex-col items-center space-y-10 mt-48">
        <h1 className="text-6xl font-bold"> ErrorPage</h1>
        <Link to="/" className="modal-btn">
          return to Home page
        </Link>
      </article>
    </>
  )
}
export default ErrorPage
