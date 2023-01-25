import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CodatPublicApiModelsClientsBankingSettingsModelsBankIntegration } from "./codatpublicapimodelsclientsbankingsettingsmodelsbankintegration";



export class CodatPublicApiModelsClientsBankingSettingsModelsBankSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bankIntegrations", elemType: CodatPublicApiModelsClientsBankingSettingsModelsBankIntegration })
  bankIntegrations?: CodatPublicApiModelsClientsBankingSettingsModelsBankIntegration[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceGuid" })
  sourceGuid?: string;
}
