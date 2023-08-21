import { HTMLProps, useContext } from "react";
import { twMerge } from "tailwind-merge";
import Svg from "../Svg";
import { IAppContext, Icons } from "@/types";
import AppContext from "@/contexts";

interface Props extends HTMLProps<HTMLInputElement> {
  id: string;
  icon: Icons;
  title: string;
  price?: any;
  content?: string;
  className?: string;
  name: string;
  onChange: any;
  value?: string;
  active?: boolean;
}

const Radio = ({
  id,
  icon,
  title,
  price,
  content,
  className,
  name,
  onChange,
  value,
  active,
}: Props) => {
  const ctx = useContext<IAppContext | undefined>(AppContext);
  return (
    <div>
      <input
        id={"radio_" + id}
        type="radio"
        className={twMerge("hidden peer", className ?? "")}
        name={name}
        onChange={() => onChange(value)}
        value={value}
      />
      <label
        htmlFor={"radio_" + id}
        className={twMerge(
          "block w-full px-4 py-[17px] md:pt-5 md:pb-4 md:px-4 border border-lightGrey transition duration-300 hover:border-primary rounded-lg cursor-pointer bg-white peer-checked:bg-veryLightGrey",
          active && "border-primary"
        )}
      >
        <div className="flex flex-wrap -mx-[7px] md:-mx-0">
          <div
            className={twMerge(
              "w-auto basis-auto md:w-full md:basis-full grow-0 shrink-0 px-[7px] md:px-0 mb-0 md:mb-10 max-lg:flex max-lg:items-center max-lg:justify-center"
            )}
          >
            <Svg icon={icon} className="h-10 w-10" />
          </div>
          <div className="grow shrink-0 basis-[0%] px-[7px] md:px-0">
            <div className="space-y-[7px]">
              <div className="text-base font-medium text-denim">{title}</div>
              <div className="text-sm leading-5 font-normal text-grey">
                +${price[ctx?.isMonthly ? "mo" : "yr"]}/
                {ctx?.isMonthly ? "mo" : "yr"}
              </div>
            </div>
            {content && (
              <div className="text-xs leading-5 font-normal text-denim mt-[3px]">
                {content}
              </div>
            )}
          </div>
        </div>
      </label>
    </div>
  );
};

export default Radio;
