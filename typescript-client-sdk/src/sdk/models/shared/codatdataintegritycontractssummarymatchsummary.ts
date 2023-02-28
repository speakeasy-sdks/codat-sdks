import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatDataIntegrityContractsSummaryMatchAmountSummary } from "./codatdataintegritycontractssummarymatchamountsummary";
import { CodatDataIntegrityContractsSummaryMatchCountSummary } from "./codatdataintegritycontractssummarymatchcountsummary";
import { Expose, Type } from "class-transformer";


export class CodatDataIntegrityContractsSummaryMatchSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "byAmount" })
  @Type(() => CodatDataIntegrityContractsSummaryMatchAmountSummary)
  byAmount?: CodatDataIntegrityContractsSummaryMatchAmountSummary;

  @SpeakeasyMetadata()
  @Expose({ name: "byCount" })
  @Type(() => CodatDataIntegrityContractsSummaryMatchCountSummary)
  byCount?: CodatDataIntegrityContractsSummaryMatchCountSummary;

  @SpeakeasyMetadata()
  @Expose({ name: "type" })
  type?: string;
}