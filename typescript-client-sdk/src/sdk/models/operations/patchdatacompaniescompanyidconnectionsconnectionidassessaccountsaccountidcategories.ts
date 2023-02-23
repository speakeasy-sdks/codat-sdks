import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatAssessDataContractsAccountCategoriesPatchSingleAccountCategoryModel;

  @SpeakeasyMetadata()
  security: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesSecurity;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsAccountIdCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatAssessDataContractsAccountCategoriesAccountCategoriesModel?: shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}