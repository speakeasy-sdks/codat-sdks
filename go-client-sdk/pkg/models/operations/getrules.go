package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetRulesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetRulesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetRulesRequest struct {
	QueryParams GetRulesQueryParams
	Security    GetRulesSecurity
}

type GetRulesResponse struct {
	CodatPublicAPIModelsRulesRulePagedResponseModel *shared.CodatPublicAPIModelsRulesRulePagedResponseModel
	ContentType                                     string
	StatusCode                                      int64
}
