import Button from "./Button";

const Cards = ({ imageUrl, title }) => {
  return (
    <div className="w-[240px] bg-gray-900 rounded-lg ">
      {" "}
      {/*tarjeta entera*/}
      <img className=" rouded-t-xl w-[240px]" src={imageUrl} alt="" />{" "}
      {/*imagen*/}
      <div className="w-max p-[16px] gap-[24px] ">
        {" "}
        {/*cuerpo card*/}
        <div className=" flex flex-col gap-[16px] max-w-[200px]">
          {" "}
          {/*titulo y subtitulo*/}
          <div className="flex items-center gap-[8px]">
            {" "}
            {/*titulo*/}
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 6L11 1L1 6V16L11 21L21 16V6Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M1 6L11 11"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 21V11"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 6L11 11"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 3.5L6 8.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h3 className="text-[24px] text-on-surface">{title}</h3>
          </div>
          <p className="text-[12px] text-on-surface">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
          </p>
        </div>
      </div>
      <div className="p-[16px]">
        <Button variant="secondary2">More information</Button>
      </div>
    </div>
  );
};

export default Cards;
