import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import ImageSlideshow from "../UI/imageSlideShow";
import logo from "../../images/logo.png";
import EmailIcon from "../../images/envelope.svg";
import PasswordIcon from "../../images/lock.svg";
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
    <div className="pt-40 h-screen">
      <div className="flex w-[1200px] h-[600px] justify-center border mx-auto rounded-badge overflow-hidden">
        <div className="flex flex-col items-center justify-center gap-4 w-1/2">
          <img src={logo} className="w-32 h-32" />
          <h2 className="font-[Poppins-bold] text-4xl">Login</h2>
          <p className="px-10 text-sm font-semibold font-[Poppins] ">
            Shine a Light on Your Spending - Navigate Your Finances with
            Precision.
          </p>
          <form onSubmit={handleSubmit} className="w-[500px]  p-8">
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <img src={EmailIcon} className="w-5"/>
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
              <img src={PasswordIcon} className="w-5"/>
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
