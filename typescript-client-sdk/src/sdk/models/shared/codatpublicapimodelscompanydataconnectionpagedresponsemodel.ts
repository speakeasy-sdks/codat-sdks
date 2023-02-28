import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyDataConnection } from "./codatpublicapimodelscompanydataconnection";
import { CodatPublicApiModelsCompanyDataConnectionPagedResponseLinksModel } from "./codatpublicapimodelscompanydataconnectionpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatPublicApiModelsCompanyDataConnectionPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsCompanyDataConnectionPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatPublicApiModelsCompanyDataConnectionPagedResponseLinksModel)
  links?: CodatPublicApiModelsCompanyDataConnectionPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsCompanyDataConnection })
  @Expose({ name: "results" })
  @Type(() => CodatPublicApiModelsCompanyDataConnection)
  results?: CodatPublicApiModelsCompanyDataConnection[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}