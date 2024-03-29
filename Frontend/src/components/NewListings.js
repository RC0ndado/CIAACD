import React from "react";
import house1 from "../assets/house1.jpg";
import houses from "../assets/houses.png";
import CardComponent from "./CardComponent";

const NewListings = () => {
  const cards = [
    { id: 1, photo: house1, price: "$236,910" },
    { id: 2, photo: houses, price: "$346,410" },
    { id: 3, photo: house1, price: "$800,910" },
    { id: 4, photo: houses, price: "$196,910" },
    { id: 1, photo: house1, price: "$236,910" },
    { id: 2, photo: houses, price: "$346,410" },
    { id: 3, photo: house1, price: "$800,910" },
    { id: 4, photo: houses, price: "$196,910" },
  ];

  return (
    <div className="mx-8 overflow-hidden">
      {/* Title */}
      <div className="mt-10">
        <p className="text-[18.5px] font-medium">
          Nuevas propiedades en Spokeane, WA (Los precios que se muestran son en dólares estadounidenses)
        </p>
        <p className="text-blue-600 text-[15px]">Ver todas las 160 nuevas propiedades</p>
      </div>
      {/* Listings */}
      <div className="flex pt-4 space-x-6 w-full overflow-x-scroll pb-4 mb-20">
        {cards.map((card) => (
          <CardComponent key={card.id} photo={card.photo} price={card.price} />
        ))}
      </div>
    </div>
  );
};

export default NewListings;
