import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=trackingCategoryId" })
  trackingCategoryId: string;
}

export class GetCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdSecurity;
}

export class GetCompaniesCompanyIdDataTrackingCategoriesTrackingCategoryIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsDataTrackingCategoryTree?: shared.CodatPublicApiModelsDataTrackingCategoryTree;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}