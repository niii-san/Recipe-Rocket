import { useNavigate } from "react-router-dom";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const navigate = useNavigate();
  // const year = new Date().getFullYear();

  return (
    <footer className="bg-Second h-[350px] w-full pc:w-full mt-28 ">
      <div className="h-[55%] w-full  flex justify-evenly text-white text-sm border-b ">
        <div
          id="about"
          className="w-[30%] flex items-center flex-col justify-start pt-8 "
        >
          <ul>
            <h1 className="font-bold text-xl mb-5 font-cursive ">ABOUT</h1>
            <li
              className="cursor-pointer hover:text-gray-400 hover:underline"
              onClick={() => navigate("/about")}
            >
              About Us
            </li>

            <li
              className="cursor-pointer hover:text-gray-400 hover:underline"
              onClick={() => navigate("/")}
            >
              Get Started
            </li>
            <li className="cursor-pointer hover:text-gray-400 hover:underline">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div
          id="connect"
          className=" w-[30%] flex items-center flex-col justify-start pt-8"
        >
          <h1 className="font-bold text-xl mb-5 font-cursive ">CONNECT</h1>
          <ul className="flex gap-2 flex-col ">
            <li className="flex cursor-pointer hover:text-gray-400 hover:underline">
              {" "}
              <CiFacebook className="h-5 w-5 mr-2" /> Facebook
            </li>
            <li className="flex cursor-pointer hover:text-gray-400 hover:underline">
              {" "}
              <CiLinkedin className="h-5 w-5 mr-2" /> LinkedIn
            </li>
            <li className="flex cursor-pointer hover:text-gray-400 hover:underline">
              {" "}
              <FaXTwitter className="h-5 w-5 mr-2" /> Twitter
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
