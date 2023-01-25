import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsPlatformCredentialsSupportedFeatureState } from "./codatpublicapimodelsplatformcredentialssupportedfeaturestate";



export class CodatPublicApiModelsPlatformCredentialsDatatypeFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datatype" })
  datatype?: string;

  @SpeakeasyMetadata({ data: "json, name=supportedFeatures", elemType: CodatPublicApiModelsPlatformCredentialsSupportedFeatureState })
  supportedFeatures?: CodatPublicApiModelsPlatformCredentialsSupportedFeatureState[];
}
