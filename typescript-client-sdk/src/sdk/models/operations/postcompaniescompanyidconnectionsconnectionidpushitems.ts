import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostCompaniesCompanyIdConnectionsConnectionIdPushItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushItemsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsConnectionIdPushItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCompaniesCompanyIdConnectionsConnectionIdPushItemsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsItem;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsConnectionIdPushItemsSecurity;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsItemPushOperation?: shared.CodatDataContractsDatasetsItemPushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}