import anime from "../../images/anime.jpg";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const UserIcon = () => {
  return (
    <div className="p-7 flex items-center justify-center  rounded-badge hover:scale-110 duration-200">
      <img src={anime} className="w-32 h-32 rounded-full border-2 border-white" />
      <div className="ml-5 font-[Poppins]">
        <h2 className="text-3xl font-[Poppins-bold]">JustJoshin</h2>
        <p className="text-lg">Joshua Smith</p>
        <div className="flex gap-5 mt-2 items-center">
          <button className="btn bg-transparent border-none text-xl">LogOut</button>
          <ThemeSwitcher/>
        </div>
      </div>
    </div>
  );
};

export default UserIcon;
