import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatDataIntegrityContractsSummaryMatchCountSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "matchPercentage" })
  matchPercentage?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "matched" })
  matched?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "total" })
  total?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "unmatched" })
  unmatched?: number;
}