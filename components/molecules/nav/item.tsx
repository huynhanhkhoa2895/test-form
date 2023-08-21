import {useContext} from "react";
import AppContext from "@/contexts";
import {IAppContext, NavStep} from "@/types";
import {twMerge} from "tailwind-merge";
import Circle from "@/components/atoms/Circle";
import Typo from "@/components/atoms/Typo";

type Props = {
  step: NavStep;
  label: string;
};
const NavItem = ({step, label}: Props) => {
  const ctx = useContext<IAppContext | undefined>(AppContext);
  return (
    <div
      className={twMerge(
        "flex gap-x-4 cursor-pointer items-center max-lg:justify-center"
      )}
    >
      <Circle
        className={
          (ctx?.navStep?.step === 5 && step.step === 4) || ctx?.navStep?.step === step.step
            ? "bg-oval border-oval text-denim"
            : "bg-transparent border-white text-white"
        }
        content={step.step}
      />

      <div className={"max-lg:hidden uppercase"}>
        <Typo renderAs={"p"} className={"text-[12px] text-lightBlue mb-1"}>
          <>Step {step.step + ""}</>
        </Typo>
        <Typo
          renderAs={"p"}
          className={"text-[14px] font-bold text-white tracking-[0.0625rem]"}
        >
          {label}
        </Typo>
      </div>
    </div>
  );
};
export default NavItem;
