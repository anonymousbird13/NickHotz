import { EventDetailsPanel } from "@/sections/EventDetailsPanel";
import { DateTimePanel } from "@/sections/DateTimePanel";

export const MainContainer = () => {
  return (
    <div className="relative bg-white shadow-none box-border caret-transparent flex flex-col grow shrink-0 max-w-[680px] min-h-[auto] break-words w-full border-sky-950 rounded-none border-0 border-none md:shadow-[rgba(0,0,0,0.08)_0px_1px_8px_0px] md:flex-row md:shrink md:max-w-[800px] md:min-h-[550px] md:w-[95%] md:border md:border-zinc-900/10 md:rounded-lg md:border-solid">
      <a
        href="https://calendly.com/?utm_campaign=sign_up&utm_medium=badge&utm_source=invitee"
        className="sticky text-blue-700 box-border caret-transparent block h-[105px] mb-[-105px] min-h-[auto] min-w-[auto] break-words pointer-events-none right-[-5px] w-[105px] z-[10] overflow-hidden ml-auto top-0 md:absolute md:min-h-0 md:min-w-0 md:top-[-5px] md:z-[10] md:ml-0 md:mb-0 before:md:accent-auto before:md:bg-gray-600 before:md:box-border before:md:caret-transparent before:md:text-blue-700 before:md:block before:md:text-sm before:md:not-italic before:md:normal-nums before:md:font-normal before:md:h-1.5 before:md:tracking-[normal] before:md:leading-[21px] before:md:list-outside before:md:list-disc before:md:break-words before:md:pointer-events-none before:md:absolute before:md:text-start before:md:no-underline before:md:indent-[0px] before:md:normal-case before:md:visible before:md:w-1.5 before:md:border-separate before:md:left-0 before:md:top-0 before:md:font-proxima_nova after:md:accent-auto after:md:bg-gray-600 after:md:box-border after:md:caret-transparent after:md:text-blue-700 after:md:block after:md:text-sm after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-1.5 after:md:tracking-[normal] after:md:leading-[21px] after:md:list-outside after:md:list-disc after:md:break-words after:md:pointer-events-none after:md:absolute after:md:text-start after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-1.5 after:md:border-separate after:md:right-0 after:md:bottom-0 after:md:font-proxima_nova"
      >
        <div className="relative text-white font-bold bg-gray-600 shadow-[rgba(0,0,0,0.2)_0px_2px_4px_0px] box-border caret-transparent left-[-5px] leading-[16.8px] break-words pointer-events-auto text-center rotate-45 w-40 z-[1] pt-[9px] pb-1.5 top-[15px] md:left-[-11px] md:top-[21px]">
          <div className="text-zinc-100 text-[7px] box-border caret-transparent leading-[8.4px] ml-[-7px] break-words uppercase md:text-[8px] md:leading-[9.6px]">
            powered by
          </div>
          <div className="box-border caret-transparent ml-[-7px] break-words">
            Calendly
          </div>
        </div>
      </a>
      <EventDetailsPanel />
      <DateTimePanel />
    </div>
  );
};
