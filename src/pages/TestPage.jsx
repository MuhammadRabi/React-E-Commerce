import { Link } from "react-router-dom"

const TestPage = () => {
  return (
    <>
      <section className="flex flex-col space-y-12">
        <h1 className="text-6xl">Test Page</h1>
        <Link to="/" className="modal-btn">
          return to home page
        </Link>
      </section>
    </>
  )
}
export default TestPage
