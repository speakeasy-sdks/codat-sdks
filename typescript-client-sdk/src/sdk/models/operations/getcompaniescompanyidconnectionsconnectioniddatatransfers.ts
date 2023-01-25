import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdConnectionsConnectionIdDataTransfersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataTransfersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataTransfersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdConnectionsConnectionIdDataTransfersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdConnectionsConnectionIdDataTransfersQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdConnectionsConnectionIdDataTransfersSecurity;
}


export class GetCompaniesCompanyIdConnectionsConnectionIdDataTransfersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsTransferPagedResponseModel?: shared.CodatDataContractsDatasetsTransferPagedResponseModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
