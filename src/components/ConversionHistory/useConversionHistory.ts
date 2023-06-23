import { useEffect, useState } from "react";
import type { Conversion } from "@/@types";
import { useConversionStorage } from "@/hooks/useConversionStorage";

const useConversionHistory = () => {
  const [conversionsData, setConversionsData] = useState<Conversion[]>([]);
  const { getConversions, removeConversion } = useConversionStorage();

  useEffect(() => {
    setConversionsData(getConversions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = (index: number) => {
    removeConversion(index);
    setConversionsData(getConversions());
  };

  return {
    conversionsData,
    onDelete,
  };
};

export { useConversionHistory };
