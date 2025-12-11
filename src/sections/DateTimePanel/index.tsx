import { CalendarSection } from "@/sections/DateTimePanel/components/CalendarSection";
import { LoginButton } from "@/sections/DateTimePanel/components/LoginButton";

export const DateTimePanel = () => {
  return (
    <div className="box-border caret-transparent basis-auto grow shrink-0 break-words w-auto md:basis-6/12 md:shrink md:w-6/12 relative">
      {/* Dark blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[5]"></div>
      
      {/* Login with X button */}
      <LoginButton />
      
      <div className="static box-border caret-transparent flex flex-col h-full min-h-[600px] break-words mx-auto pt-[25px] md:relative md:min-h-0 md:pt-7">
        <h2 className="text-2xl font-bold box-content caret-black leading-[normal] min-h-0 min-w-0 text-start w-auto break-normal mb-0 px-0 md:text-xl md:aspect-auto md:box-border md:caret-transparent md:leading-[30px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:mb-5 md:pl-8 md:pr-[120px] md:scroll-m-0 md:scroll-p-[auto]">
          Select a Date &amp; Time
        </h2>
        <div className="box-border caret-transparent block basis-auto grow-0 max-w-[400px] break-words w-full mx-auto md:flex md:basis-[300px] md:grow md:max-w-none md:mx-0">
          <div className="box-border caret-transparent max-w-full min-h-0 min-w-0 break-words pb-0 md:min-h-[auto] md:min-w-[auto] md:pb-[55px]">
            <CalendarSection />
          </div>
        </div>
        <div className="relative items-center bg-white box-border caret-transparent flex flex-col max-w-[350px] min-h-[auto] min-w-[auto] break-words w-full mt-auto mx-auto pt-4 pb-5 px-[15px] bottom-auto inset-x-auto md:absolute md:[align-items:normal] md:flex-row md:max-w-[336px] md:min-h-0 md:min-w-0 md:w-auto md:mx-3.5 md:pt-0 md:pb-[11px] md:px-0 md:bottom-0 md:inset-x-0"></div>
      </div>
    </div>
  );
};
