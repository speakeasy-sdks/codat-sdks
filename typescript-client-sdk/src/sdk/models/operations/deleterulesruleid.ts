import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteRulesRuleIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: string;
}


export class DeleteRulesRuleIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  codatLogin?: shared.SchemeCodatLogin;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth?: shared.SchemeApiKeyAuth;
}


export class DeleteRulesRuleIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRulesRuleIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteRulesRuleIdSecurity;
}


export class DeleteRulesRuleIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
