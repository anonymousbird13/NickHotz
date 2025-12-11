export const CalendarHeader = () => {
  return (
    <div className="relative items-center box-border caret-transparent flex justify-center break-words mt-1.5 mb-[15px] mx-1.5">
      <div className="box-border caret-transparent break-words mx-[5px]">
        <button
          aria-label="Go to previous month"
          type="button"
          className="relative text-zinc-900/60 items-center bg-transparent caret-transparent inline-flex h-[38px] justify-center break-words pointer-events-none text-center w-[38px] z-[1] p-0 rounded-[50%]"
        >
          <span className="box-border caret-transparent block shrink-0 h-5 break-words align-top w-5">
            <img
              src="https://c.animaapp.com/mj0xczvgICc8gC/assets/icon-2.svg"
              alt="Icon"
              className="box-border caret-transparent"
            />
          </span>
        </button>
      </div>
      <div className="text-base box-border caret-transparent flex justify-center leading-6 break-words w-[125px] mx-[5px]">
        December 2025
      </div>
      <div className="box-border caret-transparent break-words mx-[5px]">
        <button
          aria-label="Go to next month"
          type="button"
          className="relative text-blue-600 items-center bg-blue-600/10 caret-transparent inline-flex h-[38px] justify-center break-words text-center w-[38px] z-[1] p-0 rounded-[50%] hover:bg-blue-600/20"
        >
          <span className="box-border caret-transparent block shrink-0 h-5 break-words align-top w-5">
            <img
              src="https://c.animaapp.com/mj0xczvgICc8gC/assets/icon-3.svg"
              alt="Icon"
              className="box-border caret-transparent"
            />
          </span>
        </button>
      </div>
    </div>
  );
};
