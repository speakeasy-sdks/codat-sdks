import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesAccountRefModel } from "./codatassessdatacontractsaccountcategoriesaccountrefmodel";
import { CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriesconfirmedaccountcategorymodel";
import { CodatAssessDataContractsAccountCategoriesSuggestedAccountCategoryModel } from "./codatassessdatacontractsaccountcategoriessuggestedaccountcategorymodel";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsAccountCategoriesAccountCategoriesModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "accountRef" })
  @Type(() => CodatAssessDataContractsAccountCategoriesAccountRefModel)
  accountRef?: CodatAssessDataContractsAccountCategoriesAccountRefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "confirmed" })
  @Type(() => CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel)
  confirmed?: CodatAssessDataContractsAccountCategoriesConfirmedAccountCategoryModel;

  @SpeakeasyMetadata()
  @Expose({ name: "suggested" })
  @Type(() => CodatAssessDataContractsAccountCategoriesSuggestedAccountCategoryModel)
  suggested?: CodatAssessDataContractsAccountCategoriesSuggestedAccountCategoryModel;
}