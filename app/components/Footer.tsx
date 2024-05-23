import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-row flex-wrap bg-white px-4 pb-14 pt-8 text-text-light dark:bg-slate-950 dark:text-text-dark">
      <div className="hidden w-full flex-wrap items-center justify-center md:flex">
        <div className=" flex w-4/12 flex-col items-center justify-center">
          <h3 className="pb-10 text-2xl font-bold">About Us</h3>
          <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            in nam, nobis nihil facilis fugiat sapiente hic ipsam cupiditate
            harum.
          </p>
        </div>
        <div className="flex w-3/12 flex-col items-center justify-center">
          <h3 className="pb-10 text-2xl font-bold">Quick Links</h3>
          <div className="text-base font-bold text-gray-600 dark:text-gray-400">
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
          </div>
        </div>
        {/* <div className="flex w-1/6 flex-col">
          <h3 >Our Links</h3>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div> */}
        <div className="flex w-5/12 flex-col items-center justify-center">
          <h3 className="pb-10 text-2xl font-bold">Contact Us</h3>
          <span className="text-base font-bold text-gray-600 dark:text-gray-400">
            <span>Phone : </span> <span>01006063909</span>
            <span> | 01090054330</span>
          </span>
          <span className="text-base font-bold text-gray-600 dark:text-gray-400">
            <span>Email : </span> <span> ehab@univent.com.eg</span>
          </span>
          <span className="text-base font-bold text-gray-600 dark:text-gray-400">
            <span>Address : </span>
            <span>337 ElSudan st , Ahmed Orabi - ElMohandseen - Giza</span>
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Image src={"/images/myLogo.png"} width={200} height={200} alt="Logo" />
      </div>
      <div className="flex w-full items-center justify-center">
        <p> Copyright &copy; 2024 Univent</p>
      </div>
    </div>
  );
}
