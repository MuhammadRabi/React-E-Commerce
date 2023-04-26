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
    <section className="flex justify-around w-full mx-auto my-12">
      {promData.map((item) => {
        return (
          <article
            key={item.id}
            className="flex items-center px-4 space-x-2 border-l border-l-slate-300"
          >
            <div className="p-2 text-4xl text-white bg-teal-600 rounded-lg icon">
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
