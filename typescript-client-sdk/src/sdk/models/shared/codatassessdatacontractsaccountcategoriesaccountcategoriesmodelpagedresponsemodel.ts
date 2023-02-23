import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesAccountCategoriesModel } from "./codatassessdatacontractsaccountcategoriesaccountcategoriesmodel";
import { CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseLinksModel } from "./codatassessdatacontractsaccountcategoriesaccountcategoriesmodelpagedresponselinksmodel";


// CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatAssessDataContractsAccountCategoriesAccountCategoriesModel })
  results?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModel[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}