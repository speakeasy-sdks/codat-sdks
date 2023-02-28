import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel } from "./codatassessdatacontractsaccountcategoriesaccountcategoriesmodelpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel)
  current?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel)
  next?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel)
  previous?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel)
  self?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel;
}