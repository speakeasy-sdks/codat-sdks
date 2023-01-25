import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCompaniesCompanyIdReportsAgedCreditorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetCompaniesCompanyIdReportsAgedCreditorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLengthDays" })
  periodLengthDays?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate?: Date;
}


export class GetCompaniesCompanyIdReportsAgedCreditorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetCompaniesCompanyIdReportsAgedCreditorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsAgedCreditorPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdReportsAgedCreditorQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdReportsAgedCreditorSecurity;
}


export class GetCompaniesCompanyIdReportsAgedCreditorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsAgedCreditorOutstandingICollectionReport?: shared.CodatDataContractsDatasetsAgedCreditorOutstandingICollectionReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
