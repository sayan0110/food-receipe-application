import React, { useState } from "react";
const Reciepe = () => {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (ingredient) {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    }
  };

  return (
    <div className=" ">
      <img className="w-5/6 h-60 object-cover mx-auto mt-4 rounded-3xl shadow-lg shadow-black"
        src="https://image.lexica.art/full_webp/50bf6d8e-1379-4983-8ba2-cf76e6de0130"
        alt="no Banner"
      />
      <div className="lg:flex md:flex items-center justify-center  mt-8 flex flex-col gap-2 lg:flex-row md:flex-row">
        <input
          className="block border-2 border-black rounded-full px-4 py-2 mr-2 items-center justify-center lg:w-1/3 md:w-1/3 w-2/3 "
          type="text"
          placeholder="what you feels to eat today ?..."
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button
          className="block bg-blue-700 text-white px-8 py-2 rounded-full shadow-sm hover:shadow-blue-600 hover:bg-blue-800 transition duration-300 ease-in-out"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="w-5/6 mx-auto mt-8">
        {recipes.length > 0 ? (
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
            {recipes.map((recipe) => (
              <li className=" md:p-4 lg:p-4 flex flex-col items-center cursor-pointer p-2 " key={recipe.idMeal}>
                <img className="rounded-md shadow-md shadow-black md:h-60 lg:h-60 md:w-60 lg:w-60 object-cover w-80"
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  width="100"
                  />
                  <h2 className="md:text-xl lg:text-xl text-2xl font-bold mt-4 lg:mt-2 md:mt-2 transition duration-300 delay-100 ease-in-out  hover:-translate-y-1 hover:scale-110">{recipe.strMeal}</h2>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-xl mt-32">No recipes found. Try another ingredient.</p>
        )}
      </div>
    </div>
  );
};

export default Reciepe;
