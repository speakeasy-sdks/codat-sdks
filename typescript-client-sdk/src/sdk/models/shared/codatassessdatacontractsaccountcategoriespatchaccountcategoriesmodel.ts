import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriespatchaccountcategorymodel";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsAccountCategoriesPatchAccountCategoriesModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel })
  @Expose({ name: "categories" })
  @Type(() => CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel)
  categories?: CodatAssessDataContractsAccountCategoriesPatchAccountCategoryModel[];
}