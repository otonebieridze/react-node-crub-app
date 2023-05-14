import { useForm } from "react-hook-form";

function Hero() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[80%] min-h-[240px] border-b m-auto"
    >
      <div className="w-full h-40 flex flex-wrap justify-between mt-5">
        <div className="w-[calc(50%-20px)] flex flex-col">
          <label className="text-white">Name</label>
          <input
            {...register("name", {
              required: true,
              minLength: 2,
              pattern: /^[^\d]+$/i,
            })}
            className="w-[100%] h-8 bg-white p-3 outline-none"
            placeholder="Enter Name"
          />

          {errors.name && errors.name.type === "required" && (
            <span role="alert" className="text-red-500">
              This is required
            </span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span role="alert" className="text-red-500">
              Min length should be 2
            </span>
          )}
          {errors.name && errors.name.type === "pattern" && (
            <span role="alert" className="text-red-500">
              Digits are not allowed
            </span>
          )}
        </div>
        <div className="w-[calc(50%-20px)] flex flex-col">
          <label className="text-white">Age</label>
          <input
            type="number"
            {...register("age", { required: true, min: 18 })}
            className="w-[100%] h-8 bg-white p-3 outline-none"
            placeholder="Enter Age"
          />

          {errors.age && errors.age.type === "required" && (
            <span role="alert" className="text-red-500">
              This is required
            </span>
          )}
          {errors.age && errors.age.type === "min" && (
            <span role="alert" className="text-red-500">
              Age must be at least 18
            </span>
          )}
        </div>
        <div className="w-[calc(50%-20px)] flex flex-col">
          <label className="text-white">Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className="w-[100%] h-8 bg-white p-3 outline-none"
            placeholder="Enter Email"
          />

          {errors.email && errors.email.type === "required" && (
            <span role="alert" className="text-red-500">
              This is required
            </span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span role="alert" className="text-red-500">
              Enter valid email
            </span>
          )}
        </div>

        <div className="w-[calc(50%-20px)] flex flex-col">
          <label className="text-white">Gender</label>
          <select
            {...register("gender", { required: true })}
            defaultValue=""
            className="w-[100%] h-8 bg-white pl-3 outline-none"
          >
            <option value="male" className="bg-white">
              male
            </option>
            <option value="female" className="bg-white">
              female
            </option>
          </select>

          {errors.gender && errors.gender.type === "required" && (
            <span role="alert" className="text-red-500">
              This is required
            </span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-28 h-9 rounded-lg bg-green-800 text-white mt-16 mb-10"
      >
        Add Data
      </button>
    </form>
  );
}

export default Hero;
