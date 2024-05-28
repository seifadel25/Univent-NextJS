import Image from "next/image";
import React from "react";

const Clients = [
  {
    title: "Arab Contracting- Osman Ahmed Osman & CO",
    logo: "/images/Clients/Clients/ArabContractors1.png",
  },
  {
    title: "Armed Forces Engineering Authority",
    logo: "/images/Clients/Clients/ArmedForces 1.png",
  },
  {
    title: "Unionaire",
    logo: "/images/Clients/Clients/Unionaire 1.png",
  },
  {
    title: "Carrier",
    logo: "/images/Clients/Clients/Carrier 1.png",
  },
  {
    title: "Travco Group",
    logo: "/images/Clients/Clients/Travco 1.png",
  },
  {
    title: "EgyptAir",
    logo: "/images/Clients/Clients/EgyptAir 1.png",
  },
  {
    title: "National Bank of Egypt",
    logo: "/images/Clients/Clients/NationalBank 1.png",
  },
  {
    title: "Detac Co",
    logo: "/images/Clients/Clients/Detac 1.png",
  },
  {
    title: "Consukorra Co",
    logo: "/images/Clients/Clients/Consukkora 1.png",
  },
  {
    title: "Volta Egypt",
    logo: "/images/Clients/Clients/Volta 1.png",
  },
  {
    title: "Americana Group",
    logo: "/images/Clients/Clients/Americana 1.png",
  },
  {
    title: "Tiba El Manzalawi Group",
    logo: "/images/Clients/Clients/Tiba 1.png",
  },
  {
    title: "ElSewedy Electric",
    logo: "/images/Clients/Clients/ElSweedy 1.png",
  },
  {
    title: "Jidaar Construction",
    logo: "/images/Clients/Clients/Jidaar 1.png",
  },
  {
    title: "PetroJet",
    logo: "/images/Clients/Clients/Petrojet 1.png",
  },
  {
    title: "Samsung",
    logo: "/images/Clients/Clients/Samsung 1.png",
  },
  {
    title: "TBS",
    logo: "/images/Clients/Clients/TBS 1.png",
  },
];

const ClientCards = ({ title, logo }) => {
  return (
    <div className="col-span-12 mx-auto w-[70dvw] rounded-lg bg-white p-4 shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-black hover:dark:shadow-white dark:shadow-xl sm:col-span-12 md:col-span-6 md:w-[40dvw] lg:col-span-3 lg:w-[20dvw]">
      <div className="flex justify-center ">
        <Image width={250} height={275} src={logo} alt={title} className="" />
      </div>
      <h1 className="mt-2 text-black text-center text-2xl font-semibold">{title}</h1>
    </div>
  );
};

function Page() {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url('/images/Clients/H1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="-mt-36 rounded-xl bg-gray-100/60 px-6 py-4 text-center text-5xl font-bold dark:bg-[#262629]/70">
          Our Clients
        </h1>
      </div>
      <div className="-mt-32 ">
        <div className="grid grid-cols-12 gap-4 bg-gray-100/40 dark:bg-[#40414f]/20 p-6 md:gap-10 lg:gap-20 ">
          {Clients.map((client, index) => (
            <ClientCards key={index} title={client.title} logo={client.logo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
