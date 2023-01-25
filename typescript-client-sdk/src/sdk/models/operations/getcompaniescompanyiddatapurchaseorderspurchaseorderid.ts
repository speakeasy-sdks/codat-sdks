import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=purchaseOrderId" })
  purchaseOrderId: string;
}


export class GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdSecurity;
}


export class GetCompaniesCompanyIdDataPurchaseOrdersPurchaseOrderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsPurchaseOrder?: shared.CodatDataContractsDatasetsPurchaseOrder;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
