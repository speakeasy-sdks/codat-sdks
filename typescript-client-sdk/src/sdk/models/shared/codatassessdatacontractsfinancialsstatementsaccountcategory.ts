import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel } from "./codatassessdatacontractsfinancialsstatementsaccountcategorylevel";
import { CodatAssessDataContractsFinancialsStatementsAccountCategoryStatusEnum } from "./codatassessdatacontractsfinancialsstatementsaccountcategorystatusenum";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsFinancialsStatementsAccountCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel })
  @Expose({ name: "levels" })
  @Type(() => CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel)
  levels?: CodatAssessDataContractsFinancialsStatementsAccountCategoryLevel[];

  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  status?: CodatAssessDataContractsFinancialsStatementsAccountCategoryStatusEnum;
}