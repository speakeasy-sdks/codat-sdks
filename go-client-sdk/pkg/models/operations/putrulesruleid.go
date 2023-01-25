package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PutRulesRuleIDPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type PutRulesRuleIDSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PutRulesRuleIDRequest struct {
	PathParams PutRulesRuleIDPathParams
	Request    *shared.CodatPublicAPIModelsRulesRule `request:"mediaType=application/json"`
	Security   PutRulesRuleIDSecurity
}

type PutRulesRuleIDResponse struct {
	CodatPublicAPIModelsRulesRule *shared.CodatPublicAPIModelsRulesRule
	ContentType                   string
	StatusCode                    int64
}
