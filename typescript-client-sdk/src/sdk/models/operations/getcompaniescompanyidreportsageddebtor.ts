import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdReportsAgedDebtorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdReportsAgedDebtorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLengthDays" })
  periodLengthDays?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate?: Date;
}

export class GetCompaniesCompanyIdReportsAgedDebtorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdReportsAgedDebtorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsAgedDebtorPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdReportsAgedDebtorQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdReportsAgedDebtorSecurity;
}

export class GetCompaniesCompanyIdReportsAgedDebtorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatDataContractsDatasetsAgedDebtorOutstandingICollectionReport?: shared.CodatDataContractsDatasetsAgedDebtorOutstandingICollectionReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}