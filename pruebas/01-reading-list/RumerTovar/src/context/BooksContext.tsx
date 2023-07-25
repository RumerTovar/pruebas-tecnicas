/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useState } from 'react';

interface BooksProviderProps {
 children: ReactNode;
}

interface BooksContextType {
 available: boolean;
 setAvailable: (available: boolean) => void;
}

const BooksContext = createContext<BooksContextType>({
 available: true,
 setAvailable: () => {},
});

export default BooksContext;

export const BooksProvide = ({ children }: BooksProviderProps) => {
 const [available, setAvailable] = useState(true);

 const contextData = {
  available,
  setAvailable,
 };

 return (
  <BooksContext.Provider value={contextData}>{children}</BooksContext.Provider>
 );
};
