import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <section className="px-12 py-24 bg-gray-200 lg:px-36 section-layout">
      <div className="grid justify-around grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3">
        <ServiceBox />
      </div>
    </section>
  );
};
export default Services;
