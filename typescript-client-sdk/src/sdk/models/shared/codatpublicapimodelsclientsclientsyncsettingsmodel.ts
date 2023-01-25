import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsSyncSettingsSyncSettingModel } from "./codatpublicapimodelssyncsettingssyncsettingmodel";



export class CodatPublicApiModelsClientsClientSyncSettingsModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=overridesDefaults" })
  overridesDefaults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=settings", elemType: CodatPublicApiModelsSyncSettingsSyncSettingModel })
  settings?: CodatPublicApiModelsSyncSettingsSyncSettingModel[];
}
