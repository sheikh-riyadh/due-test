import { useForm } from "react-hook-form";
import { FaLock } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Input from "../components/common/Input";
import SubmitButton from "../components/common/SubmitButton";
import mountain from "../assets/mountain-04_od_cz.png"

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();

  const handleLogin = async ({ email, password }) => {
    
  };

  return (
    <div className="h-svh relative">
      <div className="flex flex-col  items-center justify-center h-screen w-full my_container z-30 absolute">
        <div className="flex flex-col items-center justify-center bg-white border shadow-lg rounded-xl overflow-hidden w-[340px] h-[340px]">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col items-center justify-center gap-5 w-full p-7"
          >
            <div className="w-16 h-16 border p-2 rounded-full flex flex-col items-center justify-center bg-emerald-700 text-white">
              <FaLock className="text-4xl" />
            </div>
            <h1 className="font-bold text-3xl capitalize">Login Pannel</h1>
            <div className="w-full flex flex-col gap-5">
              <Input
                {...register("email")}
                placeholder="Email *"
                type="email"
                required
                defaultValue="pathology@gmail.com"
                className="w-full bg-[#f3f4f6]"
              />
              <Input
                {...register("password")}
                placeholder="**************"
                type="password"
                required
                className="bg-[#f3f4f6]"
              />
            </div>

            <SubmitButton
            //   isLoading={isLoading || jwtLoading}
              className="bg-emerald-700"
            >
              Sign In
            </SubmitButton>
          </form>
        </div>
      </div>
      <img
        className="absolute top-0 h-screen w-full z-0"
        src={mountain}
        alt=""
      />
    </div>
  );
};

export default Login;