import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CodatPublicApiModelsClientsBankingSettingsModelsBankIntegration } from "./codatpublicapimodelsclientsbankingsettingsmodelsbankintegration";
import { Expose, Type } from "class-transformer";


export class CodatPublicApiModelsClientsBankingSettingsModelsBankSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: CodatPublicApiModelsClientsBankingSettingsModelsBankIntegration })
  @Expose({ name: "bankIntegrations" })
  @Type(() => CodatPublicApiModelsClientsBankingSettingsModelsBankIntegration)
  bankIntegrations?: CodatPublicApiModelsClientsBankingSettingsModelsBankIntegration[];

  @SpeakeasyMetadata()
  @Expose({ name: "name" })
  name?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "sourceGuid" })
  sourceGuid?: string;
}