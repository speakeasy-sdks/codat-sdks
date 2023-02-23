package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetRulesRuleIDPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type GetRulesRuleIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetRulesRuleIDRequest struct {
	PathParams GetRulesRuleIDPathParams
	Security   GetRulesRuleIDSecurity
}

type GetRulesRuleIDResponse struct {
	CodatPublicAPIModelsRulesRule *shared.CodatPublicAPIModelsRulesRule
	ContentType                   string
	StatusCode                    int
}
