import React, { createContext, useState, useContext } from 'react';

const BookContext = createContext();

export function BookProvider({ children }) {
  const [clickedBook, setClickedBook] = useState(null);

  return (
    <BookContext.Provider value={{ clickedBook, setClickedBook }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBookContext() {
  return useContext(BookContext);
}
