import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompaniesCompanyIdConnectionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class PostCompaniesCompanyIdConnectionsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=platformKey" })
  platformKey?: string;
}


export class PostCompaniesCompanyIdConnectionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostCompaniesCompanyIdConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostCompaniesCompanyIdConnectionsRequestBody;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsSecurity;
}


export class PostCompaniesCompanyIdConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsCompanyDataConnection?: shared.CodatPublicApiModelsCompanyDataConnection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
