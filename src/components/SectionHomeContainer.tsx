import { HTMLAttributes } from "react"

type SectionHomeProps = {
  title: string, 
  Icon?: any,
  children: React.ReactNode
}

const SectionHomeContainer = (
  { title, Icon, children } : SectionHomeProps
) => {
  return (
    <section
      className="mt-24 mb-8 pr-16 ls:pr-10 ml:pr-0"
    >
      <div className={`flex items-center gap-3 mb-16`}>
        { Icon ? <Icon className="w-8 h-8" /> : "" }

        <h3
          className="jetbrains-mono text-2xl font-medium mm:text-xl"
        >
          { title }
        </h3>
      </div>
      {children}
    </section>
  )
}

export default SectionHomeContainer;