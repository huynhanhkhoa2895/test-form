import Button from "@/components/atoms/Button";
import { twMerge } from "tailwind-merge";
import React, { ReactNode } from "react";

const ButtonSubmitGroup = ({
  submitText,
  step,
  handleClickBack,
}: {
  submitText: string | ReactNode;
  step: number;
  handleClickBack: any;
}) => {
  return (
    <div
      className={"w-full fixed lg:absolute bottom-0 left-0 max-lg:p-4 bg-white"}
    >
      <div className={"flex justify-between lg:w-[450px] lg:mx-auto "}>
        <div>
          {step > 1 && (
            <Button
              type={"button"}
              variant={"outline"}
              handleClick={handleClickBack}
            >
              Go Back
            </Button>
          )}
        </div>

        <Button
          type={"submit"}
          className={twMerge("flex gap-1 items-center")}
          variant={step === 4 ? "primary" : "secondary"}
        >
          {submitText}
        </Button>
      </div>
    </div>
  );
};
export default ButtonSubmitGroup;
