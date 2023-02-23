import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataIntegrityContractsSummaryMatchAmountSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=matchPercentage" })
  matchPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=matched" })
  matched?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=unmatched" })
  unmatched?: number;
}