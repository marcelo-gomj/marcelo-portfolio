'use client';
import React, { createContext } from "react";

type EmailContextProps = { email: string };
type EmailProviderProps = EmailContextProps & {
  children: React.ReactNode
};

const EmailContext = createContext({ email : "" } as EmailContextProps);
const EmailContextProvider = ({ email, children } : EmailProviderProps) => {

  return (
    <EmailContext.Provider value={{ email }}>
      { children }
    </EmailContext.Provider>
  )
}

export { EmailContext, EmailContextProvider }