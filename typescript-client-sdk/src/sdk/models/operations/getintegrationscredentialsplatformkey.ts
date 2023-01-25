import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsCredentialsPlatformKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
  platformKey: string;
}


export class GetIntegrationsCredentialsPlatformKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetIntegrationsCredentialsPlatformKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsCredentialsPlatformKeyPathParams;

  @SpeakeasyMetadata()
  security: GetIntegrationsCredentialsPlatformKeySecurity;
}


export class GetIntegrationsCredentialsPlatformKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsPlatformCredentialsPlatformCredentials?: Record<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
