import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatAssessDataContractsAccountCategoriesPatchAccountCategoriesModel;

  @SpeakeasyMetadata()
  security: PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesSecurity;
}

export class PatchDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountsCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel })
  codatAssessDataContractsAccountCategoriesAccountCategoriesModels?: shared.CodatAssessDataContractsAccountCategoriesAccountCategoriesModel[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}