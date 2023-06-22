import { PageTitle, StyledContainer } from "@/components/UI";
import { useConversionHistory } from "./useConversionHistory";
import { Table } from "@/components/Table";
import { CONVERSIONS_COLUMNS } from "./config";
import { DeleteForever, RemoveRedEye } from "@mui/icons-material";
import { StyledActions, StyledIconButton } from "./design";
import type { Conversion } from "@/@types";
import Link from "next/link";
import { PageUrl } from "@/@enums/pages";

const ConversionHistory = () => {
  const { conversionsData, onDelete } = useConversionHistory();

  return (
    <StyledContainer>
      <PageTitle>Conversion history</PageTitle>
      <Table
        rows={conversionsData}
        columns={CONVERSIONS_COLUMNS}
        actions={({ from, to, amount }: Conversion, index: number) => (
          <StyledActions>
            <Link
              href={`${PageUrl.CONVERTER}?from=${from}&to=${to}&amount=${amount}`}
              legacyBehavior
            >
              <a>
                <StyledIconButton color="primary" size="small">
                  <RemoveRedEye fontSize="small" color="primary" />
                  View
                </StyledIconButton>
              </a>
            </Link>
            <StyledIconButton
              color="warning"
              size="small"
              onClick={() => onDelete(index)}
            >
              <DeleteForever fontSize="small" color="warning" />
              Delete from history
            </StyledIconButton>
          </StyledActions>
        )}
      />
    </StyledContainer>
  );
};

export { ConversionHistory };
