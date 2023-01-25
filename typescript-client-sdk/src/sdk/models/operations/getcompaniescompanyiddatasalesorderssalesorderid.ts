import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdDataSalesOrdersSalesOrderIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=salesOrderId" })
  salesOrderId: string;
}


export class GetCompaniesCompanyIdDataSalesOrdersSalesOrderIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdDataSalesOrdersSalesOrderIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataSalesOrdersSalesOrderIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataSalesOrdersSalesOrderIdSecurity;
}


export class GetCompaniesCompanyIdDataSalesOrdersSalesOrderIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsSalesOrder?: shared.CodatDataContractsDatasetsSalesOrder;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
