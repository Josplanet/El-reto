const Email = () => {
  return (
    <div className="p-[80px] gap-[32px] flex flex-col items-center">
      <div className=" flex flex-col gap-[16px]">
        <h5 className="text-[32px] uppercase text-on-surface text-center">
          Want to know more?
        </h5>
        <h6 className="text-on-surface text-[16px] text-center">
          Enter your email here to download our informational package
        </h6>
      </div>
      <div className="flex py-[8px] px-[16px] gap-[16px] bg-gray-700 w-[387px]">
        <input
          type="email"
          placeholder="your@email.com"
          className=" p-2 h-[35px] text-[20px] bg-gray-700 w-[400px]"
        />
        <button>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2ZM8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12Z"
              fill="#CCC"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Email;
