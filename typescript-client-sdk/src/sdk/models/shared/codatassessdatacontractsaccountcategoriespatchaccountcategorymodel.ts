import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriesconfirmedaccountcategorymodel";
import { CodatAssessDataContractsAccountCategoriesPatchAccountRefModel } from "./codatassessdatacontractsaccountcategoriespatchaccountrefmodel";


export class CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: CodatAssessDataContractsAccountCategoriesPatchAccountRefModel;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel;
}