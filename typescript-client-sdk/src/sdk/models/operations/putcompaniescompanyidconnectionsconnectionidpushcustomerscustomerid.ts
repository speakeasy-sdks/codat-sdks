import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;
}

export class PutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceUpdate" })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

export class PutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsCustomer;

  @SpeakeasyMetadata()
  security: PutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdSecurity;
}

export class PutCompaniesCompanyIdConnectionsConnectionIdPushCustomersCustomerIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsCustomerPushOperation?: shared.CodatDataContractsDatasetsCustomerPushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}