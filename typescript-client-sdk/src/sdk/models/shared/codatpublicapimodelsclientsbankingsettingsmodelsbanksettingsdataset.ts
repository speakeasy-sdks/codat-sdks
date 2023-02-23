import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsClientsBankingSettingsModelsBankSetting } from "./codatpublicapimodelsclientsbankingsettingsmodelsbanksetting";


export class CodatPublicApiModelsClientsBankingSettingsModelsBankSettingsDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankSettings", elemType: CodatPublicApiModelsClientsBankingSettingsModelsBankSetting })
  bankSettings?: CodatPublicApiModelsClientsBankingSettingsModelsBankSetting[];
}