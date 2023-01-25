package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetRulesAlertsQueryParams struct {
	CompanyID *string `queryParam:"style=form,explode=true,name=companyId"`
	OrderBy   *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page      int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize  *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query     *string `queryParam:"style=form,explode=true,name=query"`
}

type GetRulesAlertsSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetRulesAlertsRequest struct {
	QueryParams GetRulesAlertsQueryParams
	Security    GetRulesAlertsSecurity
}

type GetRulesAlertsResponse struct {
	CodatPublicAPIModelsRulesAlertModelPagedResponseModel *shared.CodatPublicAPIModelsRulesAlertModelPagedResponseModel
	ContentType                                           string
	StatusCode                                            int64
}
