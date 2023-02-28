import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsClientsBankingSettingsModelsBankSetting } from "./codatpublicapimodelsclientsbankingsettingsmodelsbanksetting";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsClientsBankingSettingsModelsBankSettingsDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsClientsBankingSettingsModelsBankSetting })
  @Expose({ name: "bankSettings" })
  @Type(() => CodatPublicApiModelsClientsBankingSettingsModelsBankSetting)
  bankSettings?: CodatPublicApiModelsClientsBankingSettingsModelsBankSetting[];
}