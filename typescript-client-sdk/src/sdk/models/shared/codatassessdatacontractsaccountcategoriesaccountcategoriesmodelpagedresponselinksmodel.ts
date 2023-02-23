import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel } from "./codatassessdatacontractsaccountcategoriesaccountcategoriesmodelpagedresponsehrefmodel";


export class CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseHrefModel;
}