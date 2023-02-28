import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsPlatformCredentialsSupportedFeatureState } from "./codatpublicapimodelsplatformcredentialssupportedfeaturestate";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsPlatformCredentialsDatatypeFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "datatype" })
  datatype?: string;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsPlatformCredentialsSupportedFeatureState })
  @Expose({ name: "supportedFeatures" })
  @Type(() => CodatPublicApiModelsPlatformCredentialsSupportedFeatureState)
  supportedFeatures?: CodatPublicApiModelsPlatformCredentialsSupportedFeatureState[];
}