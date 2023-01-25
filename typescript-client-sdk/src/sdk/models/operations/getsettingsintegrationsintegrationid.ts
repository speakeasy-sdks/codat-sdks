import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSettingsIntegrationsIntegrationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationId" })
  integrationId: string;
}


export class GetSettingsIntegrationsIntegrationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetSettingsIntegrationsIntegrationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSettingsIntegrationsIntegrationIdPathParams;

  @SpeakeasyMetadata()
  security: GetSettingsIntegrationsIntegrationIdSecurity;
}


export class GetSettingsIntegrationsIntegrationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsClientsIntegrationSettingsModel?: shared.CodatPublicApiModelsClientsIntegrationSettingsModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
