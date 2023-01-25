import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompaniesCompanyIdConnectionsConnectionIdPushBillsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBillsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBillsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBillsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsConnectionIdPushBillsPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCompaniesCompanyIdConnectionsConnectionIdPushBillsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsBill;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsConnectionIdPushBillsSecurity;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBillsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsBillPushOperation?: shared.CodatDataContractsDatasetsBillPushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
