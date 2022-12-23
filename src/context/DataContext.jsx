import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [getCards, setGetCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  return (
    <DataContext.Provider value={{ getCards, setGetCards, setIsLoading, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

