
import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (category:string) =>{
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed");
  }

  return res.json()
}

type Props = {
  params: {category:string}
}

const CategoryPage = async ({params}:Props ) => {

  const products:ProductType[] = await getData(params.category);
  return (
    <div className="flex flex-wrap md:flex-row text-red-500">
      {products.map((product) => (
        <div className="w-full p-4 h-[60vh] border-b-2 border-r-2 border-red-500 sm:w-1/2 md:w-1/3  group even:bg-fuchsia-50">
          <Link href={`/product/${product.id}`} key={product.id} className="">
          {product.img && ( 
            <div  className="relative h-[80%]">       
              <Image 
                src={product.img}
                alt={""}
                fill
                className="object-contain"
              />
            </div>   
          )}
          </Link>
          <div className="flex flex-row py-4 px-1 items-center justify-between text-red-500 xl:p-8">
            <p className="font-bold uppercase text-2xl sm:text-lg xl:text-2xl ">{product.title}</p>
            <span className="group-hover:hidden font-bold text-xl sm:text-lg xl:text-2xl">${product.price}
            </span>
            <button className="hidden group-hover:block bg-red-500 text-white sm:text-sm p-1 rounded-sm">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
