package operations

import (
	"github.com/speakeasy-sdks/codat-sdks/go-client-sdk/v2/pkg/models/shared"
)

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDPathParams struct {
	CompanyID             string `pathParam:"style=simple,explode=false,name=companyId"`
	ConnectionID          string `pathParam:"style=simple,explode=false,name=connectionId"`
	TransactionCategoryID string `pathParam:"style=simple,explode=false,name=transactionCategoryId"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDSecurity struct {
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
	CodatLogin *shared.SchemeCodatLogin `security:"scheme,type=oauth2"`
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDRequest struct {
	PathParams GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDPathParams
	Security   GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDSecurity
}

type GetCompaniesCompanyIDConnectionsConnectionIDDataBankingTransactionCategoriesTransactionCategoryIDResponse struct {
	CodatDataContractsDatasetsBankingTransactionCategory *shared.CodatDataContractsDatasetsBankingTransactionCategory
	ContentType                                          string
	StatusCode                                           int
}
