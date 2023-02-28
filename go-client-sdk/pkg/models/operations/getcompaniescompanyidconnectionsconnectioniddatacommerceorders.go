package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceOrdersResponse struct {
	CodatDataContractsDatasetsCommerceOrderPagedResponseModel *shared.CodatDataContractsDatasetsCommerceOrderPagedResponseModel
	ContentType                                               string
	StatusCode                                                int
}
