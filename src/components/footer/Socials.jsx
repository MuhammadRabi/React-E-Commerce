import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-2 text-white">
      <div className="hover:bg-[#1877f2] cursor-pointer p-2 duration-300 rounded-full">
        <a href="http://facebook.com">
          <FaFacebookF />
        </a>
      </div>
      <div className="hover:bg-[#1da1f2] cursor-pointer p-2 duration-300 rounded-full">
        <a href="http://twitter.com">
          <FaTwitter />
        </a>
      </div>
      <div className="hover:bg-[#e1306c] cursor-pointer p-2 duration-300 rounded-full">
        <a href="http:/instagram.com">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};
export default Socials;
