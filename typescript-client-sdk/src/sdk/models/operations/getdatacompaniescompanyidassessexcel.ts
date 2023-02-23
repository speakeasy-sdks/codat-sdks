import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetDataCompaniesCompanyIdAssessExcelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetDataCompaniesCompanyIdAssessExcelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType?: string;
}

export class GetDataCompaniesCompanyIdAssessExcelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetDataCompaniesCompanyIdAssessExcelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdAssessExcelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdAssessExcelQueryParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdAssessExcelSecurity;
}

export class GetDataCompaniesCompanyIdAssessExcelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsAssessAssessExcelMeta?: shared.CodatPublicApiModelsAssessAssessExcelMeta;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}