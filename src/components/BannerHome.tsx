import MyStack from "./MyStack";
import SendMeEmail from "./SendMeEmail";



const BannerHome = ({}) => {
  return (
    <header
      className="flex banner relative w-full items-center h-full ml:flex-col-reverse ml:pr-5 ml:justify-end"
    >
      <div className="flex border-2 py-5 w-full border-neutral-900 rounded-2xl sl:border-none sm:py-1">
        <div className="flex gap-10 py-5 flex-col w-full ml:gap-14 sl:gap-4 sl:py-2 sm:gap-1">

          <div className="flex flex-col items-center gap-10 text-center mm:gap-8 sl:gap-5 sm:gap-1">
            <h2
              className="jetbrains-mono text-7xl tracking-wide font-[600] ml:text-5xl mm:text-4xl sl:text-2xl"
            >
              MARCELO GOMES
            </h2>

            <div className="w-[60%] ml:w-[75%] mm:w-full">
              <h3
                className="tracking-wide text-[0.94rem] ms:w-full font-medium text-neutral-300 sl:text-[0.86rem] sl:font-light"
              >
                Desenvolvedor web apaixonado, transformando ideias em soluções inovadoras com JavaScript, TypeScript, React, Vue e Next.js.
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <MyStack />
          </div>

          <div className="flex items-center justify-center">
            <SendMeEmail />
          </div>
        </div>
      </div>

      <div className="flex py-18 items-center justify-center w-32 self-stretch ml:w-full ml:py-6 sl:py-4">
        <div className="w-[7px] my-5 bg-neutral-300 self-stretch rounded-full ml:h-[7px] ml:w-full ml:my-0 ml:mx-18" />
      </div>
    </header>
  )
}

export { BannerHome };