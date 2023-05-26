import Overlay from "../UI/Overlay";

const Hero = () => {
  return (
    <>
      <section className="hero h-[92vh] bg-slate-200 relative flex items-center justify-center">
        <Overlay>
          <h1 className="p-2 mt-56 text-6xl font-bold text-white bg-slate-800">
            Market<span className="my-auto text-cyan-400 text-8xl">H</span>ub
          </h1>
        </Overlay>
      </section>
    </>
  );
};
export default Hero;
