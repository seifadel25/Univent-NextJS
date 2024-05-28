import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row flex-wrap bg-white px-4 pb-14 pt-8 text-text-light dark:bg-[#40414f]/40 dark:text-text-dark">
      <div className="hidden w-full flex-wrap items-center justify-center md:flex">
        <div className=" flex w-4/12 flex-col items-center justify-center">
          <h3 className="pb-10 text-2xl font-bold">About Us</h3>
          <p className="text-sm font-bold text-gray-600 dark:text-gray-400">
            At Univent, we are dedicated to placing Egyptian products at the
            forefront of high-quality manufacturing. Our vision is to make
            &quot;Made in Egypt&quot; a hallmark of excellence and superior
            craftsmanship, with our products recognized and trusted worldwide.
          </p>
        </div>
        <div className="flex w-3/12 flex-col items-center justify-center">
          <h3 className="pb-10 text-2xl font-bold">Quick Links</h3>
          <div className="flex flex-col gap-y-2 text-center text-base font-bold text-gray-600 dark:text-gray-400">
            <Link href="/products">Products</Link>
            <Link href="/Clients">Clients</Link>
            <Link href="/Certificates">Certificates</Link>
            <Link href="/contact">Contact Us</Link>
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
      <Link href="/" className="flex w-full items-center justify-center">
        <Image src={"/images/myLogo.png"} width={200} height={200} alt="Logo" />
      </Link>
      <div className="flex w-full items-center justify-center gap-x-2">
        <p> Copyright &copy;2024 </p>
        <Link href="/" className=" text-blue-900 dark:text-blue-200">
          Univent
        </Link>
      </div>
    </div>
  );
}
