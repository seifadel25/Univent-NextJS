import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-row flex-wrap pb-14 pt-8 px-4 bg-white dark:bg-slate-950 text-text-light dark:text-text-dark">
      <div className="hidden md:flex w-full flex-wrap items-center justify-center">
        <div className=" flex w-2/6 flex-col justify-center items-center">
          <h3 className="text-2xl pb-10 font-bold">About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            in nam, nobis nihil facilis fugiat sapiente hic ipsam cupiditate
            harum.
          </p>
        </div>
        <div className="flex w-2/6 flex-col justify-center items-center">
          <h3 className="text-2xl pb-10 font-bold">Quick Links</h3>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
        {/* <div className="flex w-1/6 flex-col">
          <h3 >Our Links</h3>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div> */}
        <div className="flex w-2/6 flex-col justify-center items-center">
          <h3 className="text-2xl pb-10 font-bold">Contact Us</h3>
          <span>
            <p>Phone : </p> <p>01006063909</p><p>01090054330</p>
          </span>
          <p>Email : </p> <p> ehab@univent.com.eg</p>
          <p>337 Elsudan st ,ahmed orabi -mohandseen-giza</p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Image src={"/images/myLogo.png"} width={200} height={200} alt="Logo" />
      </div>
      <div className="w-full flex justify-center items-center">
        <p> Copyright &copy; 2024 Univent</p>
      </div>
    </div>
  );
}
