import React from "react";

const Apistore = () => {
  const categories = [
    {
      id: 1,
      title: "Revamp your home in style",
      a: "/explore-home",
      items: [
        {
          id: 1,
          name: "Cushion covers",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Figurines",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Home storage",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          name: "Lighting solutions",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 2,
      title: "Appliances for your home | Up to 55% off",
      a: "/see-more",
      items: [
        {
          id: 1,
          name: "Air conditioners",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          name: "Refrigerators",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          name: "Microwaves",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 4,
          name: "Washing machines",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
    {
      id: 3,
      title: "Starting ₹149 | Headphones",
      a: "/offers",
      items: [
        { id: 1, name: "boAt", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Boult", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Noise", image: "https://via.placeholder.com/150" },
        {
          id: 4,
          name: "Zebronics",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
  ];

  // export async function GET() {
  //   return Response.json(categories);
  // }

  return <div>Apistore</div>;
};

export default Apistore;
