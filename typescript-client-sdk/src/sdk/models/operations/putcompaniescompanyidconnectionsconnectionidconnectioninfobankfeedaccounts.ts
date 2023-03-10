import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount })
  request?: shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount[];

  @SpeakeasyMetadata()
  security: PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsSecurity;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount })
  codatStandardizationBankFeedsAccountsContractBankFeedBankAccounts?: shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
