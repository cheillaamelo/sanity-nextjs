"use client";

import { ButtonSecondary } from "../../elements/Button";
import Icon from "../../elements/Icon";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import routes from "../Header/routes";
import { usePathname } from "next/navigation";
import { LinkDropDownMobile } from "../../layout/LinkDropDown";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavigationMobile = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();
  const [dropDownIsOpen, setDropDownIsOpen] = useState("");

  const getClassName = (isActive: boolean) => {
    return `font-semibold pl-4 mb-6 h-14 flex items-center border-l-2 text-lg uppercase hover:text-primary-200 transition-all ${
      isActive ? "border-primary-200 text-primary-200" : "border-transparent"
    }`;
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleDropDown = (value: string) => {
    setDropDownIsOpen(() => (dropDownIsOpen === value ? "" : value));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer border-2 border-grayscale-500 w-12 h-12 flex items-center justify-center text-white"
      >
        <Icon name={isOpen ? "FiX" : "FiMenu"} size={24} />
      </button>
      <nav
        className={`fixed h-[calc(100vh-96px)] top-[96px] left-0 transition-opacity overflow-hidden ${
          isOpen ? "w-full opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className="border-t-2 border-primary bg-[#0D0E18] flex flex-col justify-between h-full w-full pt-16 px-6 pb-8">
          <div>
            {routes(`${pathname}`).map((route, index) =>
              route.href ? (
                <Link
                  key={index}
                  href={route.href}
                  className={getClassName(pathname === route.href)}
                >
                  {route.label}
                </Link>
              ) : (
                route?.sub_items?.length && (
                  <LinkDropDownMobile
                    key={index}
                    label={route.label}
                    sub_items={route.sub_items}
                    isOpen={dropDownIsOpen === route.label}
                    setIsOpen={handleDropDown}
                  />
                )
              )
            )}
          </div>

          <div className="flex items-center">
            <ButtonSecondary id="demo-header-mobile" href="/demonstracao">
              Solicite uma Demonstração
            </ButtonSecondary>
          </div>
        </div>
      </nav>
    </>
  );
};
