import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ImageSlideshow from "../UI/imageSlideShow";
import logo from "../../images/logo.webp";

const LoginPage = () => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) return;

    const loginData = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await fetch("http://localhost:3001/signin", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData), 
      });

      if (!response.ok) {
        // If the response is not ok, throw an error with the status
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json(); 
      console.log("Login successful:", data);

      // Perform any actions upon successful login here, e.g., redirect or state update

      resetForm(); // Reset the form on successful login
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error("Login failed:", error.message);
      // You might want to update the UI to reflect the error to the user
    }
  };

  return (
    <div className="mt-32">
      <div className="flex  h-[600px] justify-center">
        <div className="flex flex-col items-center justify-center bg-blue-400">
      <img src={logo} className="w-20"/>
          <h2 className="font-[Poppins-bold] text-4xl">Login</h2>
          <p className="px-10 text-sm font-[Poppins] my-3">Shine a Light on Your Spending - Navigate Your Finances with Precision.</p>
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
                placeholder="password"
              />
            </label>
            {errors.password && (
              <div className="m-1 text-error">{errors.password}</div>
            )}
            <div className="pt-5 flex justify-evenly">
              <button className="btn" onClick={handleSubmit}>
                Login
              </button>
              <button className="btn">Register</button>
            </div>
          </form>
        </div>
        <div className="rounded">
          <ImageSlideshow />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
