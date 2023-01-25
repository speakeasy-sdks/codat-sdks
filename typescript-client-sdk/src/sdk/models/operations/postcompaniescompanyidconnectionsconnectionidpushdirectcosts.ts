import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsDirectCost;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsSecurity;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushDirectCostsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsDirectCostPushOperation?: shared.CodatDataContractsDatasetsDirectCostPushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
