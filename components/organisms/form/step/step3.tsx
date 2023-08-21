import withForm from "@/HOCs/withForm";
import step3 from "@/data/steps/step3.json";
import FormControl from "@/components/organisms/form/formControl/formControl";

const FormStep3 = withForm(({ control, errors, defaultValue }) => {
  return (
    <div className={"flex flex-col gap-y-4"}>
      {step3.map((step, index) => {
        return (
          <FormControl
            errors={errors[step.name]}
            key={index}
            type={step.type}
            label={step.label}
            name={step.name}
            control={control}
            disabled={false}
            options={step.value}
            defaultValue={defaultValue ? defaultValue[step.name] : null}
            placeholder={step.placeholder}
          />
        );
      })}
    </div>
  );
});
export default FormStep3;
