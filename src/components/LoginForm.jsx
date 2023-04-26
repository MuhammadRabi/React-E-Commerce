import FormRow from "./FormRow";

const LoginForm = () => {
  return (
    <article className="my-24 basis-5/12">
      <form action="" className="mx-auto w-3/4 mt-12 space-y-8">
        <h2 className="text-4xl font-semibold capitalize">sign in</h2>
        <FormRow
          type="text"
          label="email address"
          placeholder="email address or username"
        />
        <FormRow type="password" label="password" placeholder="password" />
        <input type="checkbox" /> Remember me
        <button
          type="submit"
          className="w-full p-4 text-white capitalize rounded-md bg-slate-800"
        >
          log in
        </button>
        <p className="text-center">Not a member? Sign Up now</p>
      </form>
    </article>
  );
};
export default LoginForm;
