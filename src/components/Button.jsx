const Button = ({ variant, children }) => {
  return (
    <>
      {variant === "primary" && (
        <button className=" bg-primary text-on-primary rounded-[24px] flex items-center justify-center py-[8px] px-[24px]">
          {children}
        </button>
      )}
      {variant === "secondary" && (
        <button className="bg-transparent text-primary  border-[1.5px] border-primary rounded-[24px] flex items-center justify-center py-[8px] px-[24px]">
          {children}
        </button>
      )}
      {variant === "primary1" && (
        <button className=" bg-primary text-on-primary rounded-[24px] flex items-center justify-center py-[12px] px-[40px] text-[24px]">
          {children}
        </button>
      )}
      {variant === "secondary1" && (
        <button className="bg-transparent text-primary border-[1.5px] border-primary rounded-[24px] flex items-center justify-center py-[12px] px-[40px] text-[24px]">
          {children}
        </button>
      )}
      {variant === "secondary2" && (
        <button className="bg-transparent text-primary border-[1.5px] border-primary rounded-[24px] flex items-center justify-center py-[8px] px-[24px] text-[16px] custom-font w-full">
          {children}
        </button>
      )}
      {variant === "cta" && (
        <button className=" bg-gray-900 text-on-surface rounded-[24px] flex items-center justify-center py-[12px] px-[40px] text-[20px]">
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
