import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetCompaniesCompanyIdSettingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdSettingsPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdSettingsSecurity;
}


export class GetCompaniesCompanyIdSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsCompanyCompanySettings?: shared.CodatPublicApiModelsCompanyCompanySettings;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
