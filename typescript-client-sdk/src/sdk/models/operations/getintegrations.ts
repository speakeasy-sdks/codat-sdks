import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetIntegrationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetIntegrationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetIntegrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetIntegrationsQueryParams;

  @SpeakeasyMetadata()
  security: GetIntegrationsSecurity;
}


export class GetIntegrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseModel?: shared.CodatPublicApiModelsPlatformCredentialsPlatformSourceModelPagedResponseModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
