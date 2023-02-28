import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatAssessDataContractsAccountCategoriesAccountCategoriesModel } from "./codatassessdatacontractsaccountcategoriesaccountcategoriesmodel";
import { CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseLinksModel } from "./codatassessdatacontractsaccountcategoriesaccountcategoriesmodelpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseLinksModel)
  links?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModelPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatAssessDataContractsAccountCategoriesAccountCategoriesModel })
  @Expose({ name: "results" })
  @Type(() => CodatAssessDataContractsAccountCategoriesAccountCategoriesModel)
  results?: CodatAssessDataContractsAccountCategoriesAccountCategoriesModel[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}