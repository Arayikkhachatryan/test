import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [getCards, setGetCards] = useState([]);
  const [getCourse, setGetCourse] = useState([]);
  const [getTrainers, setGetTrainers] = useState([]);
  const [coruseName, setCoruseName] = useState([]);
  const [coursDesc, setCoursDesc] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  return (
    <DataContext.Provider
      value={{
        getCards,
        setGetCards,
        isLoading,
        setIsLoading,
        getCourse,
        setGetCourse,
        coruseName,
        setCoruseName,
        getTrainers,
        setGetTrainers,
        coursDesc,
        setCoursDesc,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
