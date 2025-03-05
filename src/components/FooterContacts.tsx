'use client'
import { useContext } from "react";
import SectionHomeContainer from "./SectionHomeContainer";
import { EmailContext } from "@/contexts/useEmail";

const FooterContacts = () => {
  const { email } = useContext(EmailContext);

  return (
    <footer>
      <SectionHomeContainer 
        title={"Contatos"}      
      >
        <p
          className="mb-28"
        >Meu email: { email }</p>
      </SectionHomeContainer>
    </footer>
  )
}

export default FooterContacts;