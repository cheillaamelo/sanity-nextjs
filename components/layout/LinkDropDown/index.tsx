"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./../../elements/Icon";

import S from "./styles.module.css";
import { LinkExternal } from "./../../elements/LinkExternal/LinkExternal";

interface Props {
  label: string;
  sub_items: {
    label: string;
    href: string;
  }[];
  isActive: boolean;
  isLast: boolean;
}

export const LinkDropDown = ({ label, sub_items, isActive, isLast }: Props) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const pathname = usePathname();

  const getClassName = () => {
    return `hover:text-primary-200 text-primary-200 transition-all ${
      isActive ? "text-primary-200" : "text-white"
    }
    ${!isLast && "mr-8"}`;
  };

  return (
    <div className="relative">
      <button
        className={`${
          S.LinkDropDown
        } flex items-center whitespace-nowrap ${getClassName()}`}
        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
      >
        {label}
        <span
          className={`ml-2 transition-all ${
            isOpenDropDown ? "rotate-0" : "rotate-180"
          }`}
        >
          <Icon
            name="MdKeyboardArrowUp"
            color={isActive ? "#32aa82" : undefined}
          />
        </span>
      </button>
      <div
        className={`overflow-hidden z-20 transition-all absolute -bottom-2 left-0 translate-y-full rounded-lg opacity-100 bg-grayscale-500 ${
          !isOpenDropDown && "h-0 opacity-0"
        }`}
      >
        {sub_items.map((sub_item) =>
          sub_item.href.startsWith("http") ? (
            <LinkExternal
              href={sub_item.href}
              key={sub_item.label}
              className="block whitespace-nowrap pl-5 py-2 hover:pl-6 transition-all w-40 hover:bg-grayscale-400"
            >
              {sub_item.label}
            </LinkExternal>
          ) : (
            <Link
              key={sub_item.label}
              href={sub_item.href}
              className="block whitespace-nowrap pl-5 py-2 hover:pl-6 transition-all w-40 hover:bg-grayscale-400"
            >
              {sub_item.label}
            </Link>
          )
        )}
      </div>
      <div
        className={`w-full h-screen top-0 left-0 z-10 ${
          isOpenDropDown ? "fixed" : "hidden"
        }`}
        onClick={() => setIsOpenDropDown(false)}
      />
    </div>
  );
};

interface LinkDropDownMobileProps extends Omit<Props, "isLast" | "isActive"> {
  isOpen: boolean;
  setIsOpen: (value: string) => void;
}

export const LinkDropDownMobile = ({
  label,
  sub_items,
  isOpen,
  setIsOpen,
}: LinkDropDownMobileProps) => {
  // const [openSubMenu, setOpenSubMenu] = useState(false)

  const pathname = usePathname();

  /*   useEffect(() => {
    setOpenSubMenu(false)
  }, [pathname]) */

  const getClassName = () => {
    return `font-semibold mb-6 text-lg uppercase hover:text-primary-200 transition-all `;
  };

  return (
    <div className={`${getClassName()}`}>
      <button
        className={`${
          S.LinkDropDown
        } flex h-14 pl-4 items-center w-full border-l-2 justify-between hover:text-primary ${
          sub_items.some((sub_item) => pathname === sub_item.href)
            ? "border-primary"
            : "border-transparent"
        }`}
        onClick={() => setIsOpen(label)}
      >
        <p className="uppercase">{label}</p>{" "}
        <span
          className={`transition-all ${isOpen ? "rotate-0" : "rotate-180"}`}
        >
          <Icon
            name="MdKeyboardArrowUp"
            color="white"
            // color={isActive && '#32aa82'}
          />
        </span>
      </button>
      <div
        className={`flex flex-col overflow-hidden ${isOpen ? "h-auto" : "h-0"}`}
      >
        {sub_items.map((sub_item) => (
          <Link
            key={sub_item.label}
            href={sub_item.href}
            className={`hover:text-primary h-14 ml-4 pl-6 flex items-center border-l-2 ${
              pathname === sub_item.href
                ? "border-primary"
                : "border-transparent"
            }`}
          >
            {sub_item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};
