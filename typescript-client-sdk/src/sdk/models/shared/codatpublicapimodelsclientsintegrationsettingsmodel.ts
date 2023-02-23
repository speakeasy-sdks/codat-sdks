import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";


export class CodatPublicApiModelsClientsIntegrationSettingsModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationId" })
  integrationId?: string;

  @SpeakeasyMetadata({ data: "json, name=oneTimeSync" })
  oneTimeSync?: string;
}