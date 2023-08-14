import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <Image
      className="object-cover"
      width={143}
      height={42}
      src="https://www.routeasy.com.br/images/logos/routeasy.svg"
      alt="logo"
    />
  );
}

export default Logo;
