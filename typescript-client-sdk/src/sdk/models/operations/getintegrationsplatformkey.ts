import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsPlatformKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
  platformKey: string;
}


export class GetIntegrationsPlatformKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetIntegrationsPlatformKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetIntegrationsPlatformKeyPathParams;

  @SpeakeasyMetadata()
  security: GetIntegrationsPlatformKeySecurity;
}


export class GetIntegrationsPlatformKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsPlatformCredentialsPlatformSourceModel?: shared.CodatPublicApiModelsPlatformCredentialsPlatformSourceModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
