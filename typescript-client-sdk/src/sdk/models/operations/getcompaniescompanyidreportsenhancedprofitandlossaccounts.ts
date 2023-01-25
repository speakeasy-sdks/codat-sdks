import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate?: Date;
}


export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsSecurity;
}


export class GetCompaniesCompanyIdReportsEnhancedProfitAndLossAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement?: shared.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
