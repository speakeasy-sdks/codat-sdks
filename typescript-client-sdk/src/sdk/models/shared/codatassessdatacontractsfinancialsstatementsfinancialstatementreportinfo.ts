import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";


export class CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "companyName" })
  companyName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  currency?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "generatedDate" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  generatedDate?: Date;

  @SpeakeasyMetadata()
  @Expose({ name: "reportName" })
  reportName?: string;
}