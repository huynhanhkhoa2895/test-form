import withForm from "@/HOCs/withForm";
import Typo from "@/components/atoms/Typo";
import Switch from "@/components/atoms/Switch";
import { useContext } from "react";
import { IAppContext } from "@/types";
import AppContext from "@/contexts";
import { twMerge } from "tailwind-merge";
import step2 from "@/data/steps/step2.json";
import FormControl from "@/components/organisms/form/formControl/formControl";
import * as yup from "yup";

const schema = yup
  .object({
    plan: yup.string().required("This field is required"),
  })
  .required();

const FormStep2 = withForm(({ control, errors, defaultValue }) => {
  const ctx = useContext<IAppContext | undefined>(AppContext);
  return (
    <>
      {step2 &&
        step2.map((step, index) => (
          <FormControl
            errors={errors[step.name]}
            key={index}
            type={step.type}
            label={step.label}
            name={step.name}
            options={step.options}
            control={control}
            disabled={false}
            defaultValue={defaultValue ? defaultValue[step.name] : null}
          />
        ))}
      <div className={"mt-6 lg:mt-8 py-3 bg-veryLightGrey w-full rounded-lg"}>
        <div className={"mx-auto w-max "}>
          <div className={"flex gap-6 font-[500] items-center"}>
            <Typo
              className={twMerge(!ctx?.isMonthly ? "text-grey" : "text-denim")}
            >
              Monthly
            </Typo>
            <Switch
              onChange={(value: boolean) => {
                if (!value !== ctx?.isMonthly) {
                  ctx?.updateState({ ...ctx, ...{ isMonthly: !value } });
                }
              }}
              value={!ctx?.isMonthly || false}
            />
            <Typo
              className={twMerge(ctx?.isMonthly ? "text-grey" : "text-denim")}
            >
              Yearly
            </Typo>
          </div>
        </div>
      </div>
    </>
  );
}, schema);
export default FormStep2;
