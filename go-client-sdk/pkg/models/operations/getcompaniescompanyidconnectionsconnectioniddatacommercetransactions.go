package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataCommerceTransactionsResponse struct {
	CodatDataContractsDatasetsCommerceTransactionPagedResponseModel *shared.CodatDataContractsDatasetsCommerceTransactionPagedResponseModel
	ContentType                                                     string
	StatusCode                                                      int
}
