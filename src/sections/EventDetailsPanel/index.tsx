import { EventInfo } from "@/sections/EventDetailsPanel/components/EventInfo";
import { CookieSettings } from "@/components/CookieSettings";

export const EventDetailsPanel = () => {
  return (
    <div className="relative border-b-zinc-900/10 border-l-sky-950 border-r-sky-950 border-t-sky-950 box-border caret-transparent min-w-[auto] break-words w-auto pb-[25px] border-r-0 border-b md:border-b-sky-950 md:border-r-zinc-900/10 md:min-w-[300px] md:w-6/12 md:border-b-0 md:border-r">
      <div className="box-border caret-transparent gap-x-[30px] flex flex-col h-full break-words gap-y-[30px]">
        <div className="relative content-start items-start box-border caret-transparent basis-0 flex-col grow flex-wrap h-auto justify-start break-words md:h-0">
          <div className="box-border caret-transparent h-auto break-words overflow-hidden md:h-0">
            <div className="relative box-border caret-transparent basis-0 shrink-0 float-left h-full max-h-px max-w-px break-words pointer-events-none w-full z-[-1] overflow-hidden"></div>
            <div className="absolute box-border caret-transparent break-words z-0 overflow-hidden inset-0">
              <div className="absolute box-border caret-transparent break-words inset-0">
                <div className="relative box-border caret-transparent max-h-full max-w-full break-words overflow-hidden">
                  <div className="box-border caret-transparent break-words before:accent-auto before:box-border before:caret-transparent before:text-sky-950 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[21px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-proxima_nova after:accent-auto after:box-border after:caret-transparent after:text-sky-950 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[21px] after:list-outside after:list-disc after:break-words after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-proxima_nova">
                    <EventInfo />
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent h-0 max-h-full max-w-full break-words pointer-events-none"></div>
          </div>
        </div>
        <CookieSettings />
      </div>
    </div>
  );
};
