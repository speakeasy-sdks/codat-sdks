import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesPathParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesSecurity;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatAssessDataContractsAccountCategoriesAccountCategoriesModel?: shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
