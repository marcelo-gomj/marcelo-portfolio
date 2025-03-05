import Instagram from "@/contacts/instagram.svg";
import Github from "@/contacts/github.svg";
import Email from "@/contacts/email.svg";
import Linkendin from "@/contacts/linkedin.svg";

const AsideContatacts = () => {
  const contacts = [
    [Instagram, "Ir ao Instagram do Marcelo", "instagram"],
    [Github, "Ir ao Github do Marcelo", "github"],
    [Linkendin, "Ir ao Linkendin do Marcelo", "linkendin", true],
    [Email, "Ir ao Email do Marcelo", "email"],
  ]

  return (
    <aside className="flex h-full justify-center w-32 my-10 py-10 ml:w-full ml:h-8 ml:py-8 ml:my-0">
      <ul
        className="flex items-center flex-col gap-8 ml:flex-row"
      >{
        contacts.map(([Icon, title, extraSize]) => (
          <li 
            key={title}
            className="opacity-80"
          >
            <Icon 
              className={`w-6 h-6 ${extraSize ? 'w-7 h-7' : ''}`}
            />
          </li>
        ))
      }</ul>      
    </aside>
  )
}

export { AsideContatacts };