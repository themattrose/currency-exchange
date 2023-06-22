import { Details, StyledResult, Wrapper } from "./design";
import type { ResultProps } from "./types";

const Result = ({ from, to, amount, result, info }: ResultProps) => {
  return (
    <Wrapper>
      <StyledResult>
        <span>{`${amount} ${from} =`}</span>
        <span className="to">{` ${result} ${to}`}</span>
      </StyledResult>

      {info?.rate && (
        <Details>
          <span>{`1 ${from} = ${info?.rate} ${to}`}</span>
          <span>{`1 ${to} = ${(1 / info?.rate).toFixed(6)} ${from}`}</span>
        </Details>
      )}
    </Wrapper>
  );
};

export { Result };
