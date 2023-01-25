import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRulesRuleIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}


export class GetRulesRuleIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class GetRulesRuleIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRulesRuleIdPathParams;

  @SpeakeasyMetadata()
  security: GetRulesRuleIdSecurity;
}


export class GetRulesRuleIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsRulesRule?: shared.CodatPublicApiModelsRulesRule;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
