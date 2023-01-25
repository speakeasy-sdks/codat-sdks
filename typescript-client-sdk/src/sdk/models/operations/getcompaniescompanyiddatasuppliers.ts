import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdDataSuppliersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetCompaniesCompanyIdDataSuppliersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetCompaniesCompanyIdDataSuppliersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdDataSuppliersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataSuppliersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdDataSuppliersQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataSuppliersSecurity;
}


export class GetCompaniesCompanyIdDataSuppliersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsSupplierPagedResponseModel?: shared.CodatDataContractsDatasetsSupplierPagedResponseModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
