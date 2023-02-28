import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo } from "./codatassessdatacontractsfinancialsstatementsfinancialstatementreportinfo";
import { CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem } from "./codatassessdatacontractsfinancialsstatementsfinancialstatementreportitem";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "reportInfo" })
  @Type(() => CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo)
  reportInfo?: CodatAssessDataContractsFinancialsStatementsFinancialStatementReportInfo;

  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem })
  @Expose({ name: "reportItems" })
  @Type(() => CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem)
  reportItems?: CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem[];
}