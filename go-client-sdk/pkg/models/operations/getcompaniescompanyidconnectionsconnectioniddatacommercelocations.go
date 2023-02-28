package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceLocationsResponse struct {
	CodatDataContractsDatasetsCommerceLocationPagedResponseModel *shared.CodatDataContractsDatasetsCommerceLocationPagedResponseModel
	ContentType                                                  string
	StatusCode                                                   int
}
