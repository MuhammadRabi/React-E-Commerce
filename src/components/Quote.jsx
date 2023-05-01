import Overlay from "./UI/Overlay";
import Button from "./UI/Button";

const Quote = () => {
  return (
    <section className="relative my-24 text-white bg-fixed bg-teal-600 bg-center bg-cover rounded-md py-36 quote">
      <Overlay>
        <article className="flex flex-col items-center justify-center space-y-12 font-semibold">
          <p className="w-3/4 text-4xl leading-tight tracking-wider text-center">
            We have <span className="text-teal-600">designed</span> some
            beautiful furnitures{" "}
          </p>
          <Button title="get quote" />
        </article>
      </Overlay>
    </section>
  );
};
export default Quote;
