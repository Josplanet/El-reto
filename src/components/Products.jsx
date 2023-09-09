import Card from "./Cards";

const Products = () => {
  return (
    <div className=" p-[64px]">
      <div className="gap-[12px] pb-[48px]">
        <h2 className="text-on-surface text-[32px] uppercase">
          FAVORITE PRODUCTS
        </h2>
        <p className="text-on-surface text-[16px]">
          Try any of our amazing products today and get $50 promo code!
        </p>
      </div>
      <div className="flex w-[1312px] justify-between">
        <Card imageUrl="/cards/1.png" title="PRODUCT #001" />
        <Card imageUrl="/cards/2.png" title="PRODUCT #002" />
        <Card imageUrl="/cards/3.png" title="PRODUCT #003" />
        <Card imageUrl="/cards/4.png" title="PRODUCT #004" />
      </div>
    </div>
  );
};

export default Products;
