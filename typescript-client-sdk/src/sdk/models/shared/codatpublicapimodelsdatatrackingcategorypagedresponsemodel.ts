import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsDataTrackingCategoryPagedResponseLinksModel } from "./codatpublicapimodelsdatatrackingcategorypagedresponselinksmodel";
import { CodatPublicApiModelsDataTrackingCategory } from "./codatpublicapimodelsdatatrackingcategory";



// CodatPublicApiModelsDataTrackingCategoryPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsDataTrackingCategoryPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatPublicApiModelsDataTrackingCategoryPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatPublicApiModelsDataTrackingCategory })
  results?: CodatPublicApiModelsDataTrackingCategory[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
