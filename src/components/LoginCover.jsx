import coverImage from "../assets/images/logincover.jpg";

const LoginCover = () => {
  return (
    <img
      src={coverImage}
      className="flex-none object-cover basis-7/12"
      alt="cover-img"
    />
  );
};
export default LoginCover;
