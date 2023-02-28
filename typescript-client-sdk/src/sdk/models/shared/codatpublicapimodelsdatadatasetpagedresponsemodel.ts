import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsDataDataSet } from "./codatpublicapimodelsdatadataset";
import { CodatPublicApiModelsDataDataSetPagedResponseLinksModel } from "./codatpublicapimodelsdatadatasetpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatPublicApiModelsDataDataSetPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsDataDataSetPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatPublicApiModelsDataDataSetPagedResponseLinksModel)
  links?: CodatPublicApiModelsDataDataSetPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsDataDataSet })
  @Expose({ name: "results" })
  @Type(() => CodatPublicApiModelsDataDataSet)
  results?: CodatPublicApiModelsDataDataSet[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}