import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  // Only call fetchDrinks if something changes. Otherwise could cause infinite loop
  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchValue}`);
      const data = await response.json();

      const { drinks } = data;
      // if drinks is not equal to null e.g. no result for input
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchValue]);

  useEffect(() => {
    fetchDrinks();
  }, [searchValue, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchValue,
        cocktails,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
