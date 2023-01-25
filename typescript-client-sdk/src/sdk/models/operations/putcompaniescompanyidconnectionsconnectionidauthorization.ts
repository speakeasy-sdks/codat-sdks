import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: Record<string, any>;

  @SpeakeasyMetadata()
  security: PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationSecurity;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsCompanyDataConnection?: shared.CodatPublicApiModelsCompanyDataConnection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
