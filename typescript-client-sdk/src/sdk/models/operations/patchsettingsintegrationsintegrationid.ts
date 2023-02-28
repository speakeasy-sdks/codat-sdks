import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PatchSettingsIntegrationsIntegrationIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=integrationId" })
  integrationId: string;
}

export class PatchSettingsIntegrationsIntegrationIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PatchSettingsIntegrationsIntegrationIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchSettingsIntegrationsIntegrationIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatPublicApiModelsClientsIntegrationSettingsPatchModel;

  @SpeakeasyMetadata()
  security: PatchSettingsIntegrationsIntegrationIdSecurity;
}

export class PatchSettingsIntegrationsIntegrationIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsClientsIntegrationSettingsModel?: shared.CodatPublicApiModelsClientsIntegrationSettingsModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}