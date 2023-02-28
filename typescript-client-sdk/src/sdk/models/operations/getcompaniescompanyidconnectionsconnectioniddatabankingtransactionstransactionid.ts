import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=transactionId" })
  transactionId: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdSecurity;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdDataBankingTransactionsTransactionIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsBankingTransaction?: shared.CodatDataContractsDatasetsBankingTransaction;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}