import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsPlatformCredentialsSupportedFeatureState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "featureState" })
  featureState?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "featureType" })
  featureType?: string;
}