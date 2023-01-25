package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesPathParams struct {
	CompanyID    string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID string `pathParam:"style=simple,explode=false,name=connectionId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesQueryParams struct {
	OrderBy  *string `queryParam:"style=form,explode=true,name=orderBy"`
	Page     int32   `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32  `queryParam:"style=form,explode=true,name=pageSize"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesSecurity struct {
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesRequest struct {
	PathParams  GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesPathParams
	QueryParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesQueryParams
	Security    GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesResponse struct {
	CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel *shared.CodatDataContractsDatasetsBankingTransactionCategoryPagedResponseModel
	ContentType                                                            string
	StatusCode                                                             int64
}
