import Image from "next/image";
import BranchMap from "../components/BranchMap";

export default function ContactPage() {
  return (
    <div className="">
      <div className="">
        <div className="relative">
          <Image
            src={"/images/Contact/ContactH.jpg"}
            width={1920}
            height={600}
            alt="Contact Header"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 -mt-7 flex items-center justify-center font-bold  text-text-light dark:text-text-dark lg:-mt-20 ">
            <h1 className="rounded-xl bg-gray-200/70 px-10 py-4 text-4xl dark:bg-gray-900/70 md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className=" sticky -mt-8 flex w-full flex-col items-center justify-center rounded-lg bg-white py-4 font-bold text-text-light dark:bg-black dark:text-text-dark lg:-mt-24">
        <h2 className="mb-10 w-full py-6 text-center text-2xl md:text-3xl lg:text-4xl">
          Send Us a Message
        </h2>
        <div className="hidden w-10/12  bg-gray-200 px-4 py-1 dark:bg-slate-950 md:flex">
          <div className="w-5/12">
            <Image
              src={"/images/Contact/Contact.jpg"}
              width={1500}
              height={1000}
              alt="Contact"
              className="sticky -mt-8 h-full w-full rounded-lg object-fill"
            />
          </div>
          <div className="w-7/12 bg-gray-200 py-10 dark:bg-slate-950">
            <form className="mx-8 w-3/4 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-light
                  focus:outline-none  focus:ring-indigo-500 dark:focus:border-primary-dark sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-light
                  focus:outline-none  focus:ring-indigo-500 dark:focus:border-primary-dark sm:text-sm"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-light
                  focus:outline-none  focus:ring-indigo-500 dark:focus:border-primary-dark sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-light focus:outline-none focus:ring-indigo-500 dark:focus:border-primary-dark sm:text-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-primary-light px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 dark:bg-primary-dark dark:hover:bg-primary-600 dark:focus:ring-primary-dark"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="relative flex w-10/12 rounded-lg ">
          {/* <div className="w-full relative blur-[2px]">
            <Image
              src={"/images/Contact/Contact.jpg"}
              width={1500}
              height={1000}
              alt="Contact"
              className="sticky -mt-8 h-full w-full object-fill"
            />
          </div> */}
          <div
            className="w-full  py-10 md:hidden "
            style={{
              backgroundImage: "url('/images/Contact/ContactM.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <form className="mx-8 w-3/4 space-y-4 bg-gray-200/80 dark:bg-slate-950/80 py-4 px-8 rounded-xl">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-light
                  focus:outline-none  focus:ring-indigo-500 dark:focus:border-primary-dark sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-light
                  focus:outline-none  focus:ring-indigo-500 dark:focus:border-primary-dark sm:text-sm"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-light
                  focus:outline-none  focus:ring-indigo-500 dark:focus:border-primary-dark sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-light focus:outline-none focus:ring-indigo-500 dark:focus:border-primary-dark sm:text-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-primary-light px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2 dark:bg-primary-dark dark:hover:bg-primary-600 dark:focus:ring-primary-dark"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col bg-gray-200 pb-14 text-text-light dark:bg-black dark:text-text-dark">
        <h2 className="w-full py-6 text-center text-2xl md:text-3xl lg:text-4xl">
          Contact Information
        </h2>
        <div className="flex flex-col gap-y-10 md:flex-row">
          <div className="flex w-full flex-col items-start justify-center  text-start font-bold  md:w-1/2 ">
            <div className="mx-8 flex flex-col items-start justify-center">
              <h3>Head Office:</h3>
              <p className="text-center">
                <span className="font-bold">Address: </span> 337 Elsudan st ,
                Ahmed Orabi-ElMohandseen, Giza
              </p>
              <br />
              <h3>Factory :</h3>
              <p className="text-center">
                <span className="font-bold">Address: </span> Abo Rawash ,
                Industrial-Zone , Beside smart village, Giza
              </p>
              <br />
              <p className="text-center">
                <span className="font-bold">Phone: </span> +20 01006063909 |
                01090054330
              </p>
              <p className="text-center">
                <span className="font-bold">Email: </span>ehab@univent.com.eg
              </p>
            </div>
          </div>
          <div className="mx-8 h-[300px] md:w-1/2">
            <BranchMap />
          </div>
        </div>
      </div>
    </div>
  );
}
