import Typo from "@/components/atoms/Typo";
import {ReactNode, useContext} from "react";
import AppContext from "@/contexts";
import {IAppContext} from "@/types";

const FormWrapperContent = ({children}: { children: ReactNode }) => {
  const ctx = useContext<IAppContext | undefined>(AppContext);
  return (
    <div
      className={
        "max-lg:px-2 py-2 relative w-full h-full lg:w-[450px] lg:mx-auto "
      }
    >
      <div
        className={
          "rounded-lg bg-white overflow lg:mt-10 max-lg:py-8 max-lg:px-6 max-lg:-translate-y-24"
        }
      >
        <Typo
          renderAs={"h2"}
          className={"text-[24px] lg:text-[32px] font-bold"}
        >
          {ctx?.navStep.title}
        </Typo>
        <Typo
          renderAs={"h3"}
          className={"text-[16px] text-grey !leading-[1.6] max-lg:mt-2"}
        >
          {ctx?.navStep.description}
        </Typo>
        <div className={"mt-5 lg:mt-9"}>{children}</div>
      </div>
    </div>
  );
};
export default FormWrapperContent;
