import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdDataFinancialsCashFlowStatementPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetCompaniesCompanyIdDataFinancialsCashFlowStatementQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodsToCompare" })
  periodsToCompare: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startMonth" })
  startMonth?: Date;
}


export class GetCompaniesCompanyIdDataFinancialsCashFlowStatementSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdDataFinancialsCashFlowStatementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataFinancialsCashFlowStatementPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdDataFinancialsCashFlowStatementQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataFinancialsCashFlowStatementSecurity;
}


export class GetCompaniesCompanyIdDataFinancialsCashFlowStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsDataCashFlowStatementResponse?: shared.CodatPublicApiModelsDataCashFlowStatementResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
