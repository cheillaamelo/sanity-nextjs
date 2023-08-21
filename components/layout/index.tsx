"use client";

import { ReactNode } from "react";

import { Header } from "@/components/layout/Header";
import Head from "@/app/head";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head />
      <div>
        <Header />
        <main /* className="pt-[124px] lg:pt-[88px]" */>{children}</main>
      </div>
    </>
  );
};
