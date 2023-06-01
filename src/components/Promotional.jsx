import { FaShippingFast } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

const Promotional = () => {
  const promData = [
    {
      id: 1,
      title: "Free Shipping & Returns",
      icon: <FaShippingFast />,
    },
    {
      id: 2,
      title: "Lowest Price Guarantee",
      icon: <FaAward />,
    },
    {
      id: 3,
      title: "Longest Warranties Offer",
      icon: <FaTrophy />,
    },
  ];

  return (
    <section className="flex flex-col items-start justify-around w-full mx-auto my-12 md:items-center md:flex-row">
      {promData.map((item) => {
        return (
          <article
            key={item.id}
            className="flex items-center px-4 mb-6 space-x-2 border-l border-l-slate-300"
          >
            <div className="p-2 text-xl text-white rounded-lg bg-main md:text-4xl icon">
              {item.icon}
            </div>
            <p className="text-xl">{item.title}</p>
          </article>
        );
      })}
    </section>
  );
};
export default Promotional;
