import { formatNumber } from "@/utils/amount";
import { Details, StyledResult, Wrapper } from "./design";
import type { ResultProps } from "./types";

const Result = ({ from, to, amount, result, info }: ResultProps) => {
  return (
    <Wrapper>
      <StyledResult>
        <span>{`${amount} ${from} =`}</span>
        <span className="to">{` ${formatNumber(result, 3)} ${to}`}</span>
      </StyledResult>

      {info?.rate && (
        <Details>
          <span>{`1 ${from} = ${formatNumber(info?.rate)} ${to}`}</span>
          <span>{`1 ${to} = ${formatNumber(1 / info?.rate)} ${from}`}</span>
        </Details>
      )}
    </Wrapper>
  );
};

export { Result };
