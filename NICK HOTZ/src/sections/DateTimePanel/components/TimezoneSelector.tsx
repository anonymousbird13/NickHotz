export const TimezoneSelector = () => {
  return (
    <div className="relative box-border caret-transparent max-w-xs break-words mx-auto px-0 md:max-w-none md:mx-0 md:px-8">
      <div className="relative box-border caret-transparent break-words text-left">
        <p className="font-bold box-border caret-transparent leading-[19.6px] break-words">
          Time zone
        </p>
        <div className="box-border caret-transparent max-w-full break-words pt-1.5 pb-[5px] px-[9px] rounded-[18px]">
          <button
            name="Timezone dropdown button"
            role="button"
            type="button"
            className="items-center bg-transparent caret-transparent flex break-words text-center p-0"
          >
            <span className="relative box-border caret-transparent block shrink-0 leading-[14px] break-words mr-3 -top-px font-icomoon before:accent-auto before:box-border before:caret-transparent before:text-sky-950 before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-icomoon"></span>
            <div className="box-border caret-transparent break-words text-ellipsis text-nowrap overflow-hidden">
              UTC Time
            </div>
            <div className="box-border caret-transparent shrink-0 break-words ml-[3px] mr-1">
              (4:15am)
            </div>
            <span className="relative text-[8px] box-border caret-transparent block shrink-0 leading-[8px] break-words font-icomoon before:accent-auto before:box-border before:caret-transparent before:text-sky-950 before:text-[8px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[8px] before:list-outside before:list-disc before:break-words before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-icomoon"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
