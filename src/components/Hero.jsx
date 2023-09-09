import Button from "./Button";

const Hero = () => {
  return (
    <div className=" w-full h-[680px] pt-[80px] pl-[80px]">
      <div className="w-[552px] flex flex-start flex-col justify-center gap-[32px]">
        <h1 className=" text-on-surface uppercase text-[88px]">
          LOREM IPSUM dolor sit amet
        </h1>
        <p className="text-on-surface text-[16px] ">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
        <div className="flex flex-start gap-[24px]">
          <Button variant="primary1">Shop</Button>
          <Button variant="secondary1">Explore</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
