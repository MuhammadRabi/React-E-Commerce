import FooterColumn from "./FooterColumn";
import FooterTitle from "./FooterTitle";
import Socials from "./Socials";
import { listOne, listTwo, itemBoxes } from "./data";
const Footer = () => {
  return (
    <footer className="w-full px-6 py-6 md:px-24 bg-zinc-900">
      <div className="grid justify-center gap-12 mx-auto mt-6 grid-cols-275">
        <FooterColumn>
          <FooterTitle title="about us" />
          <p className="text-gray-500">
            We take our mission of increasing our global access to quality of
            furniture products seriously.
          </p>
          <FooterTitle title="social networks" />
          <Socials />
        </FooterColumn>
        <FooterColumn>
          <FooterTitle title="information" />
          <ul className="text-gray-500">
            {listOne.map((item) => {
              return (
                <li
                  key={item.id}
                  className="mb-1 duration-300 cursor-pointer hover:text-gray-300 hover:translate-x-1"
                >
                  {item.text}
                </li>
              );
            })}
          </ul>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle title="account info" />
          <ul className="text-gray-500">
            {listTwo.map((item) => {
              return (
                <li
                  key={item.id}
                  className="mb-1 duration-300 cursor-pointer hover:text-gray-300 hover:translate-x-1"
                >
                  {item.text}
                </li>
              );
            })}
          </ul>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle title="our portfolio" />
          <div className="flex flex-wrap space-x-2 text-gray-500">
            {itemBoxes.map((item) => {
              return (
                <span
                  className="px-2 mb-2 border border-gray-500 cursor-pointer hover:border-gray-300 hover:text-gray-300 duration"
                  key={item.id}
                >
                  {item.title}
                </span>
              );
            })}
          </div>
        </FooterColumn>
      </div>
      <hr className="mx-4 my-6" />
      <p className="py-2 text-xs text-center capitalize text-slate-300 ">
        © 2023 Made With Rabi for eductaional purposes
      </p>
    </footer>
  );
};
export default Footer;
