import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDataCompaniesCompanyIdAssessExcelDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class PostDataCompaniesCompanyIdAssessExcelDownloadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportType" })
  reportType?: string;
}


export class PostDataCompaniesCompanyIdAssessExcelDownloadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PostDataCompaniesCompanyIdAssessExcelDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDataCompaniesCompanyIdAssessExcelDownloadPathParams;

  @SpeakeasyMetadata()
  queryParams: PostDataCompaniesCompanyIdAssessExcelDownloadQueryParams;

  @SpeakeasyMetadata()
  security: PostDataCompaniesCompanyIdAssessExcelDownloadSecurity;
}


export class PostDataCompaniesCompanyIdAssessExcelDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postDataCompaniesCompanyIdAssessExcelDownload200ApplicationJSONBinaryString?: Uint8Array;
}
