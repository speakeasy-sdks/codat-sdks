import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyDataConnection } from "./codatpublicapimodelscompanydataconnection";
import { CodatPublicApiModelsCompanyDataConnectionPagedResponseLinksModel } from "./codatpublicapimodelscompanydataconnectionpagedresponselinksmodel";


// CodatPublicApiModelsCompanyDataConnectionPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsCompanyDataConnectionPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatPublicApiModelsCompanyDataConnectionPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatPublicApiModelsCompanyDataConnection })
  results?: CodatPublicApiModelsCompanyDataConnection[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}