'use client';

import { Inika } from 'next/font/google';
import { ReactNode, createContext } from 'react';

const inika = Inika({ weight: "400", subsets: ["latin"]});
const FontContext = createContext({});

export const FontContextProvider = ({ children } : { children: ReactNode }) => {
  return (
    <FontContext.Provider value={inika}>
      {children}
    </FontContext.Provider>
  );
};

export default FontContext;