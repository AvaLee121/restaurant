import Image from "next/image";
import React from "react";
import { singleProduct } from "@/data";
import Price from "@/components/Price";

const SingleProduct = () => {
  return (
    <div className="w-screen md:h-screen flex flex-col justify-around p-4 md:flex-row md:p-16 md:gap-4 md:justify-center lg:px-40 xl:px-80 text-red-500 relative">
      {/* img container */}
      {singleProduct.img && (
        <div className="flex w-full h-[50vh] md:h-[70%] md:justify-center relative">
          <Image
            src={singleProduct.img}
            alt={""}
            fill
            className="object-contain"
          />
        </div>
      )}
      {/* text container */}
      <div className="flex flex-col md:h-[70%] p-4 gap-4  md:justify-center relative">
        <h1 className="text-xl md:text-2xl xl:text-3xl font-bold uppercase">{singleProduct.title}</h1>
        <p className="md:text-sm xl:text-lg">{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} />
      </div>
    </div>
  );
};

export default SingleProduct;
