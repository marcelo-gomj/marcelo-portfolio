import TypescriptIcon from "@/stack/typescript.svg";
import JavascriptIcon from "@/stack/javascript.svg";
import ReactIcon from "@/stack/react.svg";
import NodeIcon from "@/stack/node.svg";
import VueIcon from "@/stack/vue.svg";
import NextJsIcon from "@/stack/nextjs.svg";
import ElectronIcon from "@/stack/electron.svg";

const MyStack = () => {
  const stacks = [
    [TypescriptIcon, "TypeScript"], 
    [NodeIcon, "Node"],
    [JavascriptIcon, "JavaScript"], 
    [ReactIcon, "ReactJS"], 
    [VueIcon, "VueJS"], 
    [NextJsIcon, "NextJS"],
    [ElectronIcon, "ElectronJS"], 
  ];

  return (
    <div 
      className="px-16 pt-3 mm:px-10 mm:pt-0 sl:px-6"
    >
      <h3 className="text-[1rem] text-neutral-400 jetbrains-mono font-bold sl:text-[0.9rem]">
        Minha stack:
      </h3>
      
      <ul className="flex gap-x-12 gap-y-8 py-10 items-center flex-wrap mm:py-6">{
        stacks.map(([Icon, title]) => (
          <li 
            className=""
            key={title}
            title={title}
          >
            <Icon className="size-8 fill-white sl:size-7" />
          </li>
        ))  
      }</ul>
    </div>
  )
}

export default MyStack ;