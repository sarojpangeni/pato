import React from "react";

const menu = [
  {
    category: "Starters",
    items: [
      { name: "Pine Nut Sbrisalona", description: "Sed fermentum eros vitae eros", price: "$29.79" },
      { name: "Aenean Eu", description: "Feugiat maximus neque pharetra", price: "$19.35" },
      { name: "Sed Feugiat", description: "Proin lacinia nisl ut ultricies posuere nulla", price: "$12.19" },
      { name: "Consectetur", description: "Etiam cursus facilisis tortor", price: "$21.89" },
    ],
  },
  {
      category: "Drinks",
      items: [
          { name: "Vivamus Pretium", description: "Sed fermentum eros vitae eros", price: "$29.79" },
          { name: "Duis Praesent Ligula", description: "Feugiat maximus neque pharetra", price: "$19.35" },
          { name: "In Eu Dolor", description: "Sed fermentum eros vitae eros", price: "$53.34" },
          { name: "Feugiat Maximus", description: "Sed fermentum eros vitae eros", price: "$62.45" },
        ],
    },
    {
      category: "Main",
      items: [
        { name: "Duis Sed Aliquet", description: "Proin lacinia nisl ut ultricies posuere nulla", price: "$31.18" },
        { name: "Suspendisse", description: "Feugiat maximus neque pharetra", price: "$70.25" },
        { name: "Scelerisque Sed", description: "Etiam cursus facilisis tortor", price: "$36.19" },
        { name: "Mollis Nulla", description: "Proin lacinia nisl ut ultricies posuere nulla", price: "$19.50" },
        { name: "Convallis Augue", description: "Sed fermentum eros vitae eros", price: "$29.15" },
      ],
    },
  {
    category: "Dessert",
    items: [
      { name: "Tempus Aliquet", description: "Proin lacinia nisl ut ultricies posuere nulla", price: "$9.79" },
      { name: "Scelerisque", description: "Feugiat maximus neque pharetra", price: "$19.35" },
      { name: "Cras Maximus", description: "Duis pharetra ligula at urna dignissim", price: "$5.79" },
    ],
  },
];

const List = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 p-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {menu.map((section) => (
          <div key={section.category}
          className="pl-10">
            <h2 className="text-2xl font-bold uppercase text-gray-700 mb-4">
              {section.category}
            </h2>
            {section.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-gray-300 py-2"
              >
                <div >
                  <p className=" text-gray-800 text-xl">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <p className="font-semibold text-gray-700">{item.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
