import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CodatPublicApiModelsClientsBankingSettingsModelsBankIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integrationGuid" })
  integrationGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=selected" })
  selected?: boolean;
}
