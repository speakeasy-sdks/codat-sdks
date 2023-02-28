import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetIntegrationsBankSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetIntegrationsBankSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetIntegrationsBankSettingsSecurity;
}

export class GetIntegrationsBankSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsClientsBankingSettingsModelsBankSettingsDataset?: shared.CodatPublicApiModelsClientsBankingSettingsModelsBankSettingsDataset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}