import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetCompaniesCompanyIdDataDatasetLogsDatasetIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=datasetId" })
  datasetId: string;
}

export class GetCompaniesCompanyIdDataDatasetLogsDatasetIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdDataDatasetLogsDatasetIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdDataDatasetLogsDatasetIdPathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdDataDatasetLogsDatasetIdSecurity;
}

export class GetCompaniesCompanyIdDataDatasetLogsDatasetIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPullMessagesContractsDatasetMessages?: shared.CodatPullMessagesContractsDatasetMessages;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}