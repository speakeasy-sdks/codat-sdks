import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsStatementsAccountCategory } from "./codatassessdatacontractsfinancialsstatementsaccountcategory";



export class CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountCategory" })
  accountCategory?: CodatAssessDataContractsFinancialsStatementsAccountCategory;

  @SpeakeasyMetadata({ data: "json, name=accountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;
}
