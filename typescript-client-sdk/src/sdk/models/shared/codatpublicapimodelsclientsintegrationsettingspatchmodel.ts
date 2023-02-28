import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsClientsIntegrationSettingsPatchModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "oneTimeSync" })
  oneTimeSync?: string;
}