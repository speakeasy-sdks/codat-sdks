import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";


export class GetRulesAlertsAlertIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=alertId" })
  alertId: string;
}

export class GetRulesAlertsAlertIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeAPIKeyAuth;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;
}

export class GetRulesAlertsAlertIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRulesAlertsAlertIdPathParams;

  @SpeakeasyMetadata()
  security: GetRulesAlertsAlertIdSecurity;
}

export class GetRulesAlertsAlertIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsRulesAlertModel?: shared.CodatPublicApiModelsRulesAlertModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}