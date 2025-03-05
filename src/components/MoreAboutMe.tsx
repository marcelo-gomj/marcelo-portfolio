import SectionHomeContainer from "./SectionHomeContainer";

import Code from "@/skills/code.svg";
import Figma from "@/skills/figma.svg";
import FlashIcon from "@/skills/flash.svg";
import RamdaIcon from "@/skills/ramda.svg";
import Wordpress from "@/skills/wordpress.svg";
import Seo from "@/skills/seo.svg";

const MoreAboutMe = () => {

  const extraSkills = [
    [
      Figma, 
      "Crio interfaces modernas e intuitivas, utilizando Adobe XD e Figma para desenvolver layouts que aliam estética e funcionalidade. Busco sempre proporcionar uma experiência visual que se destaque e seja acessível em diferentes dispositivos."
    ],
    [
      Seo, 
      "Planejo e implemento estratégias que elevam a visibilidade dos sites no Google. Por meio de análises de dados, uso de HTML semântico, melhorias de performance e foco em acessibilidade, contribuo para um posicionamento orgânico mais competitivo."
    ],
    [
      FlashIcon, 
      "Com conhecimentos avançados em JavaScript e TypeScript, desenvolvo aplicações dinâmicas e escaláveis. Escrevo código limpo e modular, adotando as melhores práticas para garantir soluções robustas e eficientes."
    ],
    [
      Wordpress, 
      "Minha experiência com WordPress inclui a personalização de temas e a integração dos plugins essenciais. Trabalho com editores avançados e ferramentas de SEO para criar sites otimizados, alinhando design e performance para melhores resultados."
    ],
    [
      RamdaIcon, 
      "A utilização de bibliotecas como Ramda.js evidencia seu interesse em programação funcional, possibilitando a criação de código mais limpo, modular e previsível."
    ],
    [
      Code, 
      "Priorizo um código limpo e bem estruturado, aplicando conceitos como imutabilidade, composição de funções e boas práticas de performance. Busco sempre soluções que tornem o desenvolvimento mais eficiente e sustentável."
    ],
  ]


  return (
    <SectionHomeContainer
      title="Mais sobre mim"
    >
      <ul
        className="grid grid-cols-2 gap-y-16 gap-x-24 items-start ml:gap-x-14 sl:grid-cols-1"
      >
      {
        extraSkills.map(([Icon, description], index) => (
          <li
            className="flex relative self-stretch gap-10 ml:gap-5 mm:flex-col mm:items-center"
            key={index}
          >
            <Icon 
              className="shrink-0 my-3 size-14 stroke-1"
            />

            <p
              className="text-[1rem] font-light mm:text-center"
            >{description}</p>
          </li>
        ))
      }
      </ul>
    </SectionHomeContainer>
  )
}

export default MoreAboutMe;