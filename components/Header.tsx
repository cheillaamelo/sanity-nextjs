import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/../public/routeasy.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Blog Routeasy</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
        >
          Inscrever-se
        </Link>
      </div>
    </header>
  );
}

export default Header;
