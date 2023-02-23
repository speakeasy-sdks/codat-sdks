import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dataType" })
  dataType: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesQueryParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesSecurity;
}

export class GetDataCompaniesCompanyIdAssessDataTypesDataTypeDataIntegritySummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataIntegrityContractsSummaryMatchSummariesResponse?: shared.CodatDataIntegrityContractsSummaryMatchSummariesResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}