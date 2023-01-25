import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bankAccountId" })
  bankAccountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceUpdate" })
  forceUpdate?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeoutInMinutes" })
  timeoutInMinutes?: number;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatDataContractsDatasetsBankAccount;

  @SpeakeasyMetadata()
  security: PutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdSecurity;
}


export class PutCompaniesCompanyIdConnectionsConnectionIdPushBankAccountsBankAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsBankAccountPushOperation?: shared.CodatDataContractsDatasetsBankAccountPushOperation;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
