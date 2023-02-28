import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";


export class CodatPublicApiModelsClientsBankingSettingsModelsBankIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "integrationGuid" })
  integrationGuid?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "selected" })
  selected?: boolean;
}