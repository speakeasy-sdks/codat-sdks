import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsStatementsAccountCategory } from "./codatassessdatacontractsfinancialsstatementsaccountcategory";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsFinancialsStatementsFinancialStatementReportItem extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountCategory" })
  @Type(() => CodatAssessDataContractsFinancialsStatementsAccountCategory)
  accountCategory?: CodatAssessDataContractsFinancialsStatementsAccountCategory;

  @SpeakeasyMetadata()
  @Expose({ name: "accountId" })
  accountId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "accountName" })
  accountName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "balance" })
  balance?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "date" })
  date?: string;
}