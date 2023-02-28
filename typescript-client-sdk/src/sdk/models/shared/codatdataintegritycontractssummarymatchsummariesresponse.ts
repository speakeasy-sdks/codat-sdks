import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataIntegrityContractsSummaryMatchSummary } from "./codatdataintegritycontractssummarymatchsummary";
import { Expose, Type } from "class-transformer";


export class CodatDataIntegrityContractsSummaryMatchSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatDataIntegrityContractsSummaryMatchSummary })
  @Expose({ name: "summaries" })
  @Type(() => CodatDataIntegrityContractsSummaryMatchSummary)
  summaries?: CodatDataIntegrityContractsSummaryMatchSummary[];
}