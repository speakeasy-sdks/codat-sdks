import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetIntegrationsPlatformKeyBrandingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
  platformKey: string;
}

export class GetIntegrationsPlatformKeyBrandingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetIntegrationsPlatformKeyBrandingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsPlatformKeyBrandingPathParams;

  @SpeakeasyMetadata()
  security: GetIntegrationsPlatformKeyBrandingSecurity;
}

export class GetIntegrationsPlatformKeyBrandingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsClientsIntegrationBrandingModel?: shared.CodatPublicApiModelsClientsIntegrationBrandingModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}