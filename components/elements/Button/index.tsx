import { ButtonBase, IButtonBase } from "./ButtonBase";

export const ButtonPrimary = ({
  children,
  onClick,
  href,
  type,
  id,
}: Omit<IButtonBase, "className">) => {
  return (
    <ButtonBase
      className="bg-primary-100 text-white text-sm h-12 flex justify-center w-full rounded items-center"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  );
};

export const ButtonSecondary = ({
  children,
  onClick,
  href,
  type,
  id,
}: Omit<IButtonBase, "className">) => {
  return (
    <ButtonBase
      className="bg-transparent border-2 border-primary-100 text-primary-100 h-12 flex justify-center w-full rounded items-center hover:bg-primary-100 hover:text-white transition-all"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  );
};

export const ButtonWhite = ({
  children,
  onClick,
  href,
  type,
  id,
}: Omit<IButtonBase, "className">) => {
  return (
    <ButtonBase
      className="rounded px-8 bg-[#EDEDED] text-grayscale-[#444B55] h-12 text-sm flex items-center justify-center mx-auto font-medium"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  );
};

export const ButtonRed = ({
  children,
  onClick,
  href,
  type,
  id,
}: Omit<IButtonBase, "className">) => {
  return (
    <ButtonBase
      className="bg-redscale-50 text-white text-sm h-12 flex justify-center w-full rounded items-center"
      onClick={onClick}
      href={href}
      type={type}
      id={id}
    >
      {children}
    </ButtonBase>
  );
};
