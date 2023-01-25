import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: string;
}


export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsQueryParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsSecurity;
}


export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegrityDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataIntegrityContractsDetailsTransactionDetailsPagedResponse?: shared.CodatDataIntegrityContractsDetailsTransactionDetailsPagedResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
