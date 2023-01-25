import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutRulesRuleIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}


export class PutRulesRuleIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class PutRulesRuleIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRulesRuleIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.CodatPublicApiModelsRulesRule;

  @SpeakeasyMetadata()
  security: PutRulesRuleIdSecurity;
}


export class PutRulesRuleIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  codatPublicApiModelsRulesRule?: shared.CodatPublicApiModelsRulesRule;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
