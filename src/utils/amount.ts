export const formatNumber = (value?: number | null, decimal: number = 6) => {
  if (value === undefined || value === null) {
    return "0";
  }

  if (Number.isInteger(value)) {
    return value.toLocaleString();
  } else {
    return value.toFixed(decimal);
  }
};
