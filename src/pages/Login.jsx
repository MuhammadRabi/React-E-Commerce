import LoginCover from "../components/LoginCover";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <section className="flex flex-col md:flex-row md:h-screen justify-center w-full overflow-hidden">
      <LoginCover />
      <LoginForm />
    </section>
  );
};
export default Login;
