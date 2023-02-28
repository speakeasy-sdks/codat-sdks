import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsCompanyCompany } from "./codatpublicapimodelscompanycompany";
import { CodatPublicApiModelsCompanyCompanyPagedResponseLinksModel } from "./codatpublicapimodelscompanycompanypagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatPublicApiModelsCompanyCompanyPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsCompanyCompanyPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatPublicApiModelsCompanyCompanyPagedResponseLinksModel)
  links?: CodatPublicApiModelsCompanyCompanyPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsCompanyCompany })
  @Expose({ name: "results" })
  @Type(() => CodatPublicApiModelsCompanyCompany)
  results?: CodatPublicApiModelsCompanyCompany[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}