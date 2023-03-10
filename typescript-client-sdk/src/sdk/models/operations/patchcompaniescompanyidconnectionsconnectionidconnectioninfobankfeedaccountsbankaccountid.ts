import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bankAccountId" })
  bankAccountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount;

  @SpeakeasyMetadata()
  security: PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdSecurity;
}


export class PatchCompaniesCompanyIdConnectionsConnectionIdConnectionInfoBankFeedAccountsBankAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatStandardizationBankFeedsAccountsContractBankFeedBankAccount?: shared.CodatStandardizationBankFeedsAccountsContractBankFeedBankAccount;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
