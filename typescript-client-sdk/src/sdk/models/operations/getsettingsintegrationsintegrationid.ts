import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetSettingsIntegrationsIntegrationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationId" })
  integrationId: string;
}

export class GetSettingsIntegrationsIntegrationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
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