import Button from "./UI/Button";
import resting from "../assets/images/chair.png";
const Blog = () => {
  return (
    <section className="bg-teal-800 flex-wrap py-6 md:py-12 items-center justify-between px-2.5 md:px-6 lg:px-24 xl:px-36 flex">
      <div className="flex flex-col w-1/2 p-2 space-y-12 text-white md:p-16 details">
        <h2 className="text-4xl">From Our Blog Craftsmanship Is An Art</h2>
        <p className="text-white">
          Lorem ipsum is simply dummy text of the printing and typesetting.
          Lorem Ipsum has been the industry. Lorem ipsum is simply dummy text of
          the printing and typesetting. Lorem Ipsum has been the industry.
        </p>
        <Button title="discover more" />
      </div>
      <figure className="flex">
        <img src={resting} className="w-64" alt="chair" />
      </figure>
    </section>
  );
};
export default Blog;
