"use client";

import { Outlet } from "react-router-dom";
import Header from "@/components/Header/Header";
//import HeaderLayout from "@/Layout/Header";
import FooterLayout from "@/Layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* <HeaderLayout /> */}
        <Outlet />
      <FooterLayout />
    </>
  );
}
