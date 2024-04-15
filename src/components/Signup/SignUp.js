import { useFormAndValidation } from "../../hooks/useFormAndValidation";
import logo from "../../images/logo.png";
import SignupImage from "../../images/signupImage.webp";
import ProfileIcon from "../../images/user.svg";
import EmailIcon from "../../images/envelope.svg";
import PasswordIcon from "../../images/lock.svg";
import UserNameIcon from "../../images/user-laptop.svg";
import TotalIncomeIcon from "../../images/wallet-2.svg";
import Avatar from "../../images/avatar.svg";
import { signup } from "../../utils/auth";
import { useState } from "react";

const SignupPage = () => {
  const [formStep, setFormStep] = useState(1);
  const {
    values,
    handleChange,
    resetForm,
    resetFile,
    setResetFile,
    isValid,
    errors,
  } = useFormAndValidation();
  const fileInputKey = resetFile ? "reset" : "not-reset";

  const handleFirstSubmit = (e) => {
    e.preventDefault();
    setFormStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      window.alert("invalid data");
      return;
    }

    const SignUpData = {
      name: values.name,
      email: values.email,
      password: values.password,
      userName: values.userName,
      avatar: values.avatar,
      totalIncome: values.totalIncome,
    };

    try {
      // Use the signup function instead of fetch
      await signup(SignUpData)
        .then((data) => {
          console.log("Signup successful:", data);
          // Perform any actions upon successful signup here, e.g., redirect or state update
          resetForm(); // Reset the form on successful signup
        })
        .catch((error) => {
          // Handle any errors that occurred during the signup
          console.error("Signup failed:", error.message);
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
        <div className="flex flex-col items-center justify-center bg-slate-500 gap-4 w-1/2">
          <img src={logo} className="w-32 h-32" />
          <h2 className="font-[Poppins-bold] text-4xl">Register</h2>
          <p className="px-10 text-sm font-semibold font-[Poppins] ">
            Shine a Light on Your Spending - Navigate Your Finances with
            Precision.
          </p>
          <form onSubmit={handleSubmit} className="w-[500px]  p-8">
            {formStep === 1 && (
              <div className="">
                <label className="input input-bordered flex items-center gap-2 mb-2">
                  <img src={ProfileIcon} className="w-5 " />
                  <input
                    type="text"
                    name="name"
                    minLength="3"
                    maxLength="20"
                    required
                    value={values.name || ""}
                    className="grow"
                    onChange={handleChange}
                    placeholder="Name"
                  />
                </label>
                {errors.name && (
                  <div className="m-1 text-white">{errors.name}</div>
                )}
                <label className="input input-bordered flex items-center gap-2 mb-2">
                  <img src={EmailIcon} />
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
                  <img src={PasswordIcon} className="w-5" />
                  <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
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
              </div>
            )}
            {formStep === 2 && (
              <div className="">
                <label className="input input-bordered flex items-center gap-2 mb-2">
                  <img src={UserNameIcon} className="w-5" />
                  <input
                    type="text"
                    name="userName"
                    minLength="3"
                    maxLength="20"
                    required
                    value={values.userName || ""}
                    className="grow"
                    onChange={handleChange}
                    placeholder="UserName"
                  />
                </label>
                {errors.userName && (
                  <div className="m-1 text-white">{errors.userName}</div>
                )}
                <label className="input input-bordered flex items-center gap-2 mb-2">
                  <img src={Avatar} className="w-5" />
                  <input
                    key={fileInputKey}
                    type="file"
                    name="avatar"
                    required
                    accept="image/"
                    className="grow"
                    onChange={handleChange}
                    placeholder="Avatar Image url"
                  />
                </label>
                {errors.avatar && (
                  <div className="m-1 text-white">{errors.avatar}</div>
                )}
                <label className="input input-bordered flex items-center gap-1">
                  <img src={TotalIncomeIcon} className="w-5" />
                  <input
                    type="number"
                    name="totalIncome"
                    onChange={handleChange}
                    value={values.totalIncome}
                    required
                    className="grow"
                    placeholder="Total Income"
                  />
                </label>
                {errors.totalIncome && (
                  <div className="m-1 text-white">{errors.totalIncome}</div>
                )}
                <div className="flex justify-end mr-3">
                  <button
                    className="pt-3 font-[Poppin] font-bold text-lg"
                    onClick={() => {
                      setFormStep(1);
                    }}
                  >
                    back
                  </button>
                </div>
              </div>
            )}

            <div className="pt-5 flex justify-evenly items-center">
              {formStep === 1 && (
                <button
                  className="btn font-[Poppins]"
                  onClick={handleFirstSubmit}
                >
                  Next
                </button>
              )}
              {formStep === 2 && (
                <button className="btn font-[Poppins]" onClick={handleSubmit}>
                  Register
                </button>
              )}

              <span className="text-white font-bold text-lg">or</span>
              <button className="btn font-[Poppins]">Login</button>
            </div>
          </form>
        </div>
        <div className="rounded w-1/2">
          <img src={SignupImage} alt="sign up page image" />
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
