import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsClientsIntegrationSettingsModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "integrationId" })
  integrationId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "oneTimeSync" })
  oneTimeSync?: string;
}