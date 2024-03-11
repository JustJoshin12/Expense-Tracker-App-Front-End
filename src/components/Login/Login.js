import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ImageSlideshow from "../UI/imageSlideShow";
import logo from "../../images/logo.png";
import { signin } from "../../utils/auth";

const LoginPage = () => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      window.alert('invalid data');
      return};

    const loginData = {
      email: values.email,
      password: values.password,
    };

    try {
       // Use the signup function instead of fetch
    await signin(loginData)
    .then(data => {
      console.log("Login successful:", data);
      // Perform any actions upon successful signup here, e.g., redirect or state update
      resetForm(); // Reset the form on successful signup
    })
    .catch(error => {
      // Handle any errors that occurred during the signup
      console.error("Login failed:", error.message);
      // You might want to update the UI to reflect the error to the user
    });
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Login failed:", error.message);
      // You might want to update the UI to reflect the error to the user
    }
  };

  return (
    <div className="pt-40 bg-blue-400 h-screen">
      <div className="flex w-[1200px] h-[600px] justify-center border mx-auto rounded-badge overflow-hidden">
        <div className="flex flex-col items-center justify-center bg-slate-500 gap-4 w-1/2">
          <img src={logo} className="w-32 h-32" />
          <h2 className="font-[Poppins-bold] text-4xl">Login</h2>
          <p className="px-10 text-sm font-semibold font-[Poppins] ">
            Shine a Light on Your Spending - Navigate Your Finances with
            Precision.
          </p>
          <form onSubmit={handleSubmit} className="w-[500px]  p-8">
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                name="email"
                required
                value={values.email || ""}
                className="grow"
                onChange={handleChange}
                placeholder="Email"
              />
            </label>
            {errors.email && (
              <div className="m-1 text-white">{errors.email}</div>
            )}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                name="password"
                minLength="4"
                onChange={handleChange}
                value={values.password}
                required
                className="grow"
                placeholder="Password"
              />
            </label>
            {errors.password && (
              <div className="m-1 text-white">{errors.password}</div>
            )}
            <div className="pt-5 flex justify-evenly">
              <button className="btn" onClick={handleSubmit}>
                Login
              </button>
              <button className="btn">Register</button>
            </div>
          </form>
        </div>
        <div className="rounded w-1/2">
          <ImageSlideshow />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
