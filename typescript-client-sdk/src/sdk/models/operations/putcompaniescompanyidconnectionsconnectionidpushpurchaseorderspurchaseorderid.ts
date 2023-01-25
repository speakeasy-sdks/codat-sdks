import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=purchaseOrderId" })
  purchaseOrderId: string;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceUpdate" })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsPurchaseOrder;

  @SpeakeasyMetadata()
  security: PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdSecurity;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushPurchaseOrdersPurchaseOrderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsPurchaseOrderPushOperation?: shared.CodatDataContractsDatasetsPurchaseOrderPushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
