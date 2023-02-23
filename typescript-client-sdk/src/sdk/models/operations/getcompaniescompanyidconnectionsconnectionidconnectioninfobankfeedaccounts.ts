import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsSecurity;
}

export class GetCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount })
  codatStandardizationBankFeedsAccountsContractBankFeedBankAccounts?: shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}