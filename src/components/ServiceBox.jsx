import { FaUserSecret, FaWarehouse, FaShippingFast } from "react-icons/fa";

const ServiceBox = () => {
  const servicesData = [
    {
      id: 1,
      icon: <FaUserSecret className="mx-auto text-6xl" />,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, necessitatibus vitae aliquam laborum magni quae.",
    },
    {
      id: 2,
      icon: <FaWarehouse className="mx-auto text-6xl" />,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, necessitatibus vitae aliquam laborum magni quae.",
    },
    {
      id: 3,
      icon: <FaShippingFast className="mx-auto text-6xl" />,
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,  necessitatibus vitae aliquam laborum magni quae.",
    },
  ];

  return (
    <>
      {servicesData.map((item) => {
        return (
          <article
            key={item.id}
            className="flex flex-col p-4 py-8 space-y-4 duration-300 ease-in bg-teal-600 rounded-md cursor-pointer text-slate-100 hover:bg-slate-100 hover:translate-y-2 hover:text-teal-600 justify-evenly box"
          >
            {item.icon}
            <p className="text-center">{item.content}</p>
          </article>
        );
      })}
    </>
  );
};
export default ServiceBox;
