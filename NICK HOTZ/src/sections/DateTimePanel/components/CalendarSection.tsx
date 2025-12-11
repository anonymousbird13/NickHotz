import { CalendarHeader } from "@/sections/DateTimePanel/components/CalendarHeader";
import { Calendar } from "@/sections/DateTimePanel/components/Calendar";
import { TimezoneSelector } from "@/sections/DateTimePanel/components/TimezoneSelector";

export const CalendarSection = () => {
  return (
    <div className="box-border caret-transparent break-words">
      <div className="box-border caret-transparent max-w-[340px] break-words overflow-hidden mx-auto px-2.5 md:max-w-none md:mx-[19px] md:px-0">
        <CalendarHeader />
        <div className="relative box-border caret-transparent min-h-[280px] break-words md:min-h-[313px]">
          <Calendar />
        </div>
      </div>
      <TimezoneSelector />
    </div>
  );
};
