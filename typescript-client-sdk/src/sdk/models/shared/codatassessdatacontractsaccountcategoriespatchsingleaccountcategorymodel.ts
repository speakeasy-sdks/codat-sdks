import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriesconfirmedaccountcategorymodel";


export class CodatAssessDataContractsAccountCategoriesPatchSingleAccountCategoryModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel;
}