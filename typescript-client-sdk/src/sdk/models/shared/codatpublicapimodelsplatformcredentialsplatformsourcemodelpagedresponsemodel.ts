import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseLinksModel } from "./codatpublicapimodelsplatformcredentialsplatformsourcemodelpagedresponselinksmodel";
import { CodatPublicApiModelsPlatformCredentialsPlatformSourceModel } from "./codatpublicapimodelsplatformcredentialsplatformsourcemodel";



// CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseLinksModel;

  @SpeakeasyMetadata({ data: "json, name=pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: CodatPublicApiModelsPlatformCredentialsPlatformSourceModel })
  results?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModel[];

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
