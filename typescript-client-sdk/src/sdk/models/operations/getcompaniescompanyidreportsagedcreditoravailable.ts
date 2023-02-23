import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdReportsAgedCreditorAvailablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdReportsAgedCreditorAvailableSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdReportsAgedCreditorAvailableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsAgedCreditorAvailablePathParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdReportsAgedCreditorAvailableSecurity;
}

export class GetCompaniesCompanyIdReportsAgedCreditorAvailableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCompaniesCompanyIdReportsAgedCreditorAvailable200ApplicationJSONBoolean?: boolean;
}