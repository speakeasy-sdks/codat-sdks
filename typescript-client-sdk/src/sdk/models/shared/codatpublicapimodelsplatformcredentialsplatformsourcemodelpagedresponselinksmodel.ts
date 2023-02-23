import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel } from "./codatpublicapimodelsplatformcredentialsplatformsourcemodelpagedresponsehrefmodel";


export class CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel;
}