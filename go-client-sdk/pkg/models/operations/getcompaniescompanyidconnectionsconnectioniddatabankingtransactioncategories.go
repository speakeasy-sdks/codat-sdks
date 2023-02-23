package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int     `queryParam:"style=form,explode=true,name=page"`
	PageSize *int    `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesResponse struct {
	CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel *shared.CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel
	ContentType                                                            string
	StatusCode                                                             int
}
