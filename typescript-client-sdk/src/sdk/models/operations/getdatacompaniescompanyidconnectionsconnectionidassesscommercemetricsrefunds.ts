import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryParams extends SpeakeasyBase {
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


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsQueryParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsSecurity;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessCommerceMetricsRefundsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatStandardReportingContractsReport?: shared.CodatStandardReportingContractsReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
