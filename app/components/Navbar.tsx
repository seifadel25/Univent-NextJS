"use client";
import React from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link, Button } from "@nextui-org/react";
import myLogo from "../../public/images/myLogo.png";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";

export default function NavbarComp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["home", "products", "Clients", "About us", "Contact us"];
  return (
    <Navbar className="dark:bg-[#40414f]/20  py-2 md:flex">
      <div className="w-full md:mr-4 md:w-3/12">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 md:hidden"
          />
          <NavbarBrand>
            <Link href="/">
              <Image src={myLogo} alt="Univent" width={150} height={100} />
            </Link>
          </NavbarBrand>
        </NavbarContent>
      </div>
      <div className="w-4/12">
        <NavbarContent className="hidden w-3/6 gap-4 md:flex" justify="center">
          <NavbarItem>
            <Link
              className=" text-text-light dark:text-text-dark md:text-sm lg:text-xl"
              aria-current="page"
              href="/"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className=" text-text-light dark:text-text-dark md:text-sm lg:text-xl"
              href="/products"
            >
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className=" text-text-light dark:text-text-dark md:text-sm lg:text-xl"
              href="/Clients"
            >
              Clients
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className=" text-text-light dark:text-text-dark md:text-sm lg:text-xl"
              href="/Certificates"
            >
              Certificates
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className=" text-text-light dark:text-text-dark md:text-sm lg:text-xl"
              href="/About"
            >
              About us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </div>
      <div className="w-full md:w-3/12">
        <NavbarContent>
          <NavbarItem className="overflow-hidden rounded-lg ">
            <Button
              as={Link}
              href="/contact"
              variant="flat"
              className="w-[10%] overflow-hidden rounded-lg bg-primary-light text-white dark:bg-primary-dark "
            >
              Contact Us
            </Button>
          </NavbarItem>
          <NavbarItem>
            <DarkModeToggle />
          </NavbarItem>
        </NavbarContent>
      </div>
      <NavbarMenu>
        <NavbarMenuItem className="">
          <Link
            className=" py-4 text-xl text-text-light dark:text-text-dark"
            href="/"
          >
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="py-2 text-xl text-text-light dark:text-text-dark"
            href="/products"
          >
            Products
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="py-2 text-xl text-text-light dark:text-text-dark"
            href="/Clients"
          >
            Clients
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="py-2 text-xl text-text-light dark:text-text-dark"
            href="/Certificates"
          >
            Certificates
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="py-2 text-xl text-text-light dark:text-text-dark"
            href="/About"
          >
            About us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
