import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="flex w-full py-[16px] px-[32px] items-center justify-between">
      <div className="flex items-center gap-[48px]">
        <Image src="/logo.png" alt="" width={70} height={44} />
        <div className="flex items-center justify-center gap-[16px]">
          <Link
            href="/"
            className=" px-[12] py-[8px] text-on-surface text-[14px]"
          >
            Home
          </Link>
          <Link
            href="/"
            className="px-[12] py-[8px] text-on-surface text-[14px]"
          >
            Products
          </Link>
          <Link
            href="/"
            className="px-[12] py-[8px] text-on-surface text-[14px]"
          >
            About
          </Link>
          <Link
            href="/"
            className="px-[12] py-[8px] text-on-surface text-[14px]"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-[24px]">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Sign up</Button>
      </div>
    </div>
  );
};

export default NavBar;
