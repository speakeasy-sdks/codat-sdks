import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutIntegrationsBankSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutIntegrationsBankSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatPublicApiModelsClientsBankingSettingsModelsBankSettingsDataset;

  @SpeakeasyMetadata()
  security: PutIntegrationsBankSettingsSecurity;
}


export class PutIntegrationsBankSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsClientsBankingSettingsModelsBankSettingsDataset?: shared.CodatPublicApiModelsClientsBankingSettingsModelsBankSettingsDataset;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
