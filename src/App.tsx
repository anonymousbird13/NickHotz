import { MainContainer } from "@/components/MainContainer";

export const App = () => {
  return (
    <body className="text-sky-950 text-sm not-italic normal-nums font-normal accent-auto box-border caret-transparent block h-full tracking-[normal] leading-[21px] list-outside list-disc min-h-[1000px] break-words pointer-events-auto text-start indent-[0px] normal-case visible overflow-auto border-separate font-proxima_nova">
      <div className="relative box-border caret-transparent break-words">
        <div className="box-border caret-transparent break-words">
          <div className="bg-zinc-50 box-border caret-transparent flex flex-col min-h-[1000px] break-words">
            <div className="box-border caret-transparent flex justify-center min-h-[auto] break-words my-0 px-0 md:min-h-[700px] md:mt-[66px] md:mb-[30px] md:px-[5%]">
              <MainContainer />
            </div>
          </div>
        </div>
      </div>
      <div className="relative box-border caret-transparent break-words"></div>
      <div className="relative box-border caret-transparent break-words">
        <iframe className="box-border caret-transparent hidden break-words border-zinc-100"></iframe>
      </div>
    </body>
  );
};
