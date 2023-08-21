import withForm from "@/HOCs/withForm";
import FormControl from "@/components/organisms/form/formControl/formControl";
import step1 from "@/data/steps/step1.json";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    phone: yup.string().required("This field is required"),
  })
  .required();

const FormStep1 = withForm(({ control, errors, defaultValue }) => {
  return (
    <div className={"flex flex-col gap-y-4 lg:gap-y-6"}>
      {step1 &&
        step1.map((step, index) => (
          <FormControl
            errors={errors[step.name]}
            key={index}
            type={step.type}
            label={step.label}
            name={step.name}
            control={control}
            placeholder={step.placeholder}
            disabled={false}
            defaultValue={defaultValue ? defaultValue[step.name] : null}
          />
        ))}
    </div>
  );
}, schema);
export default FormStep1;
