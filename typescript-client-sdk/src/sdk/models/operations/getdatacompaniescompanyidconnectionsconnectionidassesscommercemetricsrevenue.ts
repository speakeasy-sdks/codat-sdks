import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisplayNames" })
  includeDisplayNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodUnit" })
  periodUnit: shared.CodatAssessDataContractsCommerceMetricsPeriodUnitEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: Date;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenuePathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueQueryParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueSecurity;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRevenueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatStandardReportingContractsReport?: shared.CodatStandardReportingContractsReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}