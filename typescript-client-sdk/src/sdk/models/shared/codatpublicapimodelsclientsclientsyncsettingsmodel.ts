import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsSyncSettingsSyncSettingModel } from "./codatpublicapimodelssyncsettingssyncsettingmodel";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsClientsClientSyncSettingsModel extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "clientId" })
  clientId?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "overridesDefaults" })
  overridesDefaults?: boolean;

  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsSyncSettingsSyncSettingModel })
  @Expose({ name: "settings" })
  @Type(() => CodatPublicApiModelsSyncSettingsSyncSettingModel)
  settings?: CodatPublicApiModelsSyncSettingsSyncSettingModel[];
}