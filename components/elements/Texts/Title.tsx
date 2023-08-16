import { CSSProperties, ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

interface Props {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  ref?: any;
}

export const Title = ({
  children,
  className = "",
  as: Element = "h1",
  style,
  ref,
}: Props) => {
  const getClassName = () => `${poppins.className} uppercase ${className}`;

  return (
    <Element className={`${getClassName()}`} style={style} ref={ref}>
      {children}
    </Element>
  );
};
