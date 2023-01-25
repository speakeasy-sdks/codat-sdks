import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutIntegrationsCredentialsPlatformKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
  platformKey: string;
}


export class PutIntegrationsCredentialsPlatformKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutIntegrationsCredentialsPlatformKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutIntegrationsCredentialsPlatformKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Record<string, string>;

  @SpeakeasyMetadata()
  security: PutIntegrationsCredentialsPlatformKeySecurity;
}


export class PutIntegrationsCredentialsPlatformKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsPlatformCredentialsPlatformCredentials?: Record<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
