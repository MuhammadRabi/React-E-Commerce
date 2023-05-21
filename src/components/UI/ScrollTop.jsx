import { useEffect, useState } from "react";
import { FaCaretUp } from "react-icons/fa";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showBtn = () => {
      window.scrollY > 600 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener("scroll", showBtn);

    return () => window.removeEventListener("scroll", showBtn);
  }, []);

  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        isVisible ? "" : "translate-y-40"
      } fixed z-50 items-center flex justify-center w-12 h-12 text-4xl text-center text-white duration-300 bg-main rounded-md cursor-pointer hover:to-teal-800 bottom-4 right-8`}
      onClick={scrollHandler}
    >
      <FaCaretUp />
    </div>
  );
};
export default ScrollTop;
