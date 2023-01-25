package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type PostRulesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostRulesRequest struct {
	Request  *shared.CodatPublicAPIModelsRulesAddRuleModel `request:"mediaType=application/json"`
	Security PostRulesSecurity
}

type PostRulesResponse struct {
	CodatPublicAPIModelsRulesRule *shared.CodatPublicAPIModelsRulesRule
	ContentType                   string
	StatusCode                    int64
}
