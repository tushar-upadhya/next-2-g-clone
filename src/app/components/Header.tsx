import Image from "next/image";

import { TbGridDots } from "react-icons/tb";

const Header: React.FC = () => {
  const ImageUrl: string =
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80";

  return (
    <div className="flex justify-end pr-4 pt-3 space-x-4 items-center">
      <p className="hover:underline text-sm">Gmail</p>

      <p className="hover:underline text-sm">Images</p>

      <TbGridDots className="text-4xl hover:bg-gray-200 p-2 rounded-full" />

      <a href="https://tusharupadhyay.vercel.app/">
        <Image
          src={ImageUrl}
          alt="profileImage"
          width={30}
          height={30}
          className="rounded-full object-cover"
        />
      </a>
    </div>
  );
};

export default Header;
