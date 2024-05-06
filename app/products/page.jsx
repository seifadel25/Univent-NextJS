import Image from "next/image";
import { HeroParallax } from "../components/heroParallax";
import product1 from "../../public/images/Hero/jpeg-optimizer_20 (2).png";
import product2 from "../../public/images/Hero/jpeg-optimizer_5.png";
import product3 from "../../public/images/Hero/jpeg-optimizer_fan 7.png";
import product4 from "../../public/images/Hero/jpeg-optimizer_kl.jpg";

export default function Products() {
  return (
    <div className="">
      <HeroParallax
        products={[
          {
            title: "Product 1",
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
        ]}
      />
    </div>
  );
}
