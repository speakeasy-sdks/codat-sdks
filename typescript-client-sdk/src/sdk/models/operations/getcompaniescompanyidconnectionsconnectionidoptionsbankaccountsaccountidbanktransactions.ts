import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsSecurity;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdOptionsBankAccountsAccountIdBankTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsPushPushOption?: shared.CodatDataContractsPushPushOption;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}