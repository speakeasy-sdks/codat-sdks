import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsSecurity;
}

export class GetCompaniesCompanyIdReportsEnhancedCashFlowTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport?: shared.CodatAssessDataContractsCashFlowTransactionsCashFlowTransactionsReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}