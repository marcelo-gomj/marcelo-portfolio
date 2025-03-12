'use client'

import Instagram from "@/contacts/instagram.svg";
import Github from "@/contacts/github.svg";
import Email from "@/contacts/email.svg";
// import Linkendin from "@/contacts/linkedin.svg";
import Link from "next/link";
import { ReactNode, useContext, useState } from "react";
import { ContactsContext } from "@/contexts/useContacts";
import { is } from "ramda";
import SendMeEmail from "./SendMeEmail";

type ContactsProps = [string, any, (string |((...args: any[]) => void)), boolean?]
type AsideButtonsProps = {
  props : [string, ContactsProps[1]], 
  children: ReactNode 
}

const AsideButtonsItem = (
  { props: [title, action], children }: AsideButtonsProps
) => (
  is(String, action) ?
  <Link
    title={title}
    href={action}
  >{children}</Link> :
  <div
    title={title}
    // onClick={action}
  >{children}</div>
)

const AsideContatacts = () => {
  const useContacts = useContext(ContactsContext);
  const [actionContent, setActionContent] = useState(null as number | null);
  
  const contacts : ContactsProps[] = [
    ["Ir ao Instagram do Marcelo", Instagram, useContacts.instagram],
    ["Ir ao Github do Marcelo", Github, useContacts.github],
    // ["Ir ao Linkendin do Marcelo",Linkendin, "linkendin", true],
    ["Ir ao Email do Marcelo", Email, setActionContent],
  ]
  
  const handleClickButton = (index: number | null) => {
    setActionContent(index)
  }

  return (
    <aside className="flex relative z-[800] h-full justify-center w-32 my-10 py-10 ml:w-full ml:h-8 ml:py-8 ml:my-0">
      <ul
        className="flex items-center flex-col gap-8 ml:flex-row"
      >{
        contacts.map(([title, Icon, action, isSmallIcon], index) => (
          <li
            key={title}
            className="relative cursor-pointer z-[999] ml:static"
            onClick={_ => !is(String, action) && handleClickButton(index)}
            
          >{
            <AsideButtonsItem
              props={[title, action]}
            >
              <Icon 
                className={`${isSmallIcon ? 'opacity-80 size-8' : 'size-8'}`}
              />
            </AsideButtonsItem>

            }
            {
              ( actionContent === index) ?
              <div
                className='absolute left-20 w-auto z-[999] -top-1/4 ml:left-1/2 ml:-translate-x-1/2 ml:top-15 border-[1px]'
              >
                <SendMeEmail
                  extraAction={() => setActionContent(null)}
                  initialState={true}
                />
              </div> : 
              ""
            }
          </li>
        ))
      }</ul>      
    </aside>
  )
}

export { AsideContatacts };
