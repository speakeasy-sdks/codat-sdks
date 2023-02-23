package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesRequest struct {
	QueryParams GetCompaniesQueryParams
	Security    GetCompaniesSecurity
}

type GetCompaniesResponse struct {
	CodatPublicAPIModelsCompanyCompanyPagedResponseModel *shared.CodatPublicAPIModelsCompanyCompanyPagedResponseModel
	ContentType                                          string
	StatusCode                                           int
}
