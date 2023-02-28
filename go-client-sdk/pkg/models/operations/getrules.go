package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetRulesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetRulesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetRulesRequest struct {
	QueryParams GetRulesQueryParams
	Security    GetRulesSecurity
}

type GetRulesResponse struct {
	CodatPublicAPIModelsRulesRulePagedResponseModel *shared.CodatPublicAPIModelsRulesRulePagedResponseModel
	ContentType                                     string
	StatusCode                                      int
}
