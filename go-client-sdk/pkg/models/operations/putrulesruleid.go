package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type PutRulesRuleIDPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type PutRulesRuleIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type PutRulesRuleIDRequest struct {
	PathParams PutRulesRuleIDPathParams
	Request    *shared.CodatPublicAPIModelsRulesRule `request:"mediaType=application/json"`
	Security   PutRulesRuleIDSecurity
}

type PutRulesRuleIDResponse struct {
	CodatPublicAPIModelsRulesRule *shared.CodatPublicAPIModelsRulesRule
	ContentType                   string
	StatusCode                    int
}
