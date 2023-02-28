import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsDataTrackingCategory } from "./codatpublicapimodelsdatatrackingcategory";
import { CodatPublicApiModelsDataTrackingCategoryPagedResponseLinksModel } from "./codatpublicapimodelsdatatrackingcategorypagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatPublicApiModelsDataTrackingCategoryPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsDataTrackingCategoryPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatPublicApiModelsDataTrackingCategoryPagedResponseLinksModel)
  links?: CodatPublicApiModelsDataTrackingCategoryPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsDataTrackingCategory })
  @Expose({ name: "results" })
  @Type(() => CodatPublicApiModelsDataTrackingCategory)
  results?: CodatPublicApiModelsDataTrackingCategory[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}