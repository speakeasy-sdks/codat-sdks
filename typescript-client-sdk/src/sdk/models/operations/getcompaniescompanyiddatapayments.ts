import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdDataPaymentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetCompaniesCompanyIdDataPaymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetCompaniesCompanyIdDataPaymentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdDataPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataPaymentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdDataPaymentsQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataPaymentsSecurity;
}


export class GetCompaniesCompanyIdDataPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsPaymentPagedResponseModel?: shared.CodatDataContractsDatasetsPaymentPagedResponseModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
