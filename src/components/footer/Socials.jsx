import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex space-x-2 text-white">
      <div className="hover:bg-[#1877f2] cursor-pointer p-2 duration-300 rounded-full">
        <a href="http://facebook.com" aria-label="facebook-link">
          <FaFacebookF />
        </a>
      </div>
      <div className="hover:bg-[#1da1f2] cursor-pointer p-2 duration-300 rounded-full">
        <a href="http://twitter.com" aria-label="twitter-link">
          <FaTwitter />
        </a>
      </div>
      <div className="hover:bg-[#e1306c] cursor-pointer p-2 duration-300 rounded-full">
        <a href="http:/instagram.com" aria-label="instagram-link">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};
export default Socials;
