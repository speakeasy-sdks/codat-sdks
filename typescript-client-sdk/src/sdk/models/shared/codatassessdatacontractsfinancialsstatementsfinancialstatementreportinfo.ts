import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=generatedDate" })
  generatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=reportName" })
  reportName?: string;
}