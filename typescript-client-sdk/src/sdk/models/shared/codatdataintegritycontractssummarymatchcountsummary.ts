import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatDataIntegrityContractsSummaryMatchCountSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchPercentage" })
  matchPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=matched" })
  matched?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=unmatched" })
  unmatched?: number;
}