import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsClientsIntegrationBrandingModelImageModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "alt" })
  alt?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "src" })
  src?: string;
}