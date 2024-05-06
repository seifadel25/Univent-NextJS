"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import myLogo from "../../public/images/Logo1.png";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";

export default function navbar() {
  return (
    <Navbar className="py-2  dark:bg-slate-700/40">
      <NavbarBrand>
        <Link href="/">
          <Image src={myLogo} alt="Univent" width={100} height={100} />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className=" text-text-light dark:text-text-dark "
            aria-current="page"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className=" text-text-light dark:text-text-dark "
            href="/products"
          >
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" text-text-light dark:text-text-dark " href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className=" text-text-light dark:text-text-dark " href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="overflow-hidden">
          <Button
            as={Link}
            href="#"
            variant="flat"
            className="text-white dark:bg-primary-dark bg-primary-light overflow-hidden"
          >
            Contact Us
          </Button>
        </NavbarItem>
        <NavbarItem>
          <DarkModeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
