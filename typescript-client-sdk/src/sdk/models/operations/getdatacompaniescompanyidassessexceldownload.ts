import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataCompaniesCompanyIdAssessExcelDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetDataCompaniesCompanyIdAssessExcelDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType?: string;
}


export class GetDataCompaniesCompanyIdAssessExcelDownloadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetDataCompaniesCompanyIdAssessExcelDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdAssessExcelDownloadPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdAssessExcelDownloadQueryParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdAssessExcelDownloadSecurity;
}


export class GetDataCompaniesCompanyIdAssessExcelDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDataCompaniesCompanyIdAssessExcelDownload200ApplicationJSONBinaryString?: Uint8Array;
}
