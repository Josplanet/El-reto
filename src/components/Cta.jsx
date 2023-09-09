import Button from "./Button";

const Cta = () => {
  return (
    <div
      style={{
        background: "linear-gradient(266deg, #C2FF5F -0.51%, #00FFF5 155.63%)",
        width: "1440px",
        padding: "64px",
      }}
    >
      <div className="w-[1312]  gap-[48px] flex flex-col items-center">
        <h4 className="text-[64px] uppercase text-gray-900 text-center">
          Tempor incididunt ut labore et dolore magna aliqua.
        </h4>
        <p>Try any of our amazing products today!</p>
        <Button variant="cta">Shop</Button>
      </div>
    </div>
  );
};

export default Cta;
