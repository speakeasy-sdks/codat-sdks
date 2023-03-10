import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdDataHistoryDatasetIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}


export class GetCompaniesCompanyIdDataHistoryDatasetIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdDataHistoryDatasetIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataHistoryDatasetIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataHistoryDatasetIdSecurity;
}


export class GetCompaniesCompanyIdDataHistoryDatasetIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsDataDataSet?: shared.CodatPublicApiModelsDataDataSet;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
