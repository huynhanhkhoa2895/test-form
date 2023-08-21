import { useContext, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { IAppContext } from "@/types";
import AppContext from "@/contexts";

type Props = {
  id: string;
  title: string;
  content?: string;
  price?: any;
  className?: string;
  onChange: any;
  defaultValue?: string | null;
};

const Checkbox = ({
  id,
  title,
  content,
  price,
  className,
  onChange,
  defaultValue,
}: Props) => {
  const ctx = useContext<IAppContext | undefined>(AppContext);
  const ref = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    if (defaultValue && defaultValue != "") {
      onChange && onChange(defaultValue);
      if (ref.current && ref.current?.value === defaultValue) {
        ref.current.checked = true;
      }
    }
  }, []);

  const handleChange = (e: any) => {
    if (e?.target?.checked) {
      onChange(id);
    } else {
      onChange(undefined);
    }
  };

  return (
    <div>
      <input
        ref={ref}
        id={"checkbox_" + id}
        type="checkbox"
        className={twMerge("hidden peer", className ?? "")}
        onChange={handleChange}
        value={id}
      />
      <label
        htmlFor={"checkbox_" + id}
        className="block w-full px-4 py-3 md:py-4 md:px-6 border border-lightGrey transition duration-300 peer-checked:border-primary peer-checked:[&_svg]:hidden peer-checked:[&_svg.active]:block rounded-lg cursor-pointer bg-white peer-checked:bg-veryLightGrey"
      >
        <div className="flex flex-nowrap items-center -mx-2 md:-mx-3">
          <div className="w-auto basis-auto grow-0 shrink-0 px-2 md:px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="block"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="3.5"
                stroke="#D6D9E6"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="hidden active"
            >
              <rect width="20" height="20" rx="4" fill="#483EFF" />
              <path
                d="M5 10L8.43298 13.433L14.866 7"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="grow shrink-0 basis-[0%] px-2 md:px-3">
            <div className="text-denim font-medium text-sm md:text-base mb-[3px] md:mb-[7px]">
              {title}
            </div>
            <div className="text-grey font-normal text-xs leading-5 md:text-sm md:leading-5">
              {content}
            </div>
          </div>
          <div className="w-auto basis-auto grow-0 shrink-0 px-2 md:px-3">
            <div className="text-primary font-normal text-xs leading-5 md:text-sm md:leading-5">
              +${price[ctx?.isMonthly ? "mo" : "yr"]}/
              {ctx?.isMonthly ? "mo" : "yr"}
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Checkbox;
