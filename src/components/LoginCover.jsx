import coverImage from "../assets/images/logincover.jpg";

const LoginCover = () => {
  return (
    <img src={coverImage} className="object-cover md:w-7/12" alt="cover-img" />
  );
};
export default LoginCover;
