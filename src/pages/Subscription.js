import React, { useState, useEffect } from "react";
import Header from "../sections/Header";
import { getSubscriptions } from "../api/ApiService";
import ProductCard from "../sections/ProductCard";

export default function Subscription() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const data = await getSubscriptions();
      if (data && data.subscriptions != null) {
        setSubscriptions(data.subscriptions);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="h-screen">
      <Header></Header>
      <div className="flex" style={{ height: "500px" }}>
        <div className="p-10 w-2/4 flex items-center justify-center">
          <div className="w-3/5">
            <div className="text-5xl mb-4">
              SUBSCRIBE TO EXTRAORDINARY MORNINGS
            </div>
            <div className="mb-4">
              Experience the all-new Verve subscription.
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <div
            className="h-full"
            style={{
              backgroundImage:
                "url(//www.vervecoffee.com/cdn/shop/files/ew_1500x.png?v=1719637287)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
      <div>
        <div className="text-3xl mb-4 text-center mt-10 mb-5">
          CHOOSE YOUR SUBSCRIPTION
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 mx-40">
        {subscriptions?.map((subscription) => {
          return <ProductCard product={subscription}></ProductCard>;
        })}
      </div>
    </div>
  );
}
