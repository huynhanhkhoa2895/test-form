import Radio from "@/components/atoms/Radio";
import { FieldSelectData } from "@/types";
import { useEffect, useState } from "react";

type Props = {
  data: FieldSelectData[];
  name: string;
  onChange: any;
  defaultValue?: string | null;
};

const RadioGroup = ({ data, name, onChange, defaultValue }: Props) => {
  const [crrValue, setCrrValue] = useState<string | null>(null);

  useEffect(() => {
    if (defaultValue) {
      onChange(defaultValue);
      setCrrValue(defaultValue);
    }
  }, []);
  const handleOnChange = (value: string) => {
    onChange(value);
    setCrrValue(value);
  };

  return (
    <div className={"flex max-lg:flex-col lg:gap-[18px] gap-3"}>
      {data.map((item: FieldSelectData, key: number) => {
        return (
          <Radio
            key={key}
            id={item.name}
            value={item.name}
            name={name}
            icon={("plan-" + item.name) as any}
            title={item?.label || ""}
            content={item.placeholder}
            price={item.value}
            onChange={handleOnChange}
            active={crrValue === item.name}
          />
        );
      })}
    </div>
  );
};
export default RadioGroup;
