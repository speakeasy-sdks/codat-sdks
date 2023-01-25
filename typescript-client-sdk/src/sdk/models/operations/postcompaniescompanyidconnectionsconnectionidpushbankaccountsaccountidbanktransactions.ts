import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowSyncOnPushComplete" })
  allowSyncOnPushComplete?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsPathParams;

  @SpeakeasyMetadata()
  queryParams: PostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsBankTransactions;

  @SpeakeasyMetadata()
  security: PostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsSecurity;
}


export class PostCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsAccountIdBankTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsBankTransactionsPushOperation?: shared.CodatDataContractsDatasetsBankTransactionsPushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
