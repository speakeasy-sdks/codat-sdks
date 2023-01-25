import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyCompanyPagedResponseLinksModel } from "./codatpublicapimodelscompanycompanypagedresponselinksmodel";
import { CodatPublicApiModelsCompanyCompany } from "./codatpublicapimodelscompanycompany";



// CodatPublicApiModelsCompanyCompanyPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsCompanyCompanyPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatPublicApiModelsCompanyCompanyPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatPublicApiModelsCompanyCompany })
  results?: CodatPublicApiModelsCompanyCompany[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
