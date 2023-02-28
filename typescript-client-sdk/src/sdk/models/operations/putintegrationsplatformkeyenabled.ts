import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PutIntegrationsPlatformKeyEnabledPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platformKey" })
  platformKey: string;
}

export class PutIntegrationsPlatformKeyEnabledSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
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