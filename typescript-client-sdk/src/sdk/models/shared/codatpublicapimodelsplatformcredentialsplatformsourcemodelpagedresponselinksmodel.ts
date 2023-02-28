import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel } from "./codatpublicapimodelsplatformcredentialsplatformsourcemodelpagedresponsehrefmodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseLinksModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "current" })
  @Type(() => CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel)
  current?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "next" })
  @Type(() => CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel)
  next?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "previous" })
  @Type(() => CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel)
  previous?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel;

  @SpeakeasyMetadata()
  @Expose({ name: "self" })
  @Type(() => CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel)
  self?: CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseHrefModel;
}