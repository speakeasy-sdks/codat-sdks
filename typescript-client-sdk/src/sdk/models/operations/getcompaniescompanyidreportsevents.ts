import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetCompaniesCompanyIdReportsEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}

export class GetCompaniesCompanyIdReportsEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: Date;
}

export class GetCompaniesCompanyIdReportsEventsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetCompaniesCompanyIdReportsEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCompaniesCompanyIdReportsEventsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCompaniesCompanyIdReportsEventsQueryParams;

  @SpeakeasyMetadata()
  security: GetCompaniesCompanyIdReportsEventsSecurity;
}

export class GetCompaniesCompanyIdReportsEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsCompanyCompanyEventStream?: shared.CodatPublicApiModelsCompanyCompanyEventStream;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}