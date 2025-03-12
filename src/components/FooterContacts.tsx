'use client'
import { useContext } from "react";
import SectionHomeContainer from "./SectionHomeContainer";
import { ContactsContext } from "@/contexts/useContacts";

const FooterContacts = () => {
  const { email } = useContext(ContactsContext);

  return (
    <footer>
      <SectionHomeContainer 
        title={"Contatos"}      
      >
        <p
          className="mb-28"
        >
          Meu email: { email }
        </p>
      </SectionHomeContainer>
    </footer>
  )
}

export default FooterContacts;