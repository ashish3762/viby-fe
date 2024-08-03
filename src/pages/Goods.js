import React, { useState, useEffect } from "react";
import Header from "../sections/Header";
import ProductCard from "../sections/ProductCard";
import { getGoods } from "../api/ApiService";

export default function Goods() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    const fetchGoods = async () => {
      const data = await getGoods();
      if (data && data.goods != null) {
        setGoods(data.goods);
      }
    };

    fetchGoods();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="mx-40">
        <div className="text-3xl mb-4 mt-10 mb-5">GOODS</div>
      </div>
      <div className="grid grid-cols-4 gap-10 mx-40">
        {goods?.map((good) => {
          return <ProductCard product={good}></ProductCard>;
        })}
      </div>
    </div>
  );
}
