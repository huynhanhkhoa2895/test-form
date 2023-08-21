import {useForm} from "react-hook-form";
import React, {FC, ReactNode, useContext, useEffect} from "react";
import {IAppContext} from "@/types";
import AppContext from "@/contexts";
import ButtonSubmitGroup from "@/components/molecules/form/buttonSubmitGroup";
import FormWraperContent from "@/components/organisms/form/formWraperContent";
import {yupResolver} from "@hookform/resolvers/yup";
import dataStep from "@/data/steps/navStep.json";
import * as Yup from "yup";

type Props = {
  submitText?: string | ReactNode;
};

const withForm = (FieldsComponent: FC<any>, schema?: Yup.ObjectSchema<any>) => {
  // eslint-disable-next-line react/display-name
  return ({submitText}: Props) => {
    const {
      control,
      handleSubmit,
      formState: {errors},
      watch,
    } = useForm(
      schema && {
        resolver: yupResolver(schema),
      }
    );
    const ctx = useContext<IAppContext | undefined>(AppContext);

    useEffect(() => {
    }, []);

    const handleClickBack = () => {
      const step = ctx?.navStep?.step || 1;
      const prevStep: any = dataStep.find(
        (item) => item.step === (step - 1 > 1 ? step - 1 : 1)
      );
      ctx?.updateState({
        ...ctx,
        ...{
          navStep: prevStep,
        },
      });
    };

    const submit = async (data: any) => {

      const formData: any = ctx?.formData || null;
      const step = ctx?.navStep?.step || 1;
      const nextStep: any = dataStep.find((item) => item.step === step + 1);
      if (step >= 4) {
        ctx?.updateState({
          ...ctx,
          ...{
            navStep: {step: 5},
          },
        });
      } else {
        let newFormData: { [key in string]: string } = {};
        for (const key in data) {
          newFormData[key] = data[key];
        }
        formData[step] = newFormData;
        ctx?.updateState({
          ...ctx,
          ...{
            formData,
            navStep: nextStep,
          },
        });
      }

    };

    const onError = (e: any) => {
      console.log("onError", e);
    };

    return (
      <>
        <form
          className={"w-full relative"}
          onSubmit={handleSubmit(submit, onError)}
        >
          <FormWraperContent>
            <FieldsComponent
              control={control}
              errors={errors}
              defaultValue={
                ctx?.formData && (ctx.formData as any)[ctx?.navStep?.step]
                  ? (ctx.formData as any)[ctx?.navStep?.step]
                  : null
              }
            />
          </FormWraperContent>
          {
            ctx?.navStep && ctx?.navStep?.step < 5 && (
              <ButtonSubmitGroup
                handleClickBack={handleClickBack}
                step={ctx?.navStep?.step || 1}
                submitText={submitText || ""}
              />
            )
          }

        </form>
      </>
    );
  };
};
export default withForm;
