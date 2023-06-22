import { PageTitle, StyledContainer } from "@/components/UI";
import { useConverter } from "./useConverter";
import { Divider, TextField } from "@mui/material";
import {
  StyledSwitchButton,
  Form,
  FieldWrapper,
  StyledSubmitButton,
} from "./design";
import CompareArrows from "@mui/icons-material/CompareArrows";
import { AutocompleteDropdown } from "@/components/AutocompleteDropdown/AutocompleteDropdown";
import { Controller } from "react-hook-form";
import { Result } from "@/components/Result";
import { ExchangeHistory } from "@/components/ExchangeHistory";
import { CURRENCY_ITEMS } from "@/constants";

const Converter = () => {
  const { formMethods, onSwitch, onSubmit, convertedData } = useConverter();
  const { handleSubmit, register, control, getValues } = formMethods;

  return (
    <StyledContainer>
      <PageTitle>I want to convert</PageTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FieldWrapper width="40rem">
          <TextField
            label="Amount"
            variant="standard"
            type="number"
            autoFocus
            {...register("amount", { required: true })}
          />
        </FieldWrapper>
        <FieldWrapper>
          <Controller
            name="from"
            control={control}
            render={({ field: { onChange, value } }) => (
              <AutocompleteDropdown
                onChange={onChange}
                options={CURRENCY_ITEMS}
                value={{ title: value, value }}
                label="From"
              />
            )}
          />
        </FieldWrapper>
        <StyledSwitchButton
          variant="contained"
          color="inherit"
          onClick={onSwitch}
        >
          <CompareArrows />
        </StyledSwitchButton>
        <FieldWrapper>
          <Controller
            name="to"
            control={control}
            render={({ field: { onChange, value } }) => (
              <AutocompleteDropdown
                onChange={onChange}
                options={CURRENCY_ITEMS}
                value={{ title: value, value }}
                label="To"
              />
            )}
          />
        </FieldWrapper>
        <StyledSubmitButton variant="contained" type="submit">
          Convert
        </StyledSubmitButton>
      </Form>
      {!!convertedData?.result && (
        <>
          <Result
            result={convertedData.result}
            info={convertedData.info}
            {...getValues()}
          />
          <Divider />
          <ExchangeHistory base={getValues("from")} symbol={getValues("to")} />
        </>
      )}
    </StyledContainer>
  );
};

export { Converter };
