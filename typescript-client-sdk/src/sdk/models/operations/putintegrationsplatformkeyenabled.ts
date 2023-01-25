import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutIntegrationsPlatformKeyEnabledPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
  platformKey: string;
}


export class PutIntegrationsPlatformKeyEnabledSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutIntegrationsPlatformKeyEnabledRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutIntegrationsPlatformKeyEnabledPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatPublicApiModelsPlatformCredentialsEnabledArgs;

  @SpeakeasyMetadata()
  security: PutIntegrationsPlatformKeyEnabledSecurity;
}


export class PutIntegrationsPlatformKeyEnabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsPlatformCredentialsPlatformSourceModel?: shared.CodatPublicApiModelsPlatformCredentialsPlatformSourceModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
