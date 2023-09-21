import Image from "next/image";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";

const Main: React.FC = () => {
  const googleLogoImage: string =
    "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

  return (
    <div className="items-center flex flex-col mt-28">
      <div>
        <Image
          src={googleLogoImage}
          alt="google_logo"
          height={270}
          width={270}
        />
      </div>

      <form className="flex border mt-7 px-5 rounded-full w-2/5 items-center">
        <AiOutlineSearch className="text-xl cursor-pointer text-slate-400" />

        <input
          type="text"
          placeholder="searching"
          className="w-full focus:outline-none ml-4"
        />

        <BsFillMicFill className="text-3xl cursor-pointer text-slate-400 mr-5" />

        <BiMicrophone className="text-3xl cursor-pointer text-slate-400 mr-5" />

        <AiFillCamera className="text-3xl cursor-pointer text-slate-400" />
      </form>

      <div className="mt-7">
        <button className="bg-slate-100 mr-3 py-2 px-4 text-sm rounded hover:border">
          Google Search
        </button>

        <button className="bg-slate-100 py-2 px-4 text-sm  rounded hover:border">
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default Main;
