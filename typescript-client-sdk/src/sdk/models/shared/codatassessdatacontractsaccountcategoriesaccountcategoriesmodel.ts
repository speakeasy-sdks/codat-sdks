import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesAccountRefModel } from "./codatassessdatacontractsaccountcategoriesaccountrefmodel";
import { CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriesconfirmedaccountcategorymodel";
import { CodatAssessDataContractsAccountCategoriesSuggestedAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriessuggestedaccountcategorymodel";



export class CodatAssessDataContractsAccountCategoriesAccountCategoriesModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: CodatAssessDataContractsAccountCategoriesAccountRefModel;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel;

  @SpeakeasyMetadata({ data: "json, name=suggested" })
  suggested?: CodatAssessDataContractsAccountCategoriesSuggestedAccountCategoryModel;
}
