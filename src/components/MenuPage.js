import React, { useState } from "react";
// import { Tabs } from 'lucide-react'; // Removed
// import { cn } from "@/lib/utils"; // Removed

// Import the JSON data
import menuData from "./eden_park_menu.json"; // Ensure the path is correct

const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("cocktails");

  // Extract categories from the JSON data
  const categories = Object.keys(menuData.menu);

  // Function to render menu items
  const renderMenuItems = (items) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                Price: ₹{item.price_inr.toFixed(2)}
              </p>
              {item.description && (
                <p className="text-sm text-gray-600">{item.description}</p>
              )}
              {/* Add other item details as needed */}
            </div>
          );
        })}
      </div>
    );
  };

  // Function to render content based on the active tab, handles nested structures
  const renderContent = (categoryName) => {
    const categoryData = menuData.menu[categoryName];

    if (!categoryData) {
      return <p>No data found for this category.</p>;
    }

    if (Array.isArray(categoryData)) {
      // If it's a simple array of menu items
      return renderMenuItems(categoryData);
    } else if (categoryData.items) {
      // Check for nested 'items' array (like in 'spirits')
      return renderMenuItems(categoryData.items);
    } else {
      //For the beer section
      if (categoryName === "beer") {
        return (
          <div className="space-y-4">
            {categoryData.on_tap && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  On Tap
                </h4>
                {categoryData.on_tap.map((sizeGroup, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <h5 className="text-md font-medium text-gray-700">
                        {sizeGroup.size}
                      </h5>
                      {renderMenuItems(sizeGroup.items)}
                    </div>
                  );
                })}
              </div>
            )}
            {categoryData.bottled_330ml && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Bottled (330ml)
                </h4>
                {renderMenuItems(categoryData.bottled_330ml)}
              </div>
            )}
          </div>
        );
      } else if (categoryName === "indian_main_course") {
        return (
          <div className="space-y-4">
            {categoryData.veg && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Veg
                </h4>
                {renderMenuItems(categoryData.veg)}
              </div>
            )}
            {categoryData.dal && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Dal
                </h4>
                {renderMenuItems(categoryData.dal)}
              </div>
            )}
            {categoryData.non_veg && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Non-Veg
                </h4>
                {categoryData.non_veg.map((subCategory, index) => {
                  return (
                    <div key={index} className="mb-4">
                      <h5 className="text-md font-medium text-gray-700">
                        {subCategory.category}
                      </h5>
                      {renderMenuItems(subCategory.items)}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      } else if (categoryName === "italian") {
        return (
          <div className="space-y-4">
            {categoryData.pizza && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Pizza
                </h4>
                <div>
                  <h5 className="text-md font-medium text-gray-700 mb-2">
                    Vegetarian
                  </h5>
                  {renderMenuItems(categoryData.pizza.vegetarian)}
                </div>
                <div>
                  <h5 className="text-md font-medium text-gray-700 mb-2">
                    Non-Vegetarian
                  </h5>
                  {renderMenuItems(categoryData.pizza.non_vegetarian)}
                </div>
              </div>
            )}
            {categoryData.cheese_garlic_bread && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Cheese Garlic Bread
                </h4>
                {renderMenuItems([categoryData.cheese_garlic_bread])}
              </div>
            )}
            {categoryData.pasta && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Pasta
                </h4>
                {renderMenuItems(categoryData.pasta)}
              </div>
            )}
          </div>
        );
      } else if (categoryName === "tandoori") {
        return (
          <div className="space-y-4">
            {categoryData.prawns && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Prawns
                </h4>
                {renderMenuItems(categoryData.prawns)}
              </div>
            )}
            {categoryData.fish && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Fish
                </h4>
                {renderMenuItems(categoryData.fish)}
              </div>
            )}
            {categoryData.chicken && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Chicken
                </h4>
                {renderMenuItems(categoryData.chicken)}
              </div>
            )}
            {categoryData.paneer && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Paneer
                </h4>
                {renderMenuItems(categoryData.paneer)}
              </div>
            )}
            {categoryData.baby_corn && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Baby Corn
                </h4>
                {renderMenuItems(categoryData.baby_corn)}
              </div>
            )}
            {categoryData.mushroom && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Mushroom
                </h4>
                {renderMenuItems(categoryData.mushroom)}
              </div>
            )}
            {categoryData.gobi && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Gobi
                </h4>
                {renderMenuItems(categoryData.gobi)}
              </div>
            )}
            {categoryData.aloo && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Aloo
                </h4>
                {renderMenuItems(categoryData.aloo)}
              </div>
            )}
            {categoryData.veg_tandoori && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Veg Tandoori
                </h4>
                {renderMenuItems(categoryData.veg_tandoori)}
              </div>
            )}
            {categoryData.non_veg_tandoori && (
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Non-Veg Tandoori
                </h4>
                {renderMenuItems(categoryData.non_veg_tandoori)}
              </div>
            )}
          </div>
        );
      } else {
        return renderMenuItems(categoryData);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Eden Park Menu</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-md transition-colors duration-200
              ${
                activeTab === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.replace(/_/g, " ").toUpperCase()}
              {/* Replace underscores with spaces for display */}
            </button>
          );
        })}
      </div>
      {/* Render content based on active tab */}
      <div>{renderContent(activeTab)}</div>
    </div>
  );
};

export default MenuPage;
