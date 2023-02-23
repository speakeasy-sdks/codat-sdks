import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel } from "./codatassessdatacontractsfinancialsstatementsaccountcategorylevel";
import { CodatAssessDataContractsFinancialsStatementsAccountCategoryStatusEnum } from "./codatassessdatacontractsfinancialsstatementsaccountcategorystatusenum";


export class CodatAssessDataContractsFinancialsStatementsAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=levels", elemType: CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel })
  levels?: CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CodatAssessDataContractsFinancialsStatementsAccountCategoryStatusEnum;
}