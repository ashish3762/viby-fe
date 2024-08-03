import React, { useState, useEffect } from "react";
import Header from "../sections/Header";
import { Button } from "antd";
import { getProducts } from "../api/ApiService";
import ProductCard from "../sections/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      if (data && data.products != null) {
        setProducts(data.products);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="h-screen">
      <Header></Header>
      <div className="flex" style={{ height: "500px" }}>
        <div className="p-10 w-2/4 flex items-center justify-center">
          <div className="w-3/5">
            <div className="mb-4">JAMMY & SWEET</div>
            <div className="text-3xl mb-4">ETHIOPIA IDIDO</div>
            <div className="mb-4">
              This exquisite coffee from the Yirgacheffe region showcases the
              vibrancy of Ethiopian coffees.
            </div>
            <div>
              <Button>SHOP NOW</Button>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <div
            className="h-full"
            style={{
              backgroundImage:
                "url(//www.vervecoffee.com/cdn/shop/files/JULY_24_COFFEES-037_0f422740-5717-478b-a6b3-5c8c7300eba8_1500x.jpg?v=1721147109)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div>
        <div className="text-3xl mb-4 text-center mt-10 mb-5">OUR TOP HITS</div>
      </div>
      <div className="grid grid-cols-4 gap-10 mx-40">
        {products?.map((product) => {
          return (
            <ProductCard product={product}></ProductCard>
          );
        })}
      </div>
    </div>
  );
}
