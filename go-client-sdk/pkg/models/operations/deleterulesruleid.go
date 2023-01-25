package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type DeleteRulesRuleIDPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type DeleteRulesRuleIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRulesRuleIDRequest struct {
	PathParams DeleteRulesRuleIDPathParams
	Security   DeleteRulesRuleIDSecurity
}

type DeleteRulesRuleIDResponse struct {
	ContentType string
	StatusCode  int64
}
