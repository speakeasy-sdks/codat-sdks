package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceCustomersResponse struct {
	CodatDataContractsDatasetsCommerceCustomerPagedResponseModel *shared.CodatDataContractsDatasetsCommerceCustomerPagedResponseModel
	ContentType                                                  string
	StatusCode                                                   int64
}
