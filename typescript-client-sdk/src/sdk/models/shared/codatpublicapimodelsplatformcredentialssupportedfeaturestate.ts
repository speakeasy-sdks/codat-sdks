import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatPublicApiModelsPlatformCredentialsSupportedFeatureState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=featureState" })
  featureState?: string;

  @SpeakeasyMetadata({ data: "json, name=featureType" })
  featureType?: string;
}