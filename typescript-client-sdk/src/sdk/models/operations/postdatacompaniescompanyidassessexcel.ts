import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class PostDataCompaniesCompanyIdAssessExcelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class PostDataCompaniesCompanyIdAssessExcelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType?: string;
}

export class PostDataCompaniesCompanyIdAssessExcelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class PostDataCompaniesCompanyIdAssessExcelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDataCompaniesCompanyIdAssessExcelPathParams;

  @SpeakeasyMetadata()
  queryParams: PostDataCompaniesCompanyIdAssessExcelQueryParams;

  @SpeakeasyMetadata()
  security: PostDataCompaniesCompanyIdAssessExcelSecurity;
}

export class PostDataCompaniesCompanyIdAssessExcelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsAssessAssessExcelMeta?: shared.CodatPublicApiModelsAssessAssessExcelMeta;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}