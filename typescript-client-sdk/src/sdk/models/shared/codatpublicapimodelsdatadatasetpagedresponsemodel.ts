import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsDataDataSet } from "./codatpublicapimodelsdatadataset";
import { CodatPublicApiModelsDataDataSetPagedResponseLinksModel } from "./codatpublicapimodelsdatadatasetpagedresponselinksmodel";


// CodatPublicApiModelsDataDataSetPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsDataDataSetPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatPublicApiModelsDataDataSetPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatPublicApiModelsDataDataSet })
  results?: CodatPublicApiModelsDataDataSet[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}