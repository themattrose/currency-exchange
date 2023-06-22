import { useForm } from "react-hook-form";
import type { ConvertedData, ConverterForm } from "./types";
import { convertCurrency } from "@/services/currency";
import { useEffect, useState } from "react";
import { Currency } from "@/@enums/currencies";
import { useConversionStorage } from "@/hooks/useConversionStorage";
import { useRouter } from "next/router";

const useConverter = () => {
  const { addConversion } = useConversionStorage();
  const { query } = useRouter();
  const formMethods = useForm<ConverterForm>({
    mode: "onSubmit",
    defaultValues: {},
  });
  const [convertedData, setConvertedData] = useState<ConvertedData>();

  const { setValue, getValues, handleSubmit } = formMethods;

  const onSwitch = () => {
    const from = getValues("from");
    setValue("from", getValues("to"));
    setValue("to", from);
  };

  const onSubmit = async (formData: ConverterForm) => {
    try {
      const { data } = await convertCurrency(formData);
      if (data.success) {
        addConversion({ date: new Date().toISOString(), ...formData });
        setConvertedData(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (query?.amount && query.from && query.to) {
      setValue("amount", query.amount as string);
      setValue("from", query.from as Currency);
      setValue("to", query.to as Currency);
      handleSubmit(onSubmit)();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return {
    formMethods,
    onSwitch,
    onSubmit,
    convertedData,
  };
};

export { useConverter };
