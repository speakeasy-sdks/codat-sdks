import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchCompaniesCompanyIdConnectionsConnectionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PatchCompaniesCompanyIdConnectionsConnectionIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class PatchCompaniesCompanyIdConnectionsConnectionIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PatchCompaniesCompanyIdConnectionsConnectionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchCompaniesCompanyIdConnectionsConnectionIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PatchCompaniesCompanyIdConnectionsConnectionIdRequestBody;

  @SpeakeasyMetadata()
  security: PatchCompaniesCompanyIdConnectionsConnectionIdSecurity;
}


export class PatchCompaniesCompanyIdConnectionsConnectionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsCompanyDataConnection?: shared.CodatPublicApiModelsCompanyDataConnection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
