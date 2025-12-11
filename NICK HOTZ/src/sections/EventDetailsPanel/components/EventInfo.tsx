import { EventLogo } from "@/sections/EventDetailsPanel/components/EventLogo";
import { EventAvatar } from "@/sections/EventDetailsPanel/components/EventAvatar";
import { EventTitle } from "@/sections/EventDetailsPanel/components/EventTitle";
import { EventHeading } from "@/sections/EventDetailsPanel/components/EventHeading";
import { EventDuration } from "@/sections/EventDetailsPanel/components/EventDuration";

export const EventInfo = () => {
  return (
    <div className="box-border caret-transparent min-h-0 break-words pt-[25px] md:min-h-[550px]">
      <div className="box-border caret-transparent break-words text-center mb-6 md:text-start">
        <div className="[align-items:normal] border-b-zinc-900/10 border-l-sky-950 border-r-sky-950 border-t-sky-950 box-border caret-transparent block justify-normal min-h-0 break-words text-center mb-6 pb-[15px] border-b md:items-center md:flex md:justify-center md:min-h-[148px] md:pb-[25px]">
          <EventLogo />
        </div>
        <EventAvatar />
        <EventTitle />
        <EventHeading />
      </div>
      <EventDuration />
    </div>
  );
};
