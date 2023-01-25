import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo } from "./codatassessdatacontractsfinancialsstatementsfinancialstatementreportinfo";
import { CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem } from "./codatassessdatacontractsfinancialsstatementsfinancialstatementreportitem";



export class CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportInfo" })
  reportInfo?: CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo;

  @SpeakeasyMetadata({ data: "json, name=reportItems", elemType: CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem })
  reportItems?: CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem[];
}
