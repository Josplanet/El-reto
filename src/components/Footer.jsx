import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full py-[16px] px-[32px] items-center justify-between">
      <div className="flex items-center gap-[48px]">
        <img height={44} src="./Logo.png" />
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
      <div className="flex items-center gap-[32px]">
        <a href="www.twiiter.com" target="_blank" rel="">
          <img src="/media/t.png" alt="Twitter" className="cursor-pointer" />
        </a>
        <a href="www.twiiter.com" target="_blank" rel="">
          <img src="/media/i.png" alt="Twitter" className="cursor-pointer" />
        </a>
        <a href="www.twiiter.com" target="_blank" rel="">
          <img src="/media/d.png" alt="Twitter" className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
