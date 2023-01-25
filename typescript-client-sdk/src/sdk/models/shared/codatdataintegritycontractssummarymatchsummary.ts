import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatDataIntegrityContractsSummaryMatchAmountSummary } from "./codatdataintegritycontractssummarymatchamountsummary";
import { CodatDataIntegrityContractsSummaryMatchCountSummary } from "./codatdataintegritycontractssummarymatchcountsummary";



export class CodatDataIntegrityContractsSummaryMatchSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=byAmount" })
  byAmount?: CodatDataIntegrityContractsSummaryMatchAmountSummary;

  @SpeakeasyMetadata({ data: "json, name=byCount" })
  byCount?: CodatDataIntegrityContractsSummaryMatchCountSummary;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
