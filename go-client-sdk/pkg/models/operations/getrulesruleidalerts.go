package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetRulesRuleIDAlertsPathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type GetRulesRuleIDAlertsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetRulesRuleIDAlertsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetRulesRuleIDAlertsRequest struct {
	PathParams  GetRulesRuleIDAlertsPathParams
	QueryParams GetRulesRuleIDAlertsQueryParams
	Security    GetRulesRuleIDAlertsSecurity
}

type GetRulesRuleIDAlertsResponse struct {
	CodatPublicAPIModelsRulesAlertModelPagedResponseModel *shared.CodatPublicAPIModelsRulesAlertModelPagedResponseModel
	ContentType                                           string
	StatusCode                                            int64
}
