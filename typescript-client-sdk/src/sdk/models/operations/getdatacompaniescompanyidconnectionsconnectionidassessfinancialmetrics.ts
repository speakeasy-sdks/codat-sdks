import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Transform, Type } from "class-transformer";


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate;dateTimeFormat=YYYY-MM-DDThh:mm:ss.sssZ" })
  reportDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showMetricInputs" })
  showMetricInputs?: boolean;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsQueryParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsSecurity;
}

export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessFinancialMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet?: shared.CodatAssessDataContractsFinancialsMetricsFinancialMetricsDataSet;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}