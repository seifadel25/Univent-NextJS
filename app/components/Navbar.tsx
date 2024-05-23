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
    <Navbar className="py-2  dark:bg-slate-700/40">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image src={myLogo} alt="Univent" width={150} height={100} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
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
            href="#"
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
      <NavbarContent justify="end">
        <NavbarItem className="overflow-hidden rounded-lg ">
          <Button
            as={Link}
            href="/contact"
            variant="flat"
            className="text-white w-[40%] dark:bg-primary-dark bg-primary-light overflow-hidden rounded-lg "
          >
            Contact Us
          </Button>
        </NavbarItem>
        <NavbarItem>
          <DarkModeToggle />
        </NavbarItem>
      </NavbarContent>
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
            href="/products"
          >
            Clients
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="py-2 text-xl text-text-light dark:text-text-dark"
            href="/products"
          >
            About us
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
