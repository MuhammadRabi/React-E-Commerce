import Button from "./UI/Button";
import resting from "../assets/images/chair.png";
const Blog = () => {
  return (
    <section className="bg-teal-800 py-6 md:py-12 items-center space-y-8 justify-around px-2.5 md:px-6 lg:px-24 xl:px-36 flex flex-col md:flex-row">
      <article className="flex flex-col p-2 space-y-12 text-white lg:w-1/2 md:p-16 details">
        <h2 className="text-4xl">From Our Blog Craftsmanship Is An Art</h2>
        <p className="text-white">
          Lorem ipsum is simply dummy text of the printing and typesetting.
          Lorem Ipsum has been the industry. Lorem ipsum is simply dummy text of
          the printing and typesetting. Lorem Ipsum has been the industry.
        </p>
        <Button title="discover more" />
      </article>
      <figure className="flex shrink-0">
        <img src={resting} className="w-64" alt="chair" />
      </figure>
    </section>
  );
};
export default Blog;
