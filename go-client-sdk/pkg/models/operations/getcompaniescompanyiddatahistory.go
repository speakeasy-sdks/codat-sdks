package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDDataHistoryPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDDataHistoryQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDDataHistorySecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDDataHistoryRequest struct {
	PathParams  GetCompaniesCompanyIDDataHistoryPathParams
	QueryParams GetCompaniesCompanyIDDataHistoryQueryParams
	Security    GetCompaniesCompanyIDDataHistorySecurity
}

type GetCompaniesCompanyIDDataHistoryResponse struct {
	CodatPublicAPIModelsDataDataSetPagedResponseModel *shared.CodatPublicAPIModelsDataDataSetPagedResponseModel
	ContentType                                       string
	StatusCode                                        int64
}
