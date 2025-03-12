'use client';
import { ContactsContextProps } from "@/types/global";
import React, { createContext } from "react";

type ContactsProviderProps ={
  children: React.ReactNode
  contacts: ContactsContextProps
};

const ContactsContext = createContext({ } as ContactsContextProps);
const ContactsContextProvider = ({ contacts, children } : ContactsProviderProps) => {

  return (
    <ContactsContext.Provider value={contacts}>
      { children }
    </ContactsContext.Provider>
  )
}

export { ContactsContext, ContactsContextProvider }