import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connectionId" })
  connectionId: string;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeDisplayNames" })
  includeDisplayNames?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=numberOfPeriods" })
  numberOfPeriods: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=periodLength" })
  periodLength: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reportDate" })
  reportDate: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showInputValues" })
  showInputValues?: boolean;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingQueryParams;

  @SpeakeasyMetadata()
  security: GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingSecurity;
}


export class GetDataCompaniesCompanyIdConnectionsConnectionIdAssessAccountingMetricsMarketingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatStandardReportingContractsReport?: shared.CodatStandardReportingContractsReport;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
