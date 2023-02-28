import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriesconfirmedaccountcategorymodel";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsAccountCategoriesPatchSingleAccountCategoryModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  @Type(() => CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel)
  confirmed?: CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel;
}