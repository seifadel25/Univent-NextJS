import Image from "next/image";
import React from "react";
import Link from "next/link";
import { HeroParallax } from "../components/heroParallax";
import product1 from "../../public/images/Hero/jpeg-optimizer_20 (2).png";
import product2 from "../../public/images/Hero/jpeg-optimizer_5.png";
import product3 from "../../public/images/Hero/jpeg-optimizer_fan 7.png";
import product4 from "../../public/images/Hero/jpeg-optimizer_kl.jpg";
const products = [
  {
    title: "Product 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "/product/1",
    thumbnail: product1,
  },
  {
    title: "Product 2",
    link: "/product/2",
    thumbnail: product2,
  },
  {
    title: "Product 3",
    link: "/product/3",
    thumbnail: product3,
  },
  {
    title: "Product 4",
    link: "/product/4",
    thumbnail: product4,
  },
  {
    title: "Product 5",
    link: "/product/5",
    thumbnail: product1,
  },
  {
    title: "Product 6",
    link: "/product/6",
    thumbnail: product2,
  },
  {
    title: "Product 7",
    link: "/product/7",
    thumbnail: product3,
  },
  {
    title: "Product 8",
    link: "/product/8",
    thumbnail: product4,
  },
  {
    title: "Product 9",
    link: "/product/9",
    thumbnail: product1,
  },
  {
    title: "Product 10",
    link: "/product/10",
    thumbnail: product2,
  },
];
export default function Products() {
  return (
    <div className="">
      <div>
        <HeroParallax products={products} />
      </div>
      <div className="pt-14 font-semibold dark:bg-[#40414f]/40">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl">
          Our Products
        </h2>
        <div className="pt-14">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex w-3/12 flex-col rounded-xl bg-white shadow-lg "
              >
                <Link href={product.link}>
                  <div className="overflow-hidden ">
                    <Image
                      src={product.thumbnail}
                      alt={product.title}
                      className="rounded-t-lg h-64"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl text-text-light font-semibold">{product.title}</h3>
                    <p className="text-gray-600">
                      {product.description || "No description available"}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
