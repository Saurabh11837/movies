// app/card/page.js
import React from "react";
import CardInfoPage from "./components/CardInfoPage";

const CardPage = () => {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Movies Page</h1>
      <CardInfoPage /> {/* yaha tum list of cards dikha rahe ho */}
    </div>
  );
};

export default CardPage;
