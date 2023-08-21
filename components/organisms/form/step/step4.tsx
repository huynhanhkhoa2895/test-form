import withForm from "@/HOCs/withForm";
import Typo from "@/components/atoms/Typo";
import { useCallback, useContext, useEffect, useState } from "react";
import { IAppContext } from "@/types";
import AppContext from "@/contexts";
import dataStep2 from "@/data/steps/step2.json";
import dataStep3 from "@/data/steps/step3.json";

const FormStep4 = withForm(() => {
  const ctx = useContext<IAppContext | undefined>(AppContext);
  const [dataPlan, setPlanData] = useState<any>(null);
  useEffect(() => {
    const step2Data = getContent(2)[0] || null;
    setPlanData(step2Data);
  }, []);
  const getContent = useCallback(
    (step: number) => {
      const formData: any = { ...ctx?.formData };
      let contents = [];
      let data: any = [];
      switch (step) {
        case 2:
          data = dataStep2;
          break;
        case 3:
          data = dataStep3;
          break;
      }
      if (formData && formData[step] && data.length > 0) {
        for (const fieldStep in formData[step]) {
          if (formData[step][fieldStep] && formData) {
            const listContent = data.find(
              (item: any) => item.name === fieldStep
            );
            let itemContent: any;
            if (step === 3) {
              itemContent = listContent;
            } else {
              itemContent = listContent?.options?.find(
                (item: any) => item.name === formData[step][fieldStep]
              );
            }

            if (itemContent) {
              contents.push({
                label: itemContent.label,
                name: itemContent.name,
                price: itemContent.value,
              });
            }
          }
        }
      }

      return contents;
    },
    [ctx]
  );
  const renderItem = () => {
    const contents = getContent(3);
    return contents.map((item, index) => {
      return (
        <div key={index} className={"flex items-center justify-between"}>
          <Typo className={"text-grey leading-[1.4]"}>{item.label}</Typo>
          <Typo className={"text-denim text-[14px]"}>
            +${item.price[ctx?.isMonthly ? "mo" : "yr"]}/
            {ctx?.isMonthly ? "mo" : "yr"}
          </Typo>
        </div>
      );
    });
  };

  const renderTotal = () => {
    let total = 0;
    const data = [...getContent(2), ...getContent(3)] || [];
    data.map((item) => {
      total += item.price[ctx?.isMonthly ? "mo" : "yr"];
    });
    return total;
  };

  return (
    <>
      <div className={"bg-[#F8F9FF] py-4 px-4 lg:px-6 rounded-lg"}>
        <div className={"flex items-center justify-between"}>
          <div>
            {dataPlan && (
              <Typo
                renderAs={"p"}
                className={"text-denim font-[500] text-[16px]"}
              >
                {dataPlan.label} ({ctx?.isMonthly ? "Monthly" : "Yearly"})
              </Typo>
            )}

            <Typo
              renderAs={"p"}
              className={
                "text-grey underline text-[14px] hover:text-primary cursor-pointer"
              }
            >
              Change
            </Typo>
          </div>
          <Typo
            renderAs={"p"}
            className={"text-denim font-bold text-[14px] lg:text-[16px]"}
          >
            ${dataPlan?.price[ctx?.isMonthly ? "mo" : "yr"]}/
            {ctx?.isMonthly ? "mo" : "yr"}
          </Typo>
        </div>
        <div className={"text-grey w-full border-t mt-6 mb-4"} />
        <div className={"flex flex-col gap-4"}>{renderItem()}</div>
      </div>
      <div
        className={"flex items-center justify-between px-4 lg:px-6 mt-[25px]"}
      >
        <Typo className={"text-[14px] text-grey"}>
          Total (per {ctx?.isMonthly ? "month" : "year"})
        </Typo>
        <Typo className={"text-[16px] lg:text-[20px] text-[#483EFF] font-bold"}>
          +${renderTotal()}/{ctx?.isMonthly ? "mo" : "yr"}
        </Typo>
      </div>
    </>
  );
});
export default FormStep4;
