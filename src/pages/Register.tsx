/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { regisTer } from "../redux/features/register/registerSlice";
import { useRegisterMutation } from "../redux/features/register/registerApi";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const [mutate] = useRegisterMutation();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const response = await mutate(data);
    //@ts-ignore
    const { name, email, password } = response.data;
    dispatch(regisTer({ name, email, password }));
    reset();
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <h1 className="text-2xl my-10 uppercase">Please register here...</h1>
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Name:
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Email:
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Password:
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </label>

        <button
          type="submit"
          className="w-full btn glass bg-teal-500 rounded-lg text-white px-10 hover:bg-teal-800 text-lg"
        >
          Register
        </button>
        <hr className="my-2" />
        <p className="text-center font-extrabold">or</p>
        <h1 className="text-sm italic text-center mt-2">
          allready have an account please
          <Link
            to="/login"
            className="text-red-500 underline font-extrabold hover:text-teal-500"
          >
            login
          </Link>
          now
        </h1>
      </form>
    </div>
  );
};

export default Register;
