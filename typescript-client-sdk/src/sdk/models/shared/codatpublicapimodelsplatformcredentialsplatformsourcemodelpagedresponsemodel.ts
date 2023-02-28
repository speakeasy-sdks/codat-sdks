import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsPlatformCredentialsPlatformSourceModel } from "./codatpublicapimodelsplatformcredentialsplatformsourcemodel";
import { CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseLinksModel } from "./codatpublicapimodelsplatformcredentialsplatformsourcemodelpagedresponselinksmodel";
import { Expose, Type } from "class-transformer";


// CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseModel
/** 
 * Used to represent what can be returned by an endpoint that supports paging.
 * Usable with the [ProducesResponseType] attribute on a controller action.
**/
export class CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "_links" })
  @Type(() => CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseLinksModel)
  links?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseLinksModel;

  @SpeakeasyMetadata()
  @Expose({ name: "pageNumber" })
  pageNumber?: number;

  @SpeakeasyMetadata()
  @Expose({ name: "pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsPlatformCredentialsPlatformSourceModel })
  @Expose({ name: "results" })
  @Type(() => CodatPublicApiModelsPlatformCredentialsPlatformSourceModel)
  results?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModel[];

  @SpeakeasyMetadata()
  @Expose({ name: "totalResults" })
  totalResults?: number;
}