import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesPatchAccountRefModel } from "./codatassessdatacontractsaccountcategoriespatchaccountrefmodel";
import { CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriesconfirmedaccountcategorymodel";



export class CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: CodatAssessDataContractsAccountCategoriesPatchAccountRefModel;

  @SpeakeasyMetadata({ data: "json, name=confirmed" })
  confirmed?: CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel;
}
