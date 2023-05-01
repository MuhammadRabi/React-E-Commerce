import { useState } from "react";
import FormRow from "./FormRow";
import LoginFormTitle from "./LoginFormTitle";

const LoginForm = () => {
  const [isUser, setIsUser] = useState(true);

  const toggleUser = () => {
    setIsUser(!isUser);
  };

  return (
    <article className="my-6 md:w-5/12">
      <form action="" className="mx-auto w-3/4 space-y-6">
        <LoginFormTitle />
        <h2 className="text-4xl font-semibold capitalize">
          {isUser ? "sign in" : "register"}
        </h2>
        {!isUser && (
          <FormRow type="text" label="full name" placeholder="full name" />
        )}
        <FormRow
          type="text"
          label="email address"
          placeholder="email address or username"
        />
        <FormRow type="password" label="password" placeholder="password" />
        <input type="checkbox" />
        {isUser ? (
          <label htmlFor="remember" className="ml-1">
            remember me
          </label>
        ) : (
          <label htmlFor="agree" className="ml-1">
            I agree to the
            <span className="text-blue-500 cursor-pointer"> Terms</span> and
            <span className="text-blue-500 cursor-pointer"> Privacy</span>.
          </label>
        )}

        <button
          type="submit"
          className="w-full p-4 text-xl text-white capitalize rounded-md bg-slate-800"
        >
          {isUser ? "log in" : "register"}
        </button>
        {isUser ? (
          <div className="flex justify-center space-x-1 ">
            <p className="text-center">not a member?</p>
            <span
              className="capitalize cursor-pointer text-blue-500"
              onClick={toggleUser}
            >
              register!
            </span>
          </div>
        ) : (
          <div className="flex justify-center space-x-1 ">
            <p className="text-center">Already a member?</p>
            <span
              className="capitalize cursor-pointer text-blue-500"
              onClick={toggleUser}
            >
              login!
            </span>
          </div>
        )}
      </form>
    </article>
  );
};
export default LoginForm;
