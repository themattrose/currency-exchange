import { Autocomplete, TextField } from "@mui/material";
import type { AutocompleteDropdownProps } from "./types";
import type { Option } from "@/@types";
import { Currency } from "@/@enums/currencies";

const AutocompleteDropdown = <T extends Currency | number>({
  label,
  value,
  options,
  onChange,
}: AutocompleteDropdownProps<T>) => {
  return (
    <>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.title || ""}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        onChange={(_, newValue: Option<T> | null) => {
          newValue && onChange(newValue.value);
        }}
        renderInput={(params) => (
          <TextField {...params} label={label} variant="standard" />
        )}
        value={value}
      />
    </>
  );
};

export { AutocompleteDropdown };
