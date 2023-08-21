import {useContext, useMemo} from "react";
import FormStep1 from "@/components/organisms/form/step/step1";
import {IAppContext} from "@/types";
import AppContext from "@/contexts";
import ThanksYou from "@/components/organisms/form/step/thanks-you";
import FormStep4 from "@/components/organisms/form/step/step4";
import FormStep3 from "@/components/organisms/form/step/step3";
import FormStep2 from "@/components/organisms/form/step/step2";

const Form = () => {
  const ctx = useContext<IAppContext | undefined>(AppContext);
  const renderStep = useMemo(() => {
    switch (ctx?.navStep?.step) {
      case 1:
        return <FormStep1 submitText={"Next Step"}/>;
      case 2:
        return <FormStep2 submitText={"Next Step"}/>;
      case 3:
        return <FormStep3 submitText={"Next Step"}/>;
      case 4:
        return <FormStep4 submitText={"Confirm"}/>;
      case 5:
        return <ThanksYou/>;
      default:
        return null;
    }
  }, [ctx?.navStep?.step]);
  return <>{renderStep}</>;
};
export default Form;
