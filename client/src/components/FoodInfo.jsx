import React, { useState } from "react";

const foodData = [
  {
    category: "Fruits",
    items: [
      {
        name: "Apple",
        calories: 52,
        info: "Rich in fiber and vitamins. Great for digestion and heart health.",
        image:
          "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
      },
      {
        name: "Banana",
        calories: 96,
        info: "Good source of potassium. Ideal for energy and muscle function.",
        image:
          "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg",
      },
      {
        name: "Orange",
        calories: 47,
        info: "Rich in Vitamin C. Boosts immune system and skin health.",
        image:
          "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlfGVufDB8fDB8fHww",
      },
      {
        name: "Blueberries",
        calories: 57,
        info: "High in antioxidants. Supports brain health and fights inflammation.",
        image:
          "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZWJlcnJpZXN8ZW58MHx8MHx8fDA%3D",
      },
    ],
  },
  {
    category: "Vegetables",
    items: [
      {
        name: "Broccoli",
        calories: 55,
        info: "High in vitamins K and C. Supports bone health and immune function.",
        image:
          "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY29sbGl8ZW58MHx8MHx8fDA%3D",
      },
      {
        name: "Carrot",
        calories: 41,
        info: "Good for vision. Rich in beta carotene and antioxidants.",
        image:
          "https://images.pexels.com/photos/302478/pexels-photo-302478.jpeg",
      },
      {
        name: "Spinach",
        calories: 23,
        info: "Rich in iron and calcium. Promotes muscle and bone health.",
        image:
          "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Kale",
        calories: 49,
        info: "Nutrient-dense superfood. Packed with vitamins A, K, and C.",
        image:
          "https://images.unsplash.com/photo-1617101508511-65f59b6a4c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FsZXxlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    category: "Proteins",
    items: [
      {
        name: "Chicken Breast",
        calories: 165,
        info: "Lean protein source. Essential for muscle repair and growth.",
        image:
          "https://images.unsplash.com/photo-1611095973518-b7b3476ab3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2tlbiUyMGJyZWFzdHxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Salmon",
        calories: 208,
        info: "Rich in omega-3 fatty acids. Supports heart and brain health.",
        image:
          "https://images.unsplash.com/photo-1600628422010-7c29c5ee9e2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww",
      },
      {
        name: "Tofu",
        calories: 76,
        info: "Plant-based protein. Good source of calcium and iron.",
        image:
          "https://images.unsplash.com/photo-1572441711286-0e9ed4f6d6d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9mdXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        name: "Eggs",
        calories: 155,
        info: "Excellent source of protein. Contains essential amino acids.",
        image:
          "https://images.unsplash.com/photo-1576675782765-d735e21347e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
];

export const FoodInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const filteredFoodItems = selectedCategory
    ? foodData.find((category) => category.category === selectedCategory).items
    : [];

  return (
    <div className=" flex flex-col items-center p-6">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Food Information
        </h2>
        <div className="flex flex-wrap justify-center mb-6">
          {foodData.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category.category)}
              className={`px-4 py-2 m-2 rounded-full border ${
                selectedCategory === category.category
                  ? "bg-blue-500 text-white"
                  : "bg-white text-blue-500"
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
        <div>
          {selectedCategory && (
            <>
              <h3 className="text-xl font-semibold mb-4">{selectedCategory}</h3>
              <ul>
                {filteredFoodItems.map((item, idx) => (
                  <li key={idx} className="mb-4 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <span className="font-bold">{item.name}:</span>{" "}
                      {item.calories} calories - {item.info}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

