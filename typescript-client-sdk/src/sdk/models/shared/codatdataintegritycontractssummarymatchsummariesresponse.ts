import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataIntegrityContractsSummaryMatchSummary } from "./codatdataintegritycontractssummarymatchsummary";


export class CodatDataIntegrityContractsSummaryMatchSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=summaries", elemType: CodatDataIntegrityContractsSummaryMatchSummary })
  summaries?: CodatDataIntegrityContractsSummaryMatchSummary[];
}