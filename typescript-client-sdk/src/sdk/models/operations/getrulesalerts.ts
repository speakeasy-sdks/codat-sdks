import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRulesAlertsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;
}


export class GetRulesAlertsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetRulesAlertsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRulesAlertsQueryParams;

  @SpeakeasyMetadata()
  security: GetRulesAlertsSecurity;
}


export class GetRulesAlertsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsRulesAlertModelPagedResponseModel?: shared.CodatPublicApiModelsRulesAlertModelPagedResponseModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
