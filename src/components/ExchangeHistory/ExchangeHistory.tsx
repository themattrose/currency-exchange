import { Table } from "@/components/Table";
import {
  Actions,
  Duration,
  StyledRadioGroup,
  TableGroup,
  Wrapper,
} from "./design";
import { type ExchangeHistoryProps } from "./types";
import { RATES_COLUMNS, STATISTICS_COLUMNS } from "./config";
import { useExchangeHistory } from "./useExchangeHistory";
import { SectionTitle } from "@/components/UI";
import { FormControlLabel, Radio } from "@mui/material";
import { AutocompleteDropdown } from "@/components/AutocompleteDropdown";
import { DURATION_ITEMS, VIEW_ITEMS } from "@/constants";
import { View } from "@/@enums";
import { LineChart } from "../LineChart";
import { COLORS } from "@/constants/colors";

const ExchangeHistory = ({ base, symbol }: ExchangeHistoryProps) => {
  const { ratesData, statisticsData, duration, setDuration, view, setView } =
    useExchangeHistory({
      base,
      symbol,
    });

  return (
    <Wrapper>
      <SectionTitle>Exchange History</SectionTitle>
      <Actions>
        <Duration>
          <AutocompleteDropdown
            onChange={(value) => setDuration(value as number)}
            options={DURATION_ITEMS}
            label="Duration"
            value={DURATION_ITEMS.find(({ value }) => value === duration)}
          />
        </Duration>
        <StyledRadioGroup defaultValue={view}>
          {VIEW_ITEMS.map(({ label, value }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={label}
              onClick={() => setView(value)}
            />
          ))}
        </StyledRadioGroup>
      </Actions>
      {view === View.TABLE && (
        <TableGroup>
          <Table rows={ratesData} columns={RATES_COLUMNS} />
          <Table rows={statisticsData} columns={STATISTICS_COLUMNS} />
        </TableGroup>
      )}
      {view === View.CHART && (
        <LineChart
          title="Timeseries"
          labels={ratesData.map(({ date }) => date)}
          values={ratesData.map(({ value }) => value)}
          borderColor={COLORS.PRIMARY}
        />
      )}
    </Wrapper>
  );
};

export { ExchangeHistory };
