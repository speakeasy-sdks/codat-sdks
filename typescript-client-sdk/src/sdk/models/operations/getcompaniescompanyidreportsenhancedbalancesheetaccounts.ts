import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Transform, Type } from "class-transformer";


export class GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  reportDate?: Date;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsSecurity;
}

export class GetCompaniesCompanyIdReportsEnhancedBalanceSheetAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement?: shared.CodatAssessDataContractsFinancialsStatementsEnhancedFinancialStatement;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}