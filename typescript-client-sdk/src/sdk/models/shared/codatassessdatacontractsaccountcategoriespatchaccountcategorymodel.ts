import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriesconfirmedaccountcategorymodel";
import { CodatAssessDataContractsAccountCategoriesPatchAccountRefModel } from "./codatassessdatacontractsaccountcategoriespatchaccountrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CodatAssessDataContractsAccountCategoriesPatchAccountRefModel)
  accountRef?: CodatAssessDataContractsAccountCategoriesPatchAccountRefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  @Type(() => CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel)
  confirmed?: CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel;
}