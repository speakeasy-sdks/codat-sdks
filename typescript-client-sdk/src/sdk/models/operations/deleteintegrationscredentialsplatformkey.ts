import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteIntegrationsCredentialsPlatformKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
  platformKey: string;
}


export class DeleteIntegrationsCredentialsPlatformKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class DeleteIntegrationsCredentialsPlatformKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteIntegrationsCredentialsPlatformKeyPathParams;

  @SpeakeasyMetadata()
  security: DeleteIntegrationsCredentialsPlatformKeySecurity;
}


export class DeleteIntegrationsCredentialsPlatformKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsPlatformCredentialsPlatformCredentials?: Record<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
