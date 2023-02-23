import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsSupplier;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersSecurity;
}

export class PostCompaniesCompanyIdConnectionsConnectionIdPushSuppliersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsSupplierPushOperation?: shared.CodatDataContractsDatasetsSupplierPushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}