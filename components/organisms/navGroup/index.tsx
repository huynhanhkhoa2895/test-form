import NavItem from "@/components/molecules/nav/item";
import { NavStep } from "@/types";
import dataStep from "@/data/steps/navStep.json";

const NavGroup = () => {
  return (
    <div className={"w-full "}>
      <div
        className={
          "max-lg:w-[180px] max-lg:flex max-lg:justify-center mx-auto max-lg:mt-8 max-lg:h-[172px]"
        }
      >
        {dataStep.map((step: NavStep) => (
          <div className={"w-full mb-8"} key={step.step}>
            <NavItem step={step} label={step.label || ""} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default NavGroup;
