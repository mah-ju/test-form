import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TriangleAlert } from "lucide-react";

export const Form = ({ openModal, setFormData }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required!"),
    email: yup.string().required("Email is required!").email("Invalid email!"),
    password: yup.string().min(6, "At least 6 characters!").max(10, "Maximum of 10 characters!").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match!").required("Confirm password!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = (data) => {
    console.log(data);
    setFormData(data);
    openModal(data);
  
  };

  const handleKeyDown = (e) =>{

    if(e.key === "Enter"){
      handleSubmit(submitForm)
    
    }
  }

 
  return (
    <form
      onSubmit={handleSubmit(submitForm)} onKeyDown={handleKeyDown}
      className="bg-lime-300/60 w-[75%] lg:w-[40%] py-10 flex flex-col justify-center rounded-lg"
    >
      <h2 className="text-3xl text-center md:text-5xl pb-5 px-2 md:px-3 text-purple-950">
        Register for exclusive access
      </h2>
      <div className="flex flex-col items-center space-y-3 text-black">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="pl-1 md:w-64 md:p-1 md:placeholder:pl-0"
            {...register("name")}
          ></input>
          <div>
            {errors.name && 
              <p className="text-red-600 inline-flex items-baseline gap-1">
                <TriangleAlert className="self-center" size={15} />
                {errors.name.message}
              </p>
            }
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            className="pl-1 md:w-64 md:p-1 md:placeholder:pl-0"
            {...register("email")}
          ></input>
          <div>
            {errors.email && 
              <p className="text-red-600 inline-flex items-baseline gap-1">
                <TriangleAlert className="self-center" size={15} />
                {errors.email.message}
              </p>
            }
          </div>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="pl-1 md:w-64 md:p-1 md:placeholder:pl-0"
            {...register("password")}
          ></input>

          <div>
            {errors.password && 
              <p className="text-red-600 inline-flex items-baseline gap-1">
                <TriangleAlert className="self-center" size={15} />
                {errors.password.message}
              </p>
            }
          </div>
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            className="pl-1 md:w-64 md:p-1 md:placeholder:pl-0"
            {...register("confirmPassword")}
          ></input>
          <div>
            {errors.confirmPassword && 
              <p className="text-red-600 inline-flex items-baseline gap-1">
                <TriangleAlert className="self-center" size={15} />
                {errors.confirmPassword.message}
              </p>
            }
          </div>
        </div>
        <div className="pt-3">
          <button
            type="submit"
            className="bg-red-400 px-8 py-1  font-medium text-purple-950 rounded-lg md:text-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
