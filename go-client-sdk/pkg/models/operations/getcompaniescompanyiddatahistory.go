package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDDataHistoryPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataHistoryQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataHistorySecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDDataHistoryRequest struct {
	PathParams  GetCompaniesCompanyIDDataHistoryPathParams
	QueryParams GetCompaniesCompanyIDDataHistoryQueryParams
	Security    GetCompaniesCompanyIDDataHistorySecurity
}

type GetCompaniesCompanyIDDataHistoryResponse struct {
	CodatPublicAPIModelsDataDataSetPagedResponseModel *shared.CodatPublicAPIModelsDataDataSetPagedResponseModel
	ContentType                                       string
	StatusCode                                        int
}
