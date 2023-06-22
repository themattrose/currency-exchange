import { LocalStorageKey } from "@/@enums/localStorage";
import type { Conversion } from "@/@types";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

const useConversionStorage = () => {
  const addConversion = (conversion: Conversion) => {
    const conversions = getConversions();
    conversions.push({ ...conversion });
    setLocalStorage(LocalStorageKey.CONVERSIONS, conversions);
  };

  const removeConversion = (index: number) => {
    const conversions = getConversions();
    conversions.splice(index, 1);
    setLocalStorage(LocalStorageKey.CONVERSIONS, conversions);
  };

  const getConversions = () => {
    const conversions = getLocalStorage<Conversion[]>(
      LocalStorageKey.CONVERSIONS
    );

    return conversions || [];
  };

  return { getConversions, addConversion, removeConversion };
};

export { useConversionStorage };
