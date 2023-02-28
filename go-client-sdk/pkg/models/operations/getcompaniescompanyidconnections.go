package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsPathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type GetCompaniesCompanyIDConnectionsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsPathParams
	QueryParams GetCompaniesCompanyIDConnectionsQueryParams
	Security    GetCompaniesCompanyIDConnectionsSecurity
}

type GetCompaniesCompanyIDConnectionsResponse struct {
	CodatPublicAPIModelsCompanyDataConnectionPagedResponseModel *shared.CodatPublicAPIModelsCompanyDataConnectionPagedResponseModel
	ContentType                                                 string
	StatusCode                                                  int
}
