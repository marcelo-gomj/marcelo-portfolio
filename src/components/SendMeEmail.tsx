'use client';

import React, { MouseEvent, MouseEventHandler, useContext, useEffect, useState } from "react";
import CloseIcon from "@/actions/unsee.svg"; 
import CopyIcon from "@/actions/copy.svg"; 
import CopiedIcon from "@/actions/success.svg"; 
import { ContactsContext } from "@/contexts/useContacts";

type CopyStates =  "copy" | "copied" | "no-copied";
type SendMeEmailProps = {
  extraAction ?: () => void, 
  initialState ?: boolean
}

const SendMeEmail = ({ extraAction, initialState } : SendMeEmailProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isShowEmail, setIsShowEmail] = useState(initialState || false);
  const { email } = useContext(ContactsContext);
  const [copyState, setCopyState] = useState("copy" as CopyStates);

  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".banner");
      
      if(!banner) return;

      const bannerPositonBottom = banner.getBoundingClientRect().bottom;
  
      setIsSticky(bannerPositonBottom < 0)
    }

    
    if(!extraAction){
      const mainElement = document.querySelector("main");
      
      mainElement?.addEventListener("scroll", handleScroll);
      
      return () => mainElement?.removeEventListener("scroll", handleScroll);
    }
    
  }, [])

  const copyEmailForClipboard = async () => {
    try{
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    }catch(_){
      setCopyState("no-copied");
    }finally{
      setTimeout(() => {
        setCopyState("copy")
      }, 4000)
    }
  }

  const handleShowEmail = (
    options: boolean
  ) => (e:  MouseEvent<HTMLDivElement>) =>{
    e.stopPropagation();
    extraAction ? extraAction() : setIsShowEmail(options);
  }

  const [LabelIcon, StateLabel] = {
    "copy" : [CopyIcon, "copiar"],
    "no-copied" : [CloseIcon, "não copiar"],
    "copied" : [CopiedIcon, "copiado"]
  }[copyState]


  return (
    <div
      className={`select-none cursor-pointer ${ !extraAction && isSticky ? 'fixed' : 'static' } right-4 bottom-4 z-50`}
    >
      <div
        className=""
      >{
        isShowEmail ?
        <div 
          className="flex relative h-11 items-center bg-[rgb(0,5,0)] justify-between border-2 border-green-600 rounded-full sl:h-auto sl:flex-col sl:rounded-md"
        >
          <div className="flex h-full items-center justify-between sl:flex-col">
            <div
              className={`flex items-center gap-2 h-full border-r-2 px-5 border-green-600 ${ copyState === "copied" ? "opacity-100" : "opacity-80 hover:opacity-100"} sl:border-r-0 sl:py-2.5`}
              onClick={copyEmailForClipboard}
            >
              <LabelIcon className="size-6" />
              <p className="">
                {StateLabel}
              </p>
            </div>

            <p className="flex items-center select-text cursor-text px-5 h-full">
              { email }
            </p>
          </div>

          <div 
            className="flex items-center h-full px-4 justify-center opacity-60 hover:opacity-100 sl:py-2.5 sl:px-0"
            onClick={handleShowEmail(false)}
          >
            <CloseIcon 
              className="size-6 shrink-0" 
            />
          </div>
        </div> :

        <div
          onClick={handleShowEmail(true)}

          className="bg-green-600 px-8 py-2.5 rounded-full sl:px-4"
        >
          Enviar email pra mim
        </div>
      }</div>
    </div>
  )
}

export default SendMeEmail;
