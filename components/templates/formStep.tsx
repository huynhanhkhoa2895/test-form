import {twMerge} from "tailwind-merge";
import NavGroup from "@/components/organisms/navGroup";
import Form from "@/components/organisms/form";

const FormStep = () => {
  return (
    <div
      className={twMerge(
        "lg:bg-white lg:p-4 flex max-lg:flex-col h-full lg:h-[600px] w-full"
      )}
    >
      <div
        className={
          "relative overflow-hidden lg:rounded-lg lg:py-10 lg:px-8 bg-no-repeat bg-image-oval-mobile lg:bg-image-oval bg-center bg-cover lg:w-full lg:max-w-[274px]"
        }
      >
        <NavGroup/>
      </div>
      <Form/>
    </div>
  );
};
export default FormStep;
