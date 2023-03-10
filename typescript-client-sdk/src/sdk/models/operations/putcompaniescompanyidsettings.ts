import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCompaniesCompanyIdSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class PutCompaniesCompanyIdSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutCompaniesCompanyIdSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCompaniesCompanyIdSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatClientsApiClientContractCompanySettings;

  @SpeakeasyMetadata()
  security: PutCompaniesCompanyIdSettingsSecurity;
}


export class PutCompaniesCompanyIdSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsCompanyCompanySettings?: shared.CodatPublicApiModelsCompanyCompanySettings;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
