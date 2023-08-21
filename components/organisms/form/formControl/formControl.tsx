import { twMerge } from "tailwind-merge";
import Input from "./input";
import { Controller, FieldError } from "react-hook-form";
import Typo from "@/components/atoms/Typo";
import RadioGroup from "@/components/organisms/form/formControl/radioGroup";
import Checkbox from "@/components/atoms/Checkbox";

type Props = {
  type: string;
  label: string;
  name: string;
  control: any;
  disabled: boolean;
  className?: string;
  required?: boolean;
  options?: any;
  errors?: FieldError;
  placeholder?: string;
  defaultValue?: string | null;
};

const RenderController = ({
  onChange,
  type,
  name,
  disabled,
  placeholder,
  errors,
  options,
  defaultValue,
  label,
}: {
  onChange: () => void;
  type: string;
  name: string;
  disabled: boolean;
  placeholder?: string;
  errors?: any;
  options: any;
  defaultValue?: string | null;
  label?: string;
}) => {
  const renderField = () => {
    switch (type) {
      case "checkbox":
        return (
          <Checkbox
            id={name}
            title={label || ""}
            content={placeholder}
            price={options}
            onChange={onChange}
            defaultValue={defaultValue}
          />
        );
      case "radio":
        return (
          <RadioGroup
            onChange={onChange}
            data={options}
            name={name}
            defaultValue={defaultValue}
          />
        );
      default:
        return (
          <Input
            type={type}
            name={name}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            errors={errors}
            defaultValue={defaultValue}
          />
        );
    }
  };
  return <>{renderField()}</>;
};

const FormControl = ({
  label,
  name,
  control,
  className,
  disabled,
  type,
  errors,
  options,
  required,
  placeholder,
  defaultValue,
}: Props) => {
  return (
    <div className={twMerge("mb-2 flex flex-col gap-2", className)}>
      <div className={"flex justify-between"}>
        <div>
          {type !== "checkbox" && (
            <label className={"text-[14px]"}>{label}</label>
          )}
        </div>

        <Typo className={"text-[14px] font-bold text-red"}>
          {errors &&
            (errors.type === "required"
              ? "This field is required"
              : errors.message)}
        </Typo>
      </div>
      <Controller
        control={control as any}
        name={name as any}
        rules={{ required } as any}
        render={({ field: { onChange, value } }) => (
          <RenderController
            type={type}
            name={name}
            errors={errors}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            options={options}
            defaultValue={defaultValue}
            label={label}
          />
        )}
      />
    </div>
  );
};
export default FormControl;
