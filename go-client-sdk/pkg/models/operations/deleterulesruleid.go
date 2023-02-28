package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type DeleteRulesRuleIDPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type DeleteRulesRuleIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type DeleteRulesRuleIDRequest struct {
	PathParams DeleteRulesRuleIDPathParams
	Security   DeleteRulesRuleIDSecurity
}

type DeleteRulesRuleIDResponse struct {
	ContentType string
	StatusCode  int
}
