import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=supplierId" })
  supplierId: string;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceUpdate" })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsSupplier;

  @SpeakeasyMetadata()
  security: PutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdSecurity;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSupplierIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsSupplierPushOperation?: shared.CodatDataContractsDatasetsSupplierPushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
