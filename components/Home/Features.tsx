import Image from "next/image";
import { MdOutlineNetworkCheck, MdCall } from "react-icons/md";

function Featr({ title, icon }: { title: string; icon: React.ReactElement }) {
  return (
    <div className="flex justify-end lg:my-44 my-10">
      <div className="w-[50%] flex items-center justify-end pr-5">{title}</div>
      <div className="w-[17%] text-2xl lg:text-5xl lg:border-4 border-foreground aspect-square rounded-full flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

function Featl({ title, icon }: { title: string; icon: React.ReactElement }) {
  return (
    <div className="flex justify-start lg:my-44 my-10">
      <div className="w-[17%] text-2xl lg:text-5xl lg:border-4 border-foreground aspect-square rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="w-[50%] flex items-center justify-start pl-5">
        {title}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="w-[100vw] lg:h-[100vh] lg:flex px-20 lg:p-0">
      <div className="flex-1 lg:mr-10 hidden lg:block">
        <Featr
          title=" Stay connected effortlessly with Maxi Data's fast and affordable data
        bundles."
          icon={<MdOutlineNetworkCheck />}
        />
        <Featr
          title=" Get discounted Airtime bundles for all networks."
          icon={<MdCall />}
        />
      </div>
      <div className="flex-1 lg:mr-10 block lg:hidden">
        <Featl
          title=" Stay connected effortlessly with Maxi Data's fast and affordable data
        bundles."
          icon={<MdOutlineNetworkCheck />}
        />
        <Featl
          title=" Get discounted Airtime bundles for all networks."
          icon={<MdCall />}
        />
      </div>
      <div className="hidden flex-1 lg:flex items-center justify-center">
        <Image
          width={500}
          height={500}
          src="/Maxi.png"
          alt="Maxi data main logo"
          className="brightness-100"
          unoptimized
        />
      </div>
      <div className="flex-1 lg:ml-5">
        <Featl
          title=" Stay connected effortlessly with Maxi Data's fast and affordable data
        bundles."
          icon={<MdOutlineNetworkCheck />}
        />
        <Featl
          title=" Stay connected effortlessly with Maxi Data's fast and affordable data
        bundles."
          icon={<MdOutlineNetworkCheck />}
        />
      </div>
    </div>
  );
}
