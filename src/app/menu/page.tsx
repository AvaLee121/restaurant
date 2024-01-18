import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuType } from "@/types/types";


const getData = async () =>{
  const res = await fetch("http://localhost:3000/api/categories", {
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed");
  }

  return res.json()
}
const MenuPage = async () => {
  const menu:MenuType = await getData();
  return (
    <div className="p-4 h-full flex flex-col md:flex-row lg:px-20 lg:my-12 xl:px-40  items-center justify-center ">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2 xl:h-2/3 "
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2` }>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button className={`hidden  md:block  bg-black text-white py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
